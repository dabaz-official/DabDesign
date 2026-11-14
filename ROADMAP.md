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

## Open decisions

- The audit checklist expects `DEC-013` in the palette catalog, but the current
  v3 ramp decision is `DEC-014`; `DEC-013` is superseded. Update the checklist
  or renumber the decision.
- DabAgents rule 02 §6 still names `components/` and previews; this repository
  uses `archive/`. Ask the DabAgents owner to update the rule wording.
- DabAgents `main` has advanced to `f8030a8`; the pin is `ebd76db` (the 1.0.0
  merge, main-reachable). Decide whether to follow the tip.
- The changelog dates 1.0.0 as 2026-11-14; the local tag was re-cut on
  2026-11-15. Decide whether the date should track the tag.

## Known gaps

- Bright light-theme fills and focus on tinted surfaces remain unverified.
- No CI; `node scripts/hue-catalog.mjs` is the only automated check.
