// Generate static OG image + apple-icon for Sequora (no external calls at runtime).
import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const f = (n) => readFileSync(join(here, "_fonts", n));
const fontBuffers = [
  f("Poppins-Regular.ttf"),
  f("Poppins-Medium.ttf"),
  f("Poppins-SemiBold.ttf"),
];

const leaf = `
  <g transform="translate(VARX,VARY) scale(VARS)">
    <rect width="64" height="64" rx="16" fill="#0c4339"/>
    <path d="M44 16c0 14.36-7.4 24-21 26 0-7.2 2.1-12.9 6.4-17.1C33.7 20.7 38.6 17.9 44 16Z" fill="#92F0BF"/>
    <path d="M20 48c1.6-9.2 6.1-16.4 13.4-21.4" stroke="#0c4339" stroke-width="2.4" stroke-linecap="round"/>
    <circle cx="20" cy="48" r="3.4" fill="#CEF0DE"/>
  </g>`;

const og = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#125749"/>
      <stop offset="1" stop-color="#0b3a31"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1120" cy="560" r="300" fill="#92F0BF" opacity="0.10"/>
  <circle cx="1080" cy="120" r="170" fill="#CEF0DE" opacity="0.07"/>
  <path d="M980 70c0 150-78 250-220 272 0-75 22-135 67-179C863 121 922 90 980 70Z" fill="#92F0BF" opacity="0.10"/>

  ${leaf.replace("VARX", "90").replace("VARY", "78").replace("VARS", "1.25")}
  <text x="196" y="138" font-family="Poppins" font-weight="600" font-size="54" fill="#ffffff" letter-spacing="-1">Sequora</text>

  <text x="92" y="312" font-family="Poppins" font-weight="500" font-size="26" fill="#92F0BF" letter-spacing="4">TRACK · REDUCE · REGENERATE</text>
  <text x="90" y="392" font-family="Poppins" font-weight="600" font-size="68" fill="#ffffff" letter-spacing="-2">Climate intelligence</text>
  <text x="90" y="470" font-family="Poppins" font-weight="600" font-size="68" fill="#CEF0DE" letter-spacing="-2">for teams that act</text>

  <text x="92" y="566" font-family="Poppins" font-weight="400" font-size="26" fill="#ffffff" opacity="0.72">Measure your footprint · reduce emissions · back restoration</text>
</svg>`;

const apple = `<svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
  <rect width="180" height="180" rx="40" fill="#105246"/>
  <path d="M124 44c0 40.4-20.8 67.5-59 73 0-20.3 5.9-36.3 18-48.1C95 56.7 108.8 48.9 124 44Z" fill="#92F0BF"/>
  <path d="M56 135c4.5-25.9 17.2-46.1 37.7-60.2" stroke="#105246" stroke-width="6.8" stroke-linecap="round"/>
  <circle cx="56" cy="135" r="9.6" fill="#CEF0DE"/>
</svg>`;

function render(svg, w) {
  const r = new Resvg(svg, {
    fitTo: { mode: "width", value: w },
    font: { fontBuffers, loadSystemFonts: false, defaultFontFamily: "Poppins" },
  });
  return r.render().asPng();
}

const root = join(here, "..");
const ogPng = render(og, 1200);
writeFileSync(join(root, "app", "opengraph-image.png"), ogPng);
writeFileSync(join(root, "app", "twitter-image.png"), ogPng);
writeFileSync(join(root, "app", "apple-icon.png"), render(apple, 180));
console.log("OG + apple-icon generated.");
