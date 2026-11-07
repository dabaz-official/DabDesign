# DabWave Hue Ramps

**Status: Proposed (DAB-016).** Not approved. Do not consume these values in a
site until DAB-016 is ratified and the old 10-step accent contract is
deprecated.

## What this is

Twelve hue ramps, thirteen steps each. The L ladder and the chroma curve shape
are shared; each hue has a fixed H and a fixed anchor step where its chroma
peaks, so warm hues stay vivid instead of turning muddy.

| Hue | H | Anchor |
|---|---:|---:|
| red | 25 | 500 |
| orange | 50 | 400 |
| amber | 75 | 300 |
| yellow | 100 | 200 |
| lime | 125 | 400 |
| green | 150 | 500 |
| teal | 180 | 500 |
| cyan | 205 | 500 |
| blue | 250 | 500 |
| indigo | 275 | 500 |
| violet | 300 | 500 |
| magenta | 330 | 500 |

Steps: `0 / 50 / 100 / 200 / 300 / 400 / 500 / 600 / 700 / 800 / 900 / 950 /
1000`. Step 0 is white; step 1000 is black. `gray-150` is absent (DAB-004).

## Pick a hue for a site

1. Choose one hue ramp. One accent per site remains the rule (DAB-001/DAB-003).
2. Expose it as the site's `accent-0` … `accent-1000` steps.
3. Map the action aliases from the **Action aliases** table in
   `catalog.md`. The action range is chosen by contrast, so it may sit a step
   or two away from the vivid anchor.
4. Record the hue, the alias steps, and the measured ratios in the site theme
   document. Cite the catalog; do not copy thirteen hexes into it.

The **vivid anchor** is the most chromatic step (red 500, orange 400, amber
300, yellow 200, blue 500, and so on). It is for brand surfaces, charts,
illustration, tags, and large display. On a light background it is not
automatically link-safe; a bright anchor used as a link or button fill needs a
separate decision (see the open question in `DabDesign.md` §4.10).

Functional colors are not a site choice. Success uses `green`, warning uses
`amber`, and danger uses `red` — at the fixed steps in the catalog.

## Files

- `catalog.md` — human-readable ramps, anchors, action aliases, functional
  mapping, contrast results. Generated; do not edit by hand.
- `ramps.json` — machine-readable catalog, including all 216 checks.
- `preview.html` — visual catalog; run the repo-root server and open
  `http://127.0.0.1:8001/palettes/preview.html`.

## Regenerate

```sh
node scripts/hue-catalog.mjs
```

The script writes both files and exits non-zero if any checked pair misses its
threshold. Current run: 12 hues, 13 steps, 216 checks, 0 failures.

## What this does not change

- The gray palette stays at its DAB-004 values; it is not regenerated.
- The neutral-first rule stays: color carries action, state, and emphasis;
  surfaces and text stay neutral.
- Functional hues stay fixed; a site cannot re-point danger to its accent.
