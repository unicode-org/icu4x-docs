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
];

const TUTORIAL_ORDER = new Map<string, number>([
  ["quickstart.md", 0],
  ["data-management.md", 1],
  ["date-picker.md", 10], 
  ["date-picker-data.md", 11],
  ["data-provider-runtime.md", 50], 
]);

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
function icu4xAstroMdFrontMatter(foundTitle: string, order: number | undefined) {
  // special case for the quickstart tutorial title in ICU4X
  let title = foundTitle.replace(/Introduction to ICU4X for Rust/g, "Quickstart" );

  let frontMatterStr = "---" + "\n"
    + "title: " + title + "\n"
    + (order !== undefined ? "sidebar:\n    order: " + order + "\n" : "")
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
  {pattern: /```command.*/g, replacement: "```shell"},
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

  // in a relative link to a Markdown file, that optionally starts with "./", but not "..", get rid of the trailing `.md`
  replacementBody = replacementBody.replace(
    /(\[.*?\])\((?!http)(?!\.\.)(\.\/)?(.*?)\.md\)/g,
    "$1(" + sitePrefix + "/" + webDirName + "/tutorials" + "/$3)"
  );

  // in a relative link to a Markdown file, that starts with "..", format the URL to the Github blob
  replacementBody = replacementBody.replace(
    /(\[.*?\])\((?!http)(\.\.)(.*?)\.md\)/g,
    "$1(" + "https://github.com/unicode-org/icu4x/tree/" + encodeURIComponent(icu4xRef) + "/tutorials/$2$3.md)"
  );

  // changes docs.rs links from `latest` version to the specific ICU4X version
  replacementBody = replacementBody.replace(
    /https:\/\/docs.rs\/(.*?)\/latest/g,
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

  const order = TUTORIAL_ORDER.get(inFilePath.split('/')[inFilePath.split('/').length - 1]);

  const frontMatter = icu4xAstroMdFrontMatter(foundTitle, order);

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

    outFilePath = path.join(outDirPath, "tutorials", fileBaseName);

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
  console.log("\tnpm run icu4x-convert -- --icu4xDir=<input-dir> --icu4xVersion=<minor version> [--icu4xRef=<ICU4X-git-ref>] [--sitePrefix=<site-prefix-str-else-emptystr>] --astroVersion=<semver>");
  console.log();
  console.log("Example: npm run icu4x-convert -- --icu4xDir=../path/to/icu4x/ --icu4xVersion=2.1 [--icu4xRef=release/2.1-draft] [--sitePrefix=/uriPrefix] --astroVersion=4.16.18")
}

/**
 * Parse CLI args
 * @returns Parsed CLI structure per API
 */
function parseCLIArgs() {
  let parsedArgs = parseArgs({
    options: {
      icu4xDir: {
        type: "string",
        short: "i",
      },
      icu4xVersion: {
        type: "string",
      },
      icu4xRef: {
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
        icu4xDir: values["icu4xDir"] ?? (() => {throw new Error("Need icu4xDir")})(),
        icu4xVersion: values["icu4xVersion"] ?? (() => {throw new Error("Need icu4xVersion")})(),
        icu4xRef: values["icu4xRef"] ?? `release/${values["icu4xVersion"]}`,
        sitePrefix: values["sitePrefix"] ?? "",  // default value for sitePrefix is "" because
                                                 // URIs for base site icu4x.unicode.org do not need
                                                 // a prefix, unlike hosting on Github Pages
        astroVersion: values["astroVersion"] ?? (() => {throw new Error("Need astroVersion")})(),
      }
    };

    if ((values.icu4xVersion.match(/\./g) || []).length > 1) {
      console.log("use only a minor version, e.g. 2.1")
      process.exit(1);
    }
    return returnVal;
  } catch (err) {
    console.error('Missing CLI options.', err);
    printHelp();
    process.exit(1);
  }
}

// "main"

try {
  let root = path.join(import.meta.dirname, '..');

  const parsedArgs = parseCLIArgs();
  console.log("argv", process.argv);
  let {values, positionals} = parsedArgs;

  const icu4xDir = path.join(root, values["icu4xDir"]);
  const icu4xVersion = values["icu4xVersion"];
  const icu4xRef = values["icu4xRef"];
  const sitePrefix = values["sitePrefix"];
  const webDirName = icu4xVersion.replace('.', '_');
  const artifactsDir = path.join(root, 'public', webDirName);
  const outputDirPath = path.join(root, 'src/content/docs', webDirName);

  const context = new Context({icu4xVersion, icu4xRef, webDirName, sitePrefix});

  await convertDirFiles(path.join(icu4xDir, 'tutorials'), outputDirPath, context);
  
  console.log("Markdown conversion finished successfully");
  console.log();

  console.log(
    `{
    label: 'Version ${icu4xVersion}',
    badge: {
      text: 'New',
      variant: 'success',
    },
    items: [
      {
        label: 'Code examples',
        link: 'https://github.com/unicode-org/icu4x/tree/${icu4xRef}/examples',
        badge: { text: '↗', variant: 'tip' },
        attrs: { target: '_blank' },
      },
      {
        label: 'Interactive Demo',
        slug: '${webDirName}/demo',
      },
      {
        label: 'API documentation',
        items: [
          {
            label: 'Rust',
            link: 'https://docs.rs/icu/${icu4xVersion}',
            badge: { text: '↗', variant: 'tip' },
            attrs: { target: '_blank' },

          },
          {
            label: 'C++',
            link: '/${webDirName}/cppdoc/',
            badge: { text: '↗', variant: 'tip' },
            attrs: { target: '_blank' },
          },
          {
            label: 'Dart',
            link: '/${webDirName}/dartdoc/icu',
            badge: { text: '↗', variant: 'tip' },
            attrs: { target: '_blank' },
          },
          {
            label: 'TypeScript',
            link: '/${webDirName}/tsdoc/',
            badge: { text: '↗', variant: 'tip' },
            attrs: { target: '_blank' },
          },
        ],
      },
      {
        label: 'Tutorials',
        autogenerate: { directory: '${webDirName}/tutorials' },
      },
    ],
    collapsed: latest_dir_name != '${webDirName}',
  },
    `
  );

  console.log("Task: Add the above JSON to astro.config.mjs if it doesn't exist yet");
  console.log();

  console.log(`Task: Make sure to dump artifacts in ${artifactsDir}:`);
  console.log("You will need dart, typedoc, doxygen, doxygen-awesomecss installed")
  console.log();
  console.log(`mkdir ${artifactsDir}`);
  console.log(`pushd ${icu4xDir} && doxygen tools/doxygen/config.doxy && mv tools/doxygen/html/ ${artifactsDir}/cppdoc; popd`);
  console.log(`pushd ${icu4xDir}/ffi/dart && dart pub get && dart doc -o ${artifactsDir}/dartdoc; popd`);
  console.log(`pushd ${icu4xDir}/ffi/npm && make lib/index.mjs && typedoc --out ${artifactsDir}/tsdoc; popd`);
  console.log(`pushd ${icu4xDir}/tools/web-demo && npm install && npm run build && mkdir ${artifactsDir}/wasmdemo && cp -r public/ ${artifactsDir}/wasmdemo; popd`);

} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

