# DabDesign Roadmap

**Version:** 1.1.0 · **Updated:** 2026-11-22
**State:** 1.1.0 released; `v1.0.0`, `v1.0.1`, and `v1.1.0` point at their
release commits.

## Next

1. Run the official-site pilot with Button, Text input, and Card; add Dialog
   only if the pilot needs a modal.
2. Record real contrast and viewport results, including 320 px overflow, and
   measure the glass `§6.1` bounds on real backdrops. Only the Owner promotes a
   component from Draft.
3. Build the token exporter from the `core.md` frontmatter.
4. Add CI for the hue catalog, link checks, and the internal greps.

## Open decisions

- The audit checklist expects `DEC-013` in the palette catalog, but the current
  v3 ramp decision is `DEC-014`; `DEC-013` is superseded. Update the checklist
  or renumber the decision.
- Candidate: `glass-tint-active`, a "thickening" glass state measured on
  apple.com's all-access pass — `blur(7px × (2 − α))` paired with an
  alpha-compensated fill `rgba(solid / (1 − α · 0.28))`, so the material gains
  body and blur as it becomes active. It conflicts with `core.md` §6.1 rule 7,
  which forbids animating `backdrop-filter`. Decide between a tint/opacity-only
  state that stays compliant, or an amendment to rule 7 carried by measured
  motion and paint-cost evidence.

## Known gaps

- Bright light-theme fills and focus on tinted surfaces remain unverified.
- No CI; `node scripts/hue-catalog.mjs` is the only automated check.
