#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const JavaScriptObfuscator = require("javascript-obfuscator");

const ROOT = path.join(__dirname, "..");

const FILES = [
  ["assets/js/app.js", "assets/js/app.min.js"],
  ["assets/js/enhance.js", "assets/js/enhance.min.js"]
];

const OPTIONS = {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.75,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 0.4,
  numbersToExpressions: true,
  simplify: true,
  stringArray: true,
  stringArrayEncoding: ["base64"],
  stringArrayThreshold: 0.75,
  splitStrings: true,
  splitStringsChunkLength: 10,
  selfDefending: true,
  target: "browser"
};

for (const [src, out] of FILES) {
  const srcPath = path.join(ROOT, src);
  const outPath = path.join(ROOT, out);
  const code = fs.readFileSync(srcPath, "utf8");
  const obfuscated = JavaScriptObfuscator.obfuscate(code, OPTIONS).getObfuscatedCode();
  fs.writeFileSync(outPath, obfuscated);
  console.log("build: " + src + " -> " + out);
}
