import fs from 'node:fs';
import { parseArgs } from "node:util";

const ICU4X_MD_REPLACEMENTS: Array<{pattern: string | RegExp; replacement: string}> = [
  {pattern: /```console.*/, replacement: "```shell"},
  {pattern: /```rust.*/, replacement: "```rust"},
];

function icu4xGfmToAstroMd(chunk: string, inFilePath: string) {
  let replacementChunk = chunk;
  for (let {pattern, replacement} of ICU4X_MD_REPLACEMENTS) {
    replacementChunk = replacementChunk.replace(pattern, replacement);
  }
  return replacementChunk;
}

function readConvertWrite(inFilePath: string, outFilePath: string) {
  let data: string = "";

  try {
    data = fs.readFileSync(inFilePath, { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.error('Could not read file: ' + inFilePath, err);
  }

  const transformedData = icu4xGfmToAstroMd(data, inFilePath);

  try {
    fs.writeFileSync(outFilePath, transformedData);
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
  console.log("\tnpx tsx -- --inFile=<input-file> --outFile=<output-file> --icu4xTag=<ICU4X-semver>");
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
  var outputFileName = values["outFile"];

  await readConvertWrite(inputFileName, outputFileName);
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(`Error: ${error.message}`);
  }
}

