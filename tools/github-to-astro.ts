import fs from 'node:fs';
import { parseArgs } from "node:util";
import path from 'node:path';

// site prefix, as used by static site generator tools.
// if this were hosted on Github pages,
const URI_SITE_PREFIX = "/icu4x-docs";


const ICU4X_MD_TITLES: Array<{basename: string; title: string}> = [
  {basename: "cargo.md", title: "Configuring Cargo.toml"},
  {basename: "data-management.md", title: "Data management"},
  {basename: "data-provider-runtime.md", title: "Loading Additional Data at Runtime"},
  {basename: "date-picker-data.md", title: "Interactive Date Picker - Custom Data"},
  {basename: "date-picker.md", title: "Interactive Date Picker"},
  {basename: "using-from-cpp.md", title: "Using from C++"},
  {basename: "using-from-js.md", title: "Using from JavaScript and TypeScript"},
];

function icu4xAstroMdFrontMatter(inFileBaseName: string) {
  let isBaseNameFound: boolean = false;
  let foundTitle: string = "";
  for (let {basename, title} of ICU4X_MD_TITLES) {
    if (basename == inFileBaseName) {
      isBaseNameFound = true;
      foundTitle = title;
    }
  }
  if (!isBaseNameFound) {
    console.error('File with name ' + inFileBaseName + ' has no MD title configured');
  } else {
    let frontMatterStr = "---" + "\n"
      + "title: " + foundTitle + "\n"
      + "---" + "\n";
    return frontMatterStr;
  }
}

const ICU4X_MD_REPLACEMENTS: Array<{pattern: string | RegExp; replacement: string}> = [
  // fix the code fence syntax highlighting language identifers
  {pattern: /```console.*/g, replacement: "```shell"},
  {pattern: /```rust.*/g, replacement: "```rust"},

  // remove H1 titles from MD pages in Github (because Front Matter is the way to 
  // specify page titles in most static site generator tools including Astro)
  {pattern: /^# .*/g, replacement: ""},
];

function transformMdBody(body: string, ctx: {versionStr: string, sitePrefix: string}) {
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
  const inFileBasename = path.basename(inFilePath);
  const frontMatter = icu4xAstroMdFrontMatter(inFileBasename);

  let replacementContent = transformMdBody(content, ctx);

  return frontMatter + "\n" + replacementContent;
}

function getUriVersionStr(version: string) {
  return version.replace(/\./g, "_");
}

function readConvertWrite(inFilePath: string, outFilePath: string, ctx: {versionStr: string, sitePrefix: string}) {
  let data: string = "";

  try {
    data = fs.readFileSync(inFilePath, { encoding: 'utf8' });
  } catch (err) {
    console.error('Could not read file: ' + inFilePath, err);
  }

  const transformedData = icu4xGfmToAstroMd(data, inFilePath, ctx);

  try {
    fs.writeFileSync(outFilePath, transformedData, {flag: "w+"});
    // file written successfully
  } catch (err) {
    console.error('Could not write to file: ' + outFilePath, err);
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

  await readConvertWrite(inputFileName, outputFileName, {versionStr: versionStr, sitePrefix: sitePrefix});
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(`Error: ${error.message}`);
  }
}

