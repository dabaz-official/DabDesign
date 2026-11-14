#!/usr/bin/env node
/**
 * DabDesign hue catalog — adopted Tailwind CSS v3.4.17 palettes (DEC-014).
 *
 * Usage:
 *   node scripts/hue-catalog.mjs
 *
 * The 12 hue ramps are adopted from Tailwind CSS v3.4.17 (MIT). Ramps run 50–950;
 * white and black are separate primitives, not steps. This script selects
 * contrast-safe action ranges, computes functional mappings, and writes the
 * catalog.
 *
 * Writes palettes/ramps.json and palettes/catalog.md. Exits non-zero if any
 * checked pair misses its threshold.
 *
 * Zero dependencies. Node 18+.
 */

import fs from 'node:fs';
import path from 'node:path';

const SOURCE_FILE = path.join(process.cwd(), 'palettes', 'tailwind-source.json');
const source = JSON.parse(fs.readFileSync(SOURCE_FILE, 'utf8'));
const COLORS = Object.keys(source.colors);
const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const TAILWIND_STEPS = source.steps;
const WHITE = '#FFFFFF';
const BLACK = '#000000';

const GRAY = {
  0: '#FFFFFF', 50: '#FAFAFA', 100: '#F5F5F5', 200: '#E5E5E5', 300: '#D4D4D4',
  400: '#A3A3A3', 500: '#737373', 600: '#525252', 700: '#404040', 800: '#262626',
  900: '#171717', 950: '#0A0A0A', 1000: '#000000',
};
const LIGHT_SURFACES = ['white', 'gray-50', 'gray-100'];
const DARK_SURFACES = ['gray-950', 'gray-900', 'gray-800'];
const surfaceHex = (name) => (name === 'white' ? WHITE : GRAY[name.replace('gray-', '')]);

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
const round2 = (n) => Number(n.toFixed(2));

// ---------- build ramps ----------
const ramps = {};
for (const name of COLORS) {
  const steps = {};
  for (const step of TAILWIND_STEPS) {
    const v = source.colors[name][step];
    steps[step] = { hex: v.hex, oklch: v.oklch, L: v.L, C: v.C, H: v.H };
  }
  ramps[name] = steps;
}

// ---------- action fill range ----------
// Prefer the vivid 500 in light and 400 in dark. Walk all three-step windows
// by distance from that preference; accept the first window where the primary
// clears 3:1 on every surface and one on-color clears 4.5:1 on all three states.
function findFillRange(ramp, theme) {
  const pref = theme === 'light' ? 500 : 400;
  const surfaces = theme === 'light' ? LIGHT_SURFACES : DARK_SURFACES;
  const onCandidates = theme === 'light'
    ? [['white', '#FFFFFF'], ['black', '#000000']]
    : [['black', '#000000'], ['white', '#FFFFFF']];

  const windows = [];
  for (let i = 0; i < STEPS.length - 2; i++) windows.push([STEPS[i], STEPS[i + 1], STEPS[i + 2]]);
  windows.sort((a, b) => Math.abs(a[0] - pref) - Math.abs(b[0] - pref));

  for (const steps of windows) {
    const hexes = steps.map((s) => ramp[s].hex);
    if (hexes.some((h) => surfaces.some((s) => contrast(h, surfaceHex(s)) < 3))) continue;
    for (const [name, hex] of onCandidates) {
      if (hexes.every((h) => contrast(hex, h) >= 4.5)) {
        return {
          primary: steps[0], hover: steps[1], pressed: steps[2],
          subtle: theme === 'light' ? 100 : 900,
          on: name, onHex: hex,
        };
      }
    }
  }
  return null;
}

// Link-safe text step: 4.5:1 on all surfaces.
function findTextStep(ramp, theme) {
  const surfaces = theme === 'light' ? LIGHT_SURFACES : DARK_SURFACES;
  const order = theme === 'light'
    ? [600, 700, 800, 900, 950]
    : [400, 300, 200, 100, 50];
  for (const step of order) {
    if (surfaces.every((s) => contrast(ramp[step].hex, surfaceHex(s)) >= 4.5)) {
      return { step, hex: ramp[step].hex };
    }
  }
  return null;
}

function findStrong(ramp, theme) {
  const surfaces = theme === 'light' ? LIGHT_SURFACES : DARK_SURFACES;
  const subtle = theme === 'light' ? 100 : 900;
  const order = theme === 'light'
    ? [600, 700, 800, 900, 950]
    : [400, 300, 200, 100, 50];
  for (const step of order) {
    const hex = ramp[step].hex;
    if (
      surfaces.every((s) => contrast(hex, surfaceHex(s)) >= 4.5) &&
      contrast(hex, ramp[subtle].hex) >= 4.5
    ) return step;
  }
  return null;
}

// ---------- aliases ----------
const hues = {};
const failures = [];
for (const name of COLORS) {
  const ramp = ramps[name];
  const fill = {};
  const text = {};
  for (const theme of ['light', 'dark']) {
    const range = findFillRange(ramp, theme);
    const link = findTextStep(ramp, theme);
    if (!range) failures.push(['theme', `${name}: no fill range`]);
    if (!link) failures.push(['theme', `${name}: no text step`]);
    fill[theme] = range;
    text[theme] = link;
  }
  hues[name] = { display: 500, steps: ramp, fill, text };
}

// ---------- functional ----------
const FUNCTIONAL = [
  { role: 'success', ramp: 'green' },
  { role: 'warning', ramp: 'amber' },
  { role: 'danger', ramp: 'red' },
];
// Owner direction 2026-11-07: in dark mode, functional danger defaults to the
// vivid red-500; hover and pressed step lighter. Black text passes all three.
const FUNCTIONAL_OVERRIDES = {
  danger: { dark: { base: 500, hover: 400, pressed: 300, subtle: 950 } },
};
const functional = {};
const checks = [];

for (const { role, ramp } of FUNCTIONAL) {
  const out = { ramp, light: {}, dark: {} };
  for (const theme of ['light', 'dark']) {
    const range = hues[ramp].fill[theme];
    const strong = findStrong(ramps[ramp], theme);
    const override = (FUNCTIONAL_OVERRIDES[role] || {})[theme];
    const subtle = override && override.subtle ? override.subtle : theme === 'light' ? 100 : 900;
    const baseStep = override ? override.base : range ? range.primary : null;
    const hoverStep = override ? override.hover : range ? range.hover : null;
    const pressedStep = override ? override.pressed : range ? range.pressed : null;
    out[theme] = {
      base: baseStep === null ? null : ramps[ramp][baseStep].hex,
      hover: hoverStep === null ? null : ramps[ramp][hoverStep].hex,
      pressed: pressedStep === null ? null : ramps[ramp][pressedStep].hex,
      strong: strong === null ? null : ramps[ramp][strong].hex,
      subtle: ramps[ramp][subtle].hex,
      on: range ? range.onHex : null,
      steps: {
        base: baseStep,
        hover: hoverStep,
        pressed: pressedStep,
        strong, subtle,
        on: range ? range.on : null,
      },
    };

    const m = out[theme];
    const surfaces = theme === 'light' ? LIGHT_SURFACES : DARK_SURFACES;
    const textMain = theme === 'light' ? GRAY[900] : GRAY[50];
    if (!range) {
      failures.push(['theme', `${role}: no fill range`]);
      continue;
    }
    checks.push([theme, `${role}: on on base`, contrast(m.on, m.base), 4.5]);
    checks.push([theme, `${role}: on on hover`, contrast(m.on, m.hover), 4.5]);
    checks.push([theme, `${role}: on on pressed`, contrast(m.on, m.pressed), 4.5]);
    for (const s of surfaces) {
      checks.push([theme, `${role}: strong on ${s}`, m.strong ? contrast(m.strong, surfaceHex(s)) : 0, 4.5]);
      checks.push([theme, `${role}: base on ${s}`, contrast(m.base, surfaceHex(s)), 3]);
    }
    checks.push([theme, `${role}: text-primary on subtle`, contrast(textMain, m.subtle), 4.5]);
    checks.push([theme, `${role}: base on subtle`, contrast(m.base, m.subtle), 3]);
    if (m.strong) checks.push([theme, `${role}: strong on subtle`, contrast(m.strong, m.subtle), 4.5]);
  }
  functional[role] = out;
}

// ---------- checks ----------
for (const name of COLORS) {
  const h = hues[name];
  for (const theme of ['light', 'dark']) {
    const fill = h.fill[theme];
    const link = h.text[theme];
    if (!fill || !link) continue;
    const surfaces = theme === 'light' ? LIGHT_SURFACES : DARK_SURFACES;
    for (const s of surfaces) {
      checks.push([theme, `${name}: primary on ${s}`, contrast(h.steps[fill.primary].hex, surfaceHex(s)), 3]);
      checks.push([theme, `${name}: text step on ${s}`, contrast(link.hex, surfaceHex(s)), 4.5]);
    }
    checks.push([theme, `${name}: on on primary`, contrast(fill.onHex, h.steps[fill.primary].hex), 4.5]);
    checks.push([theme, `${name}: on on hover`, contrast(fill.onHex, h.steps[fill.hover].hex), 4.5]);
    checks.push([theme, `${name}: on on pressed`, contrast(fill.onHex, h.steps[fill.pressed].hex), 4.5]);
  }
}

const failed = checks.filter(([, , ratio, min]) => ratio < min);
const allFailures = failures.concat(failed.map(([theme, label, ratio, min]) => [theme, `${label} ${ratio.toFixed(2)}:1 < ${min}:1`]));

// ---------- write ----------
const outDir = path.join(process.cwd(), 'palettes');
fs.mkdirSync(outDir, { recursive: true });

const data = {
  status: 'approved',
  version: '1.0.0',
  decision: 'DEC-014',
  generated: '2026-11-15',
  source: source.source,
  license: source.license,
  steps: STEPS,
  hues,
  functional,
  checks: checks.map(([theme, label, ratio, min]) => ({ theme, label, ratio: round2(ratio), min })),
  failures: allFailures.length,
};
fs.writeFileSync(path.join(outDir, 'ramps.json'), JSON.stringify(data, null, 2) + '\n');

const lines = [];
lines.push('# DabDesign Hue Ramps — Catalog');
lines.push('');
lines.push('**Status: Approved (DEC-014, effective 1.0.0).** Generated by');
lines.push('`scripts/hue-catalog.mjs`; values are ratified and checked.');
lines.push('');
lines.push(`Adopted from Tailwind CSS v3.4.17 (\`${source.source}\`, MIT, frozen ${source.fetched}).`);
lines.push('Eleven steps, 50–950. White and black are separate primitives, not ramp');
lines.push('steps. Tailwind hand-tunes each hue at a different lightness, which is what');
lines.push('makes the warm ramps vivid; gray is already Tailwind Neutral.');
lines.push('');
lines.push('## White and black');
lines.push('');
lines.push('Separate primitives, not ramp steps:');
lines.push('');
lines.push('| Token | Hex |');
lines.push('|---|---|');
lines.push('| `white` | `#FFFFFF` |');
lines.push('| `black` | `#000000` |');
lines.push('');
lines.push('## Hue ramps');
lines.push('');
for (const name of COLORS) {
  const h = hues[name];
  lines.push(`### ${name} — display ${h.display}`);
  lines.push('');
  lines.push('| Step | Hex | OKLCH |');
  lines.push('|---:|---|---|');
  for (const s of STEPS) {
    const v = h.steps[s];
    const mark = s === h.display ? ' **display**' : '';
    lines.push(`| ${s}${mark} | \`${v.hex}\` | \`${v.oklch}\` |`);
  }
  lines.push('');
}
lines.push('## Fill aliases');
lines.push('');
lines.push('| Hue | Light primary / hover / pressed / subtle / on | Dark primary / hover / pressed / subtle / on |');
lines.push('|---|---|---|');
for (const name of COLORS) {
  const h = hues[name];
  const l = h.fill.light ? `${h.fill.light.primary} / ${h.fill.light.hover} / ${h.fill.light.pressed} / ${h.fill.light.subtle} / ${h.fill.light.on}` : 'FAIL';
  const d = h.fill.dark ? `${h.fill.dark.primary} / ${h.fill.dark.hover} / ${h.fill.dark.pressed} / ${h.fill.dark.subtle} / ${h.fill.dark.on}` : 'FAIL';
  lines.push(`| ${name} | ${l} | ${d} |`);
}
lines.push('');
lines.push('## Link-safe text step');
lines.push('');
lines.push('| Hue | Light step / hex | Dark step / hex |');
lines.push('|---|---|---|');
for (const name of COLORS) {
  const h = hues[name];
  const l = h.text.light ? `${h.text.light.step} / \`${h.text.light.hex}\`` : 'FAIL';
  const d = h.text.dark ? `${h.text.dark.step} / \`${h.text.dark.hex}\`` : 'FAIL';
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
  lines.push('All checked pairs pass the contrast thresholds in `core.md` §3.5.');
}
lines.push('');
fs.writeFileSync(path.join(outDir, 'catalog.md'), lines.join('\n') + '\n');

console.log('Wrote palettes/ramps.json and palettes/catalog.md');
console.log(`Hues: ${COLORS.length}, checks: ${checks.length}, failures: ${allFailures.length}`);
if (allFailures.length) {
  for (const [theme, label] of allFailures.slice(0, 30)) console.log(`  FAIL ${theme} ${label}`);
  process.exit(1);
}
