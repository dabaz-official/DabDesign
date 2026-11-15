# DabDesign Roadmap

**Version:** 1.0.0 · **Updated:** 2026-11-15
**State:** 1.0.0 released; `v1.0.0` points at the release commit.

## Next

1. Run the official-site pilot with Button, Text input, and Card; add Dialog
   only if the pilot needs a modal.
2. Record real contrast and viewport results, including 320 px overflow. Only
   the Owner promotes a component from Draft.
3. Build the token exporter from the `core.md` frontmatter.
4. Add CI for the hue catalog, link checks, and the internal greps.
5. Release the unreleased documentation changes: the DabAgents `v1.0.1` pin and
   the `type-family-*` family-name fix.

## Open decisions

- The audit checklist expects `DEC-013` in the palette catalog, but the current
  v3 ramp decision is `DEC-014`; `DEC-013` is superseded. Update the checklist
  or renumber the decision.

## Known gaps

- Bright light-theme fills and focus on tinted surfaces remain unverified.
- No CI; `node scripts/hue-catalog.mjs` is the only automated check.
