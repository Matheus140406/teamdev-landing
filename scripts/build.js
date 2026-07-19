#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const JavaScriptObfuscator = require("javascript-obfuscator");
const { minify: minifyCss } = require("csso");

const ROOT = path.join(__dirname, "..");

const FILES = [
  ["assets/js/app.js", "assets/js/app.min.js"],
  ["assets/js/enhance.js", "assets/js/enhance.min.js"]
];

/* Ofuscação "leve": mantém o código ilegível (nomes trocados + strings em
   base64) sem control-flow-flattening/dead-code, que multiplicavam o bundle
   por 2,5x e custavam ~2s de CPU no mobile (Lighthouse TBT). */
const OPTIONS = {
  compact: true,
  simplify: true,
  stringArray: true,
  stringArrayEncoding: ["base64"],
  stringArrayThreshold: 0.6,
  renameGlobals: false,
  target: "browser"
};

for (const [src, out] of FILES) {
  const code = fs.readFileSync(path.join(ROOT, src), "utf8");
  const obfuscated = JavaScriptObfuscator.obfuscate(code, OPTIONS).getObfuscatedCode();
  fs.writeFileSync(path.join(ROOT, out), obfuscated);
  console.log("build: " + src + " -> " + out + " (" + (obfuscated.length / 1024).toFixed(0) + " KB)");
}

/* CSS minificado para produção (o fonte styles.css continua no repo) */
const css = fs.readFileSync(path.join(ROOT, "assets/css/styles.css"), "utf8");
const min = minifyCss(css).css;
fs.writeFileSync(path.join(ROOT, "assets/css/styles.min.css"), min);
console.log("build: assets/css/styles.css -> assets/css/styles.min.css (" + (min.length / 1024).toFixed(0) + " KB)");
