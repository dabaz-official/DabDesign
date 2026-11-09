# DabWave Hue Ramps

**Status: Approved (DAB-015, 2026-11-07).** Values are ratified; the old
10-step accent contract is deprecated.

## What this is

Twelve hue ramps adopted from **Tailwind CSS v4** (MIT), with eleven steps:
`50 / 100 / 200 / 300 / 400 / 500 / 600 / 700 / 800 / 900 / 950`. White and
black are separate primitives, not ramp steps. Gray is already Tailwind
Neutral, so both layers come from one source.

| Hue | Display step |
|---|---:|
| red | 500 |
| orange | 500 |
| amber | 500 |
| yellow | 500 |
| lime | 500 |
| green | 500 |
| teal | 500 |
| cyan | 500 |
| blue | 500 |
| indigo | 500 |
| violet | 500 |
| fuchsia | 500 |

The 500 step is the vivid brand color. Tailwind tunes each hue at a different
lightness — red 500 L 0.637, orange 0.705, amber 0.769, yellow 0.795, lime
0.768 — which is why the warm ramps read correctly.

## Pick a hue for a site

1. Choose one hue ramp. One accent per site remains the rule (DAB-001/DAB-003).
2. Expose it as the site's `accent-50` … `accent-950` steps.
3. Map the **fill aliases** from `catalog.md`. The fill range is chosen by
   contrast, so on a light background it may sit at 600/700 rather than 500.
4. Map links and inline emphasis to the **link-safe text step** in the catalog.
   `color-primary` is the fill role; `color-primary-text` is the text role.
5. Record the hue, the fill and text steps, and the measured ratios in the site
   theme document. Cite the catalog; do not copy eleven hexes into it.

Functional colors are not a site choice. Success uses `green`, warning uses
`amber`, and danger uses `red` — at the fixed steps in the catalog.

## Files

- `catalog.md` — human-readable ramps, fill aliases, link-safe steps,
  functional mapping, contrast results. Generated; do not edit by hand.
- `ramps.json` — machine-readable catalog, including all 288 checks.
- `tailwind-source.json` — frozen Tailwind v4 source values (OKLCH + hex).
- `preview.html` — visual catalog; run the repo-root server and open
  `http://127.0.0.1:8001/palettes/preview.html`.

## Regenerate

```sh
node scripts/hue-catalog.mjs
```

The script reads the frozen Tailwind source, selects contrast-safe ranges, and
exits non-zero if any checked pair misses its threshold. Current run: 12 hues,
288 checks, 0 failures.

## What this does not change

- The gray palette stays at its DAB-004 values; it is not regenerated.
- The neutral-first rule stays: color carries action, state, and emphasis;
  surfaces and text stay neutral.
- Functional hues stay fixed; a site cannot re-point danger to its accent.
- A bright 500 fill for a light-theme button is still an open question
  (`core.md` §3.9); the current fill range is contrast-safe.
