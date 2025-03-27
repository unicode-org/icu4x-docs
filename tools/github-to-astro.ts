import fs from 'node:fs';
import { parseArgs } from "node:util";
import path from 'node:path';
import { dir } from 'node:console';
import { get } from 'node:https';
import { release } from 'node:os';

// Hard code the tutorial names that are not version specific,
// So that they are not being transformed by this script
const ICU4X_NON_VERSION_SPECIFIC_FILES = [
  "README.md",
  "index.md"
];

/**
 * class to represent the values passed from the CLI through to the helper methods
 */
class Context {
  icu4xVersion: string;
  icu4xRef: string;
  webDirName: string;
  sitePrefix: string;

  constructor(argsMap: {
    icu4xVersion: string;
    icu4xRef: string;
    webDirName: string;
    sitePrefix: string
  }) {
    this.icu4xVersion = argsMap["icu4xVersion"];
    this.icu4xRef = argsMap["icu4xRef"];
    this.webDirName = argsMap["webDirName"];
    this.sitePrefix = argsMap["sitePrefix"];
  }
}

/**
 * Return the string of the AstroJS markdown "frontmatter"
 * @param foundTitle The page title string found from the H1 heading of the GH Markdown content
 * @returns the string of the AstroJS markdown "frontmatter"
 */
function icu4xAstroMdFrontMatter(foundTitle: string) {
  let frontMatterStr = "---" + "\n"
    + "title: " + foundTitle + "\n"
    + "---" + "\n";
  return frontMatterStr;
}

/**
 * Define rules of transformations to go from the Github Markdown to AstroJS.
 * Rules are given as pairs of regex patterns for detection and their corresponding replacement strings.
 */
const ICU4X_MD_REPLACEMENTS: Array<{pattern: string | RegExp; replacement: string}> = [
  // fix the code fence syntax highlighting language identifers
  {pattern: /```console.*/g, replacement: "```shell"},
  {pattern: /```rust.*/g, replacement: "```rust"},

  // remove H1 titles from MD pages in Github (because Front Matter is the way to 
  // specify page titles in most static site generator tools including Astro)
  {pattern: /^# .*/g, replacement: ""},

  // convert asides/notes from an ICU4X convention into the Astro syntax for Asides
  {pattern: /^(💡 )?Note: ([\s\S]*?)(?:\n\n)/gm, replacement: ":::note\n$2\n:::\n\n"}
];

/**
 * Convert the Github Markdown file contents string into the string of the AstroJS Markdown file body,
 * where "body" is the AstroJS Markdown content that comes after the front matter.
 * Some transformations are stateless, and are thus defined in ICU4X_MD_REPLACEMENTS.
 * Other transformations are file- and version-specific, and thus must be expressed via
 * some amount of code, using the Context.
 * @param body Github Markdown file full contents
 * @param ctx
 * @returns the string of the AstroJS Markdown file "body" that follows the front matter
 */
function transformMdBody(body: string, ctx: Context) {
  let replacementBody = body;
  for (let {pattern, replacement} of ICU4X_MD_REPLACEMENTS) {
    replacementBody = replacementBody.replace(pattern, replacement);
  }

  // convert Markdown links that work in Github (relative paths) into full URIs
  // that Astro JS needs, including the ICU4X prefix
  let { icu4xVersion, icu4xRef, webDirName, sitePrefix } = ctx;
  
  // in a relative link to any non-Markdown file, format the URL to the Github blob
  replacementBody = replacementBody.replace(
    /\]\((?!http)([^\)]*)(?<!.md)\)/g,
    "](" + "https://github.com/unicode-org/icu4x/tree/" + encodeURIComponent(icu4xRef) + "/tutorials/$1)"
  );

  // in a relative link specifically to quickstart.md
  replacementBody = replacementBody.replace(/(\[.*\])\((?!http)quickstart.md\)/g, "$1(" + sitePrefix + "/" + webDirName + "/quickstart)");

  // in a relative link to a Markdown file, that optionally starts with "./", but not "..", get rid of the trailing `.md`
  replacementBody = replacementBody.replace(/(\[.*\])\((?!http)(?!\.\.)(\.\/)?(.*)\.md\)/g, "$1(" + sitePrefix + "/" + webDirName + "/tutorials" + "/$3)");

  // in a relative link to a Markdown file, that starts with "..", format the URL to the Github blob
  replacementBody = replacementBody.replace(
    /(\[.*\])\((?!http)(\.\.)(.*)\.md\)/g,
    "$1(" + "https://github.com/unicode-org/icu4x/tree/" + encodeURIComponent(icu4xRef) + "/tutorials/$2)"
  );

  // changes docs.rs links from `latest` version to the specific ICU4X version
  replacementBody = replacementBody.replace(
    /https:\/\/docs.rs\/([^\/]*)\/latest/g,
    "https://docs.rs/$1/" + icu4xVersion
  )

  return replacementBody;
}

/**
 * Get the entire AstroJS Markdown file string, given the relevant info of the Github Markdown file.
 * @param content String of Github Markdown file contents
 * @param inFilePath Path string of input Github Markdown file
 * @param ctx 
 * @returns The AstroJS Markdown file contents string, including front matter and "body"
 */
function icu4xGfmToAstroMd(content: string, inFilePath: string, ctx: Context) {
  // JS regex appears to match (.*) only to the end of the line, and JS regex does
  // not behave well when putting the EOL $ symbol at the end of the regex.
  const titleHeadingRegexMatch = /^# (.*)/.exec(content);
  // get page title from first H1 heading. if not existent, then throw exception
  const foundTitle = titleHeadingRegexMatch![1];
  const frontMatter = icu4xAstroMdFrontMatter(foundTitle);

  let replacementContent = transformMdBody(content, ctx);

  return frontMatter + "\n" + replacementContent;
}

/**
 * Read an input GH Markdown file and write the transformed AstroJS content to the output file
 * @param inFilePath String of input file path
 * @param outFilePath String of output file path
 * @param ctx 
 * @returns Return the string of the transformed Markdown appropriate for AstroJS
 */
function readConvertWriteFile(inFilePath: string, outFilePath: string, ctx: Context) {
  let data: string = "";

  try {
    data = fs.readFileSync(inFilePath, { encoding: 'utf8' });
  } catch (err) {
    console.error('Could not read file: ' + inFilePath, err);
    process.exit(1);
  }

  const transformedData = icu4xGfmToAstroMd(data, inFilePath, ctx);

  try {
    fs.writeFileSync(outFilePath, transformedData, {flag: "w+"});
    // file written successfully
  } catch (err) {
    console.error('Could not write to file: ' + outFilePath, err);
    process.exit(1);
  }
  return;
}

function convertDirFiles(inDirPath: string, outDirPath: string, ctx: Context) {
  const dirEntries = fs.readdirSync(inDirPath, {withFileTypes: true});
  const fileOnlyEntries = dirEntries.filter((e) => e.isFile());
  const mdFileEntries = fileOnlyEntries.filter((e) => e.name.endsWith(".md"));
  const versionSpecificMdFileEntries = mdFileEntries.filter((e) => (!(ICU4X_NON_VERSION_SPECIFIC_FILES.includes(e.name))));

  fs.mkdirSync(path.join(outDirPath, "tutorials"), {recursive: true});

  for (let file of versionSpecificMdFileEntries) {
    const fileBaseName = file.name;
    const inFilePath = path.join(inDirPath, fileBaseName);
    let outFilePath = "";

    // put quickstart.md in the root dir, all other files go into the `tutorials` dir
    if (fileBaseName == "quickstart.md") {
      outFilePath = path.join(outDirPath, fileBaseName);
    } else {
      outFilePath = path.join(outDirPath, "tutorials", fileBaseName);
    }

    readConvertWriteFile(inFilePath, outFilePath, ctx);
  }
}

/**
 * Print CLI usage
 */
function printHelp() {
  console.log("Convert ICU4X Github repo Markdown tutorials to Astro MDX files");
  console.log();
  console.log("Usage:");
  console.log("\tnpm run icu4x-convert -- --inDir=<input-dir> --outDir=<output-dir> --icu4xRef=<ICU4X-git-ref> --webDirName=<version-based-dir-name> --sitePrefix=<site-prefix-str-else-emptystr> --astroVersion=<semver>");
  console.log();
  console.log("Example: npm run icu4x-convert -- --inDir=/tmp/1.5-tutorials/ --outDir=/tmp/1.5-output/ --icu4xVersion=1.5.0 --icu4xRef=release/1.5 --webDirName=1_5 --sitePrefix=/icu4x-docs --astroVersion=4.16.18")
}

/**
 * Parse CLI args
 * @returns Parsed CLI structure per API
 */
function parseCLIArgs() {
  let parsedArgs = parseArgs({
    options: {
      inDir: {
        type: "string",
        short: "i",
      },
      outDir: {
        type: "string",
        short: "o",
      },
      icu4xVersion: {
        type: "string",
      },
      icu4xRef: {
        type: "string",
      },
      webDirName: {
        type: "string",
      },
      // site prefix, as used by static site generator tools.
      // if this were hosted on Github pages,
      sitePrefix: {
        type: "string",
      },
      astroVersion: {
        type: "string",
      },
    }
  });
  let {values, positionals} = parsedArgs;
  try {
    let returnVal = {
      positionals: positionals,
      values: {
        inDir: values["inDir"] ?? (() => {throw new Error("Need inDir")})(),
        outDir: values["outDir"] ?? (() => {throw new Error("Need outDir")})(),
        icu4xVersion: values["icu4xVersion"] ?? (() => {throw new Error("Need icu4xVersion")})(),
        icu4xRef: values["icu4xRef"] ?? (() => {throw new Error("Need icu4xRef")})(),
        webDirName: values["webDirName"] ?? (() => {throw new Error("Need webDirName")})(),
        sitePrefix: values["sitePrefix"] ?? (() => {throw new Error("Need sitePrefix")})(),
        astroVersion: values["astroVersion"] ?? (() => {throw new Error("Need astroVersion")})(),
      }
    };
    return returnVal;
  } catch (err) {
    console.error('Missing CLI options.', err);
    printHelp();
    process.exit(1);
  }
}

// "main"

try {
  const parsedArgs = parseCLIArgs();
  console.log("argv", process.argv);
  let {values, positionals} = parsedArgs;

  const inputDirPath: string = values["inDir"];
  const outputDirPath = values["outDir"];
  const icu4xVersion = values["icu4xVersion"];
  const icu4xRef = values["icu4xRef"];
  const sitePrefix = values["sitePrefix"];
  const webDirName = values["webDirName"];

  const context = new Context({icu4xVersion, icu4xRef, webDirName, sitePrefix});

  await convertDirFiles(inputDirPath, outputDirPath, context);

  console.log("Markdown conversion finished successfully");
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

