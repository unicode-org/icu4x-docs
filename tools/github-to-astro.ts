import fs from 'node:fs';
import { parseArgs } from "node:util";
import path from 'node:path';

class Context {
  versionStr: string;
  sitePrefix: string;

  constructor(argsMap: {
    versionStr: string;
    sitePrefix: string
  }) {
    this.versionStr = argsMap["versionStr"];
    this.sitePrefix = argsMap["sitePrefix"];
  }
}

// site prefix, as used by static site generator tools.
// if this were hosted on Github pages,
const URI_SITE_PREFIX = "/icu4x-docs";

function icu4xAstroMdFrontMatter(foundTitle: string) {
  let frontMatterStr = "---" + "\n"
    + "title: " + foundTitle + "\n"
    + "---" + "\n";
  return frontMatterStr;
}

const ICU4X_MD_REPLACEMENTS: Array<{pattern: string | RegExp; replacement: string}> = [
  // fix the code fence syntax highlighting language identifers
  {pattern: /```console.*/g, replacement: "```shell"},
  {pattern: /```rust.*/g, replacement: "```rust"},

  // remove H1 titles from MD pages in Github (because Front Matter is the way to 
  // specify page titles in most static site generator tools including Astro)
  {pattern: /^# .*/g, replacement: ""},
];

function transformMdBody(body: string, ctx: Context) {
  let replacementBody = body;
  for (let {pattern, replacement} of ICU4X_MD_REPLACEMENTS) {
    replacementBody = replacementBody.replace(pattern, replacement);
  }

  // convert Markdown links that work in Github (relative paths) into full URIs
  // that Astro JS needs, including the ICU4X prefix
  let { versionStr, sitePrefix } = ctx;
  replacementBody = replacementBody.replace(/(\[.*\])\((?!http)(.*)\)/g, "$1(" + sitePrefix + "/" + versionStr + "/$2)");
  // get rid of the trailing `.md` in a Markdown link
  replacementBody = replacementBody.replace(/(\[.*\])\((.*)\.md\)/g, "$1(" + sitePrefix + "/" + versionStr + "/$2)");

  return replacementBody;
}

function icu4xGfmToAstroMd(content: string, inFilePath: string, ctx: {versionStr: string, sitePrefix: string}) {
  // JS regex appears to match (.*) only to the end of the line, and JS regex does
  // not behave well when putting the EOL $ symbol at the end of the regex.
  const titleHeadingRegexMatch = /^# (.*)/.exec(content);
  // get page title from first H1 heading. if not existent, then throw exception
  const foundTitle = titleHeadingRegexMatch![1];
  const frontMatter = icu4xAstroMdFrontMatter(foundTitle);

  let replacementContent = transformMdBody(content, ctx);

  return frontMatter + "\n" + replacementContent;
}

function getUriVersionStr(version: string) {
  return version.replace(/\./g, "_");
}

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

function printHelp() {
  console.log("Convert ICU4X Github repo Markdown tutorials to Astro MDX files");
  console.log();
  console.log("Usage:");
  console.log("\tnpx tsx -- --inFile=<input-file> --outFile=<output-file> --icu4xTag=<ICU4X-semver> --sitePrefx=<site-prefix-str-else-emptystr>");
}

function parseCLIArgs() {
  let parsedArgs = parseArgs({
    options: {
      inFile: {
        type: "string",
        short: "i",
      },
      outFile: {
        type: "string",
        short: "o",
      },
      icu4xTag: {
        type: "string",
      },
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
        inFile: values["inFile"] ?? (() => {throw new Error("Need inFile")})(),
        outFile: values["outFile"] ?? (() => {throw new Error("Need outFile")})(),
        version: values["icu4xTag"] ?? (() => {throw new Error("Need icu4xTag")})(),
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

try {
  const parsedArgs = parseCLIArgs();
  console.log("argv", process.argv);
  let {values, positionals} = parsedArgs;

  const inputFileName: string = values["inFile"];
  const outputFileName = values["outFile"];
  const version = values["version"];
  const sitePrefix = values["sitePrefix"];
  
  const versionStr = getUriVersionStr(version);

  const context = new Context({versionStr, sitePrefix});

  await readConvertWriteFile(inputFileName, outputFileName, context);
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

