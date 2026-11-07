#!/usr/bin/env node
/**
 * DabWave hue-ramp catalog generator — fixed hue, fixed anchor (DAB-016).
 *
 * Usage:
 *   node scripts/hue-catalog.mjs
 *
 * Method:
 * - Thirteen steps share the ratified gray step names. The L ladder is fixed
 *   for every hue; 150 is absent (DAB-004).
 * - Each hue has a fixed H and a fixed anchor step chosen for its vivid
 *   lightness. The chroma curve peaks at the anchor, so warm hues are vivid
 *   instead of muddy.
 * - C = baseChroma × curve(step − anchor); baseChroma = 85% of the maximum
 *   in-gamut chroma at the anchor's L. Steps 0 and 1000 are white and black.
 * - Gamut mapping lowers C only; L and H never change.
 * - Functional colors are step references into red, amber, and green.
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
// Chroma multiplier relative to the anchor. The same shape is shifted so the
// anchor is always 1.00. Values beyond ±3 are curve extensions.
const OFFSETS = {
  '-6': 0.10, '-5': 0.18, '-4': 0.32, '-3': 0.52, '-2': 0.74, '-1': 0.92,
  0: 1.00, 1: 0.96, 2: 0.86, 3: 0.70, 4: 0.58, 5: 0.48, 6: 0.40,
  7: 0.32, 8: 0.24, 9: 0.16,
};
const HUES = [
  { name: 'red', hue: 25, anchor: 500 },
  { name: 'orange', hue: 50, anchor: 400 },
  { name: 'amber', hue: 75, anchor: 300 },
  { name: 'yellow', hue: 100, anchor: 200 },
  { name: 'lime', hue: 125, anchor: 400 },
  { name: 'green', hue: 150, anchor: 500 },
  { name: 'teal', hue: 180, anchor: 500 },
  { name: 'cyan', hue: 205, anchor: 500 },
  { name: 'blue', hue: 250, anchor: 500 },
  { name: 'indigo', hue: 275, anchor: 500 },
  { name: 'violet', hue: 300, anchor: 500 },
  { name: 'magenta', hue: 330, anchor: 500 },
];

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
const round2 = (n) => Number(n.toFixed(2));

// ---------- generate ramps ----------
const ramps = {};
const meta = {};
for (const { name, hue, anchor } of HUES) {
  const anchorIndex = idx(anchor);
  const anchorL = LADDER[anchor];
  const maxC = maxChroma(anchorL, hue);
  const baseC = maxC * 0.85;
  const steps = {};
  for (const step of STEPS) {
    let c = 0;
    if (step !== 0 && step !== 1000) {
      const d = idx(step) - anchorIndex;
      const multiplier = OFFSETS[String(Math.max(-6, Math.min(9, d)))] ?? 0;
      c = clampC(LADDER[step], hue, baseC * multiplier);
    }
    steps[step] = {
      hex: toHex(oklchToLinear(LADDER[step], c, hue)),
      L: LADDER[step],
      C: Number(c.toFixed(4)),
    };
  }
  ramps[name] = steps;
  meta[name] = {
    hue, anchor, anchorL,
    maxChroma: Number(maxC.toFixed(4)),
    baseChroma: Number(baseC.toFixed(4)),
  };
}

// ---------- action range finder ----------
// Finds three adjacent steps starting at (or near) the anchor where every
// state clears 3:1 against the theme surfaces and one on-color clears 4.5:1
// against all three states.
function findActionRange(ramp, anchor, theme) {
  const start = idx(anchor);
  const dir = theme === 'light' ? 1 : -1;
  const surfaces = theme === 'light' ? LIGHT_SURFACES : DARK_SURFACES;
  const candidates = theme === 'light'
    ? [['white', '#FFFFFF'], ['accent-50', ramp[50].hex], ['ink', GRAY[900]]]
    : [['black', '#000000'], ['ink', GRAY[900]], ['white', '#FFFFFF']];

  for (let i = start; i + dir * 2 >= 0 && i + dir * 2 < STEPS.length; i += dir) {
    const steps = [STEPS[i], STEPS[i + dir], STEPS[i + dir * 2]];
    const hexes = steps.map((s) => ramp[s].hex);
    if (hexes.some((h) => surfaces.some((s) => contrast(h, GRAY[s]) < 3))) continue;
    for (const [name, hex] of candidates) {
      if (hexes.every((h) => contrast(hex, h) >= 4.5)) {
        return { primary: steps[0], hover: steps[1], pressed: steps[2], subtle: theme === 'light' ? 100 : 900, on: name, onHex: hex };
      }
    }
  }
  return null;
}

const aliases = {};
const failures = [];
for (const { name, anchor } of HUES) {
  const light = findActionRange(ramps[name], anchor, 'light');
  const dark = findActionRange(ramps[name], anchor, 'dark');
  if (!light) failures.push(['light', `${name}: no action range`]);
  if (!dark) failures.push(['dark', `${name}: no action range`]);
  aliases[name] = { light, dark };
}

// ---------- functional mapping ----------
// Solid fill range from the action finder; strong text picked separately for
// contrast on neutral surfaces; subtle and on follow the theme.
function pickStrong(ramp, theme) {
  const surfaces = theme === 'light' ? LIGHT_SURFACES : DARK_SURFACES;
  const subtleStep = theme === 'light' ? 100 : 900;
  const order = theme === 'light' ? STEPS.slice(4) : STEPS.slice(0, 8).reverse();
  for (const step of order) {
    const hex = ramp[step].hex;
    if (
      surfaces.every((s) => contrast(hex, GRAY[s]) >= 4.5) &&
      contrast(hex, ramp[subtleStep].hex) >= 4.5
    ) return step;
  }
  return null;
}

const FUNCTIONAL = [
  { role: 'success', ramp: 'green' },
  { role: 'warning', ramp: 'amber' },
  { role: 'danger', ramp: 'red' },
];
const functional = {};
const checks = [];

for (const { role, ramp } of FUNCTIONAL) {
  const hueMeta = meta[ramp];
  const out = { ramp, anchor: hueMeta.anchor, light: {}, dark: {} };
  for (const theme of ['light', 'dark']) {
    const range = aliases[ramp][theme];
    if (!range) continue;
    const strong = pickStrong(ramps[ramp], theme);
    const subtle = theme === 'light' ? 100 : 900;
    out[theme] = {
      base: ramps[ramp][String(range.primary)].hex,
      hover: ramps[ramp][String(range.hover)].hex,
      pressed: ramps[ramp][String(range.pressed)].hex,
      strong: strong === null ? null : ramps[ramp][String(strong)].hex,
      subtle: ramps[ramp][String(subtle)].hex,
      on: range.onHex,
      steps: {
        base: range.primary, hover: range.hover, pressed: range.pressed,
        strong, subtle, on: range.on === 'black' ? 1000 : range.on === 'white' ? 0 : null,
      },
    };

    const m = out[theme];
    const surfaces = theme === 'light' ? LIGHT_SURFACES : DARK_SURFACES;
    const textMain = theme === 'light' ? GRAY[900] : GRAY[50];
    checks.push([theme, `${role}: on on base`, contrast(m.on, m.base), 4.5]);
    checks.push([theme, `${role}: on on hover`, contrast(m.on, m.hover), 4.5]);
    checks.push([theme, `${role}: on on pressed`, contrast(m.on, m.pressed), 4.5]);
    for (const s of surfaces) {
      checks.push([theme, `${role}: strong on gray-${s}`, m.strong ? contrast(m.strong, GRAY[s]) : 0, 4.5]);
      checks.push([theme, `${role}: base on gray-${s}`, contrast(m.base, GRAY[s]), 3]);
    }
    checks.push([theme, `${role}: text-primary on subtle`, contrast(textMain, m.subtle), 4.5]);
    checks.push([theme, `${role}: base on subtle`, contrast(m.base, m.subtle), 3]);
    if (m.strong) checks.push([theme, `${role}: strong on subtle`, contrast(m.strong, m.subtle), 4.5]);
  }
  functional[role] = out;
}

// Alias checks
for (const { name } of HUES) {
  for (const theme of ['light', 'dark']) {
    const a = aliases[name][theme];
    if (!a) continue;
    const ramp = ramps[name];
    const r = ramp[String(a.primary)];
    const surfaces = theme === 'light' ? [50, 0, 100] : [950, 900, 800];
    checks.push([theme, `${name}: primary on gray-${surfaces[0]}`, contrast(r.hex, GRAY[surfaces[0]]), 3]);
    checks.push([theme, `${name}: primary on gray-${surfaces[1]}`, contrast(r.hex, GRAY[surfaces[1]]), 3]);
    checks.push([theme, `${name}: primary on gray-${surfaces[2]}`, contrast(r.hex, GRAY[surfaces[2]]), 3]);
    checks.push([theme, `${name}: on on primary`, contrast(a.onHex, r.hex), 4.5]);
    checks.push([theme, `${name}: on on hover`, contrast(a.onHex, ramp[String(a.hover)].hex), 4.5]);
    checks.push([theme, `${name}: on on pressed`, contrast(a.onHex, ramp[String(a.pressed)].hex), 4.5]);
  }
}

const failed = checks.filter(([, , ratio, min]) => ratio < min);
const allFailures = failures.concat(failed.map(([theme, label, ratio, min]) => [theme, label + ` ${ratio.toFixed(2)}:1 < ${min}:1`]));

// ---------- write ----------
const outDir = path.join(process.cwd(), 'palettes');
fs.mkdirSync(outDir, { recursive: true });

const data = {
  status: 'proposed',
  decision: 'DAB-016',
  generated: '2026-11-07',
  steps: STEPS,
  ladder: LADDER,
  offsets: OFFSETS,
  hues: HUES.reduce((acc, h) => {
    acc[h.name] = { ...meta[h.name], steps: ramps[h.name], aliases: aliases[h.name] };
    return acc;
  }, {}),
  functional,
  checks: checks.map(([theme, label, ratio, min]) => ({ theme, label, ratio: round2(ratio), min })),
  failures: allFailures.length,
};
fs.writeFileSync(path.join(outDir, 'ramps.json'), JSON.stringify(data, null, 2) + '\n');

const lines = [];
lines.push('# DabWave Hue Ramps — Proposed Catalog');
lines.push('');
lines.push('**Status: Proposed (DAB-016).** Not approved. Generated by');
lines.push('`scripts/hue-catalog.mjs`; do not consume in a site until ratified.');
lines.push('');
lines.push('Thirteen steps share the ratified gray step names. Each hue has a fixed H');
lines.push('and a fixed anchor step chosen for its vivid lightness; the chroma curve');
lines.push('peaks at that anchor, so warm hues stay warm instead of turning muddy.');
lines.push('The L ladder is shared; steps 0 and 1000 are white and black.');
lines.push('');
lines.push('| Step | L |');
lines.push('|---:|---:|');
for (const s of STEPS) lines.push(`| ${s} | ${LADDER[s].toFixed(3)} |`);
lines.push('');
lines.push('Chroma multiplier by offset from the anchor:');
lines.push('');
lines.push('| d | ' + Object.keys(OFFSETS).join(' | ') + ' |');
lines.push('|---|' + Object.keys(OFFSETS).map(() => '---:').join('|') + '|');
lines.push('| C× | ' + Object.values(OFFSETS).map((v) => v.toFixed(2)).join(' | ') + ' |');
lines.push('');
lines.push('## Hue ramps');
lines.push('');
for (const { name, hue, anchor } of HUES) {
  lines.push(`### ${name} — H ${hue}°, anchor ${anchor} (L ${LADDER[anchor].toFixed(2)}), base C ${meta[name].baseChroma}`);
  lines.push('');
  lines.push('| Step | Hex | L | C |');
  lines.push('|---:|---|---:|---:|');
  for (const s of STEPS) {
    const v = ramps[name][s];
    const mark = s === anchor ? ' **anchor**' : '';
    lines.push(`| ${s} | \`${v.hex}\` | ${v.L.toFixed(2)} | ${v.C.toFixed(3)}${mark} |`);
  }
  lines.push('');
}
lines.push('## Action aliases');
lines.push('');
lines.push('| Hue | Light primary / hover / pressed / subtle / on | Dark primary / hover / pressed / subtle / on |');
lines.push('|---|---|---|');
for (const { name } of HUES) {
  const a = aliases[name];
  const l = a.light ? `${a.light.primary} / ${a.light.hover} / ${a.light.pressed} / ${a.light.subtle} / ${a.light.on}` : 'FAIL';
  const d = a.dark ? `${a.dark.primary} / ${a.dark.hover} / ${a.dark.pressed} / ${a.dark.subtle} / ${a.dark.on}` : 'FAIL';
  lines.push(`| ${name} | ${l} | ${d} |`);
}
lines.push('');
lines.push('## Functional colors (ramp references)');
lines.push('');
lines.push('| Role | Ramp | Light base / hover / pressed / strong / subtle / on | Dark base / hover / pressed / strong / subtle / on |');
lines.push('|---|---|---|---|');
for (const { role, ramp } of FUNCTIONAL) {
  const f = functional[role];
  const l = f.light.steps;
  const d = f.dark.steps;
  lines.push(`| ${role} | ${ramp} | ${l.base} / ${l.hover} / ${l.pressed} / ${l.strong} / ${l.subtle} / ${l.on} | ${d.base} / ${d.hover} / ${d.pressed} / ${d.strong} / ${d.subtle} / ${d.on} |`);
}
lines.push('');
lines.push('## Contrast results');
lines.push('');
lines.push(`Checked pairs: ${checks.length}. Failures: ${allFailures.length}.`);
lines.push('');
if (allFailures.length) {
  lines.push('| Theme | Pair |');
  lines.push('|---|---|');
  for (const [theme, label] of allFailures) lines.push(`| ${theme} | ${label} |`);
} else {
  lines.push('All checked pairs pass the DAB-002 thresholds.');
}
lines.push('');
fs.writeFileSync(path.join(outDir, 'catalog.md'), lines.join('\n') + '\n');

console.log('Wrote palettes/ramps.json and palettes/catalog.md');
console.log(`Hues: ${HUES.length}, steps: ${STEPS.length}, checks: ${checks.length}, failures: ${allFailures.length}`);
if (allFailures.length) {
  for (const [theme, label] of allFailures.slice(0, 20)) console.log(`  FAIL ${theme} ${label}`);
  process.exit(1);
}
