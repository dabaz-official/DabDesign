#!/usr/bin/env node
/**
 * DabWave hue-ramp catalog generator — 13-step OKLCH ladder (DAB-016 proposal).
 *
 * Usage:
 *   node scripts/hue-catalog.mjs
 *
 * Method:
 * - Fixed 13-step L ladder shared by every hue. Steps are the ratified gray
 *   steps (105 removed with DAB-004): 0/50/100/200/300/400/500/600/700/
 *   800/900/950/1000.
 * - C = baseChroma × curve[step]; baseChroma = 85% of the maximum in-gamut
 *   chroma at step 600 for that hue. Steps 0 and 1000 are pure white/black.
 * - Gamut mapping lowers C only; L and H never change.
 * - 12 hues, evenly spaced every 30°.
 * - Functional colors use the red (0°), yellow (90°), and green (150°) ramps.
 *
 * Writes palettes/ramps.json and palettes/catalog.md. Exits non-zero if any
 * checked pair misses its threshold.
 *
 * Zero dependencies. Node 18+.
 */

import fs from 'node:fs';
import path from 'node:path';

const STEPS = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 1000];
const LADDER = {
  0: 1.0, 50: 0.97, 100: 0.94, 200: 0.88, 300: 0.81, 400: 0.73, 500: 0.64,
  600: 0.56, 700: 0.48, 800: 0.40, 900: 0.32, 950: 0.22, 1000: 0.0,
};
const CURVE = {
  0: 0, 50: 0.10, 100: 0.18, 200: 0.32, 300: 0.52, 400: 0.74, 500: 0.92,
  600: 1.0, 700: 0.96, 800: 0.86, 900: 0.70, 950: 0.45, 1000: 0,
};
const HUES = [
  { name: 'rose', hue: 0 },
  { name: 'red', hue: 30 },
  { name: 'orange', hue: 60 },
  { name: 'amber', hue: 90 },
  { name: 'lime', hue: 120 },
  { name: 'green', hue: 150 },
  { name: 'teal', hue: 180 },
  { name: 'cyan', hue: 210 },
  { name: 'blue', hue: 240 },
  { name: 'indigo', hue: 270 },
  { name: 'violet', hue: 300 },
  { name: 'magenta', hue: 330 },
];
const ANCHOR = 600;

const GRAY = {
  0: '#FFFFFF', 50: '#FAFAFA', 100: '#F5F5F5', 200: '#E5E5E5', 300: '#D4D4D4',
  400: '#A3A3A3', 500: '#737373', 600: '#525252', 700: '#404040', 800: '#262626',
  900: '#171717', 950: '#0A0A0A', 1000: '#000000',
};
const LIGHT_SURFACES = [50, 0, 100];
const DARK_SURFACES = [950, 900, 800];

// ---------- OKLCH → sRGB ----------
function oklchToLinear(L, C, H) {
  const h = (H * Math.PI) / 180;
  const a = C * Math.cos(h);
  const b = C * Math.sin(h);
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;
  const l = l_ ** 3, m = m_ ** 3, s = s_ ** 3;
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
}
const EPS = 1e-4;
const inGamut = (rgb) => rgb.every((c) => c >= -EPS && c <= 1 + EPS);

function clampC(L, H, C) {
  if (inGamut(oklchToLinear(L, C, H))) return C;
  let lo = 0, hi = C;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    if (inGamut(oklchToLinear(L, mid, H))) lo = mid;
    else hi = mid;
  }
  return lo;
}
function maxChroma(L, H) {
  let lo = 0, hi = 0.4;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    if (inGamut(oklchToLinear(L, mid, H))) lo = mid;
    else hi = mid;
  }
  return lo;
}
const gamma = (c) => {
  const t = Math.min(1, Math.max(0, c));
  return t <= 0.0031308 ? 12.92 * t : 1.055 * t ** (1 / 2.4) - 0.055;
};
const toHex = (lin) =>
  '#' + lin.map((c) => Math.round(gamma(c) * 255).toString(16).padStart(2, '0')).join('').toUpperCase();

function hexToLin(hex) {
  const n = hex.replace('#', '');
  return [0, 2, 4].map((i) => {
    const c = parseInt(n.slice(i, i + 2), 16) / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
}
const luminance = (lin) => 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
const contrast = (a, b) => {
  const [hi, lo] = [luminance(hexToLin(a)), luminance(hexToLin(b))].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

const idx = (step) => STEPS.indexOf(step);
const nextStep = (step) => STEPS[Math.min(idx(step) + 1, STEPS.length - 1)];
const prevStep = (step) => STEPS[Math.max(idx(step) - 1, 0)];
const round2 = (n) => Number(n.toFixed(2));

// ---------- generate ----------
const ramps = {};
const meta = {};
for (const { name, hue } of HUES) {
  const maxC = maxChroma(LADDER[ANCHOR], hue);
  const baseC = maxC * 0.85;
  const steps = {};
  for (const step of STEPS) {
    const target = step === 0 || step === 1000 ? 0 : baseC * CURVE[step];
    const c = clampC(LADDER[step], hue, target);
    steps[step] = {
      hex: toHex(oklchToLinear(LADDER[step], c, hue)),
      L: LADDER[step],
      C: Number(c.toFixed(4)),
    };
  }
  ramps[name] = steps;
  meta[name] = { hue, maxChroma: Number(maxC.toFixed(4)), baseChroma: Number(baseC.toFixed(4)) };
}

// ---------- aliases ----------
function pickOn(primaryHex, candidates, min) {
  let best = null;
  for (const [label, hex] of candidates) {
    const r = contrast(hex, primaryHex);
    if (r >= min) return { name: label, hex, ratio: round2(r), pass: true };
    if (!best || r > best.ratio) best = { name: label, hex, ratio: round2(r), pass: false };
  }
  return best;
}

const aliases = {};
for (const { name } of HUES) {
  const ramp = ramps[name];

  let lightPrimary = ANCHOR;
  let lightOn = pickOn(ramps[name][lightPrimary].hex, [
    ['white', '#FFFFFF'],
    ['accent-50', ramps[name][50].hex],
    ['ink', GRAY[900]],
  ], 4.5);
  while (
    lightPrimary < 900 &&
    (contrast(ramps[name][lightPrimary].hex, GRAY[50]) < 3 ||
      contrast(ramps[name][lightPrimary].hex, GRAY[0]) < 3 ||
      !lightOn.pass)
  ) {
    lightPrimary = nextStep(lightPrimary);
    lightOn = pickOn(ramps[name][lightPrimary].hex, [
      ['white', '#FFFFFF'],
      ['accent-50', ramps[name][50].hex],
      ['ink', GRAY[900]],
    ], 4.5);
  }
  const lightHover = nextStep(lightPrimary);
  const lightPressed = nextStep(lightHover);
  const lightSubtle = contrast(GRAY[900], ramps[name][100].hex) >= 4.5 ? 100 : 50;

  let darkPrimary = 500;
  let darkOn = pickOn(ramps[name][darkPrimary].hex, [
    ['black', '#000000'],
    ['ink', GRAY[900]],
    ['white', '#FFFFFF'],
  ], 4.5);
  while (
    darkPrimary > 100 &&
    (contrast(ramps[name][darkPrimary].hex, GRAY[950]) < 3 ||
      contrast(ramps[name][darkPrimary].hex, GRAY[900]) < 3 ||
      !darkOn.pass)
  ) {
    darkPrimary = prevStep(darkPrimary);
    darkOn = pickOn(ramps[name][darkPrimary].hex, [
      ['black', '#000000'],
      ['ink', GRAY[900]],
      ['white', '#FFFFFF'],
    ], 4.5);
  }
  const darkHover = prevStep(darkPrimary);
  const darkPressed = prevStep(darkHover);
  const darkSubtle = contrast(GRAY[50], ramps[name][900].hex) >= 4.5 ? 900 : 950;

  aliases[name] = {
    light: {
      primary: lightPrimary, hover: lightHover, pressed: lightPressed,
      subtle: lightSubtle, on: lightOn.name, onHex: lightOn.hex, onRatio: lightOn.ratio,
    },
    dark: {
      primary: darkPrimary, hover: darkHover, pressed: darkPressed,
      subtle: darkSubtle, on: darkOn.name, onHex: darkOn.hex, onRatio: darkOn.ratio,
    },
  };
}

// ---------- functional mapping ----------
const FUNCTIONAL = [
  { role: 'success', ramp: 'green' },
  { role: 'warning', ramp: 'amber' },
  { role: 'danger', ramp: 'red' },
];
const functional = {};
const checks = [];
for (const { role, ramp } of FUNCTIONAL) {
  const light = { base: 700, hover: 800, pressed: 900, strong: 800, subtle: 100, on: 0 };
  const dark = { base: 400, hover: 300, pressed: 200, strong: 300, subtle: 900, on: 1000 };
  functional[role] = {
    ramp,
    light: Object.fromEntries(Object.entries(light).map(([k, s]) => [k, ramps[ramp][s].hex])),
    dark: Object.fromEntries(Object.entries(dark).map(([k, s]) => [k, ramps[ramp][s].hex])),
    steps: { light, dark },
  };
  for (const theme of ['light', 'dark']) {
    const m = functional[role][theme];
    const surfaces = theme === 'light' ? LIGHT_SURFACES : DARK_SURFACES;
    const textMain = theme === 'light' ? GRAY[900] : GRAY[50];
    checks.push([theme, `${role}: on on base`, contrast(m.on, m.base), 4.5]);
    checks.push([theme, `${role}: on on hover`, contrast(m.on, m.hover), 4.5]);
    checks.push([theme, `${role}: on on pressed`, contrast(m.on, m.pressed), 4.5]);
    for (const s of surfaces) {
      checks.push([theme, `${role}: strong on gray-${s}`, contrast(m.strong, GRAY[s]), 4.5]);
      checks.push([theme, `${role}: base on gray-${s}`, contrast(m.base, GRAY[s]), 3]);
    }
    checks.push([theme, `${role}: text-primary on subtle`, contrast(textMain, m.subtle), 4.5]);
    checks.push([theme, `${role}: base on subtle`, contrast(m.base, m.subtle), 3]);
    checks.push([theme, `${role}: strong on subtle`, contrast(m.strong, m.subtle), 4.5]);
  }
}

// Alias contrast checks
for (const { name } of HUES) {
  const a = aliases[name];
  const r = ramps[name];
  checks.push(['light', `${name}: primary on gray-50`, contrast(r[a.light.primary].hex, GRAY[50]), 3]);
  checks.push(['light', `${name}: primary on gray-0`, contrast(r[a.light.primary].hex, GRAY[0]), 3]);
  checks.push(['light', `${name}: on-primary on primary`, a.light.onRatio, 4.5]);
  checks.push(['dark', `${name}: primary on gray-950`, contrast(r[a.dark.primary].hex, GRAY[950]), 3]);
  checks.push(['dark', `${name}: primary on gray-900`, contrast(r[a.dark.primary].hex, GRAY[900]), 3]);
  checks.push(['dark', `${name}: on-primary on primary`, a.dark.onRatio, 4.5]);
}

const failures = checks.filter(([, , ratio, min]) => ratio < min);

// ---------- write ----------
const outDir = path.join(process.cwd(), 'palettes');
fs.mkdirSync(outDir, { recursive: true });

const data = {
  status: 'proposed',
  decision: 'DAB-016',
  generated: '2026-11-07',
  anchor: ANCHOR,
  steps: STEPS,
  ladder: LADDER,
  curve: CURVE,
  hues: HUES.reduce((acc, h) => {
    acc[h.name] = { ...meta[h.name], steps: ramps[h.name], aliases: aliases[h.name] };
    return acc;
  }, {}),
  functional,
  checks: checks.map(([theme, label, ratio, min]) => ({ theme, label, ratio: round2(ratio), min })),
  failures: failures.length,
};
fs.writeFileSync(path.join(outDir, 'ramps.json'), JSON.stringify(data, null, 2) + '\n');

const lines = [];
lines.push('# DabWave Hue Ramps — Proposed Catalog');
lines.push('');
lines.push('**Status: Proposed (DAB-016).** Not approved. Values are generated by');
lines.push('`scripts/hue-catalog.mjs` and must not be consumed until DAB-016 is ratified.');
lines.push('');
lines.push('Thirteen steps, shared with the ratified gray step names. The formula uses the');
lines.push('fixed L ladder and chroma curve below; base chroma is 85% of the maximum');
lines.push('in-gamut chroma at step 600 for each hue. Steps 0 and 1000 are pure white and');
lines.push('black. `gray-150` is intentionally absent (DAB-004).');
lines.push('');
lines.push('| Step | L | C curve |');
lines.push('|---:|---:|---:|');
for (const s of STEPS) lines.push(`| ${s} | ${LADDER[s].toFixed(3)} | ${CURVE[s].toFixed(2)} |`);
lines.push('');
lines.push('## Hue ramps');
lines.push('');
for (const { name, hue } of HUES) {
  lines.push(`### ${name} — H ${hue}°, base C ${meta[name].baseChroma}`);
  lines.push('');
  lines.push('| Step | Hex | L | C |');
  lines.push('|---:|---|---:|---:|');
  for (const s of STEPS) {
    const v = ramps[name][s];
    lines.push(`| ${s} | \`${v.hex}\` | ${v.L.toFixed(2)} | ${v.C.toFixed(3)} |`);
  }
  lines.push('');
}
lines.push('## Alias mappings');
lines.push('');
lines.push('| Hue | Light primary / hover / pressed / subtle / on | Dark primary / hover / pressed / subtle / on |');
lines.push('|---|---|---|');
for (const { name } of HUES) {
  const a = aliases[name];
  lines.push(`| ${name} | ${a.light.primary} / ${a.light.hover} / ${a.light.pressed} / ${a.light.subtle} / ${a.light.on} | ${a.dark.primary} / ${a.dark.hover} / ${a.dark.pressed} / ${a.dark.subtle} / ${a.dark.on} |`);
}
lines.push('');
lines.push('## Functional colors (ramp references)');
lines.push('');
lines.push('| Role | Ramp | Light base / hover / pressed / strong / subtle / on | Dark base / hover / pressed / strong / subtle / on |');
lines.push('|---|---|---|---|');
for (const { role, ramp } of FUNCTIONAL) {
  const f = functional[role];
  lines.push(`| ${role} | ${ramp} | ${f.steps.light.base} / ${f.steps.light.hover} / ${f.steps.light.pressed} / ${f.steps.light.strong} / ${f.steps.light.subtle} / ${f.steps.light.on} | ${f.steps.dark.base} / ${f.steps.dark.hover} / ${f.steps.dark.pressed} / ${f.steps.dark.strong} / ${f.steps.dark.subtle} / ${f.steps.dark.on} |`);
}
lines.push('');
lines.push('## Contrast results');
lines.push('');
lines.push(`Checked pairs: ${checks.length}. Failures: ${failures.length}.`);
lines.push('');
if (failures.length) {
  lines.push('| Theme | Pair | Ratio | Minimum |');
  lines.push('|---|---|---:|---:|');
  for (const [theme, label, ratio, min] of failures) {
    lines.push(`| ${theme} | ${label} | ${ratio.toFixed(2)}:1 | ${min}:1 |`);
  }
} else {
  lines.push('All checked pairs pass the DAB-002 thresholds.');
}
lines.push('');
fs.writeFileSync(path.join(outDir, 'catalog.md'), lines.join('\n') + '\n');

console.log(`Wrote palettes/ramps.json and palettes/catalog.md`);
console.log(`Hues: ${HUES.length}, steps: ${STEPS.length}, checks: ${checks.length}`);
console.log(`Failures: ${failures.length}`);
if (failures.length) {
  for (const [theme, label, ratio, min] of failures.slice(0, 20)) {
    console.log(`  FAIL ${theme} ${label} ${ratio.toFixed(2)}:1 (min ${min})`);
  }
  process.exit(1);
}
