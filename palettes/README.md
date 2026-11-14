# DabDesign Hue Ramps

**Status: Approved (DEC-014, effective 1.0.0).** Values are ratified and
checked. The token source is [`core.md`](../core.md) §3; this directory is
generated evidence.

## What this is

Twelve hue ramps adopted from **Tailwind CSS v3.4.17** (MIT), with eleven
steps: `50 / 100 / 200 / 300 / 400 / 500 / 600 / 700 / 800 / 900 / 950`. White
and black are separate primitives, not ramp steps. Gray is Tailwind's neutral
ramp, so both layers come from one source. These are palette values only;
consuming projects still use the Tailwind CSS v4 framework per DabAgents rule
02 §5.

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

The 500 step is the vivid display color. Tailwind tunes each hue at a different
lightness — red 500 L 0.637, orange 0.705, amber 0.769, yellow 0.795, lime
0.768 — which is why the warm ramps read correctly.

## Pick a hue for a site

1. Choose one hue ramp. One accent per site is the rule in `core.md` §3.4.
2. Expose it as the site's accent steps.
3. Map the **fill aliases** from `catalog.md`. The fill range is chosen by
   contrast, so on a light background it may sit at 600/700 rather than 500.
4. Map links and inline emphasis to the **link-safe text step** in the catalog.
   `color-primary` is the fill role; `color-primary-text` is the text role. The
   catalog's step is the minimum safe step; a theme may choose a darker
   light-theme step or a lighter dark-theme step if it records the measured
   ratios.
5. Record the hue, the fill and text steps, and the measured ratios in the site
   theme document. Cite the catalog; do not copy eleven hexes into it.

Functional colors are not a site choice. Success uses `green`, warning uses
`amber`, and danger uses `red` — at the fixed steps in the catalog.

## Files

- `catalog.md` — human-readable ramps, fill aliases, link-safe steps,
  functional mapping, contrast results. Generated; do not edit by hand.
- `ramps.json` — machine-readable catalog, including all 288 checks.
- `tailwind-source.json` — frozen Tailwind v3.4.17 source values (hex; OKLCH
  computed for the catalog).
- `preview.html` — visual catalog; serve the repository root and open
  `http://127.0.0.1:8000/palettes/preview.html`.

## Regenerate

```sh
node scripts/hue-catalog.mjs
```

The script reads the frozen Tailwind source, selects contrast-safe ranges, and
exits non-zero if any checked pair misses its threshold. Current run: 12 hues,
288 checks, 0 failures.

## What this does not change

- The gray ramp is frozen in `core.md` §3.1; it is not regenerated.
- The neutral-first rule stays: color carries action, state, and emphasis;
  surfaces and text stay neutral.
- Functional hues stay fixed; a site cannot re-point danger to its accent.
- A bright 500 fill for a light-theme button is still an open question
  (`core.md` §3.6); the current fill range is contrast-safe.
