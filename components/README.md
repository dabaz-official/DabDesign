# DabWave Component Specifications

The standards live in `../DabDesign.md` §9; the core token contract is
`../core.md`. This directory holds one specification per component, in the
DAB-013 pilot order. A component is not part of the shared layer until it
reaches **Adopted**.

## Status model (§9.3)

| Status | Meaning |
|---|---|
| Proposed | RFC opened |
| Draft | Spec written, tokens reserved, awaiting Owner review |
| Pilot | Used in one real site or feature; pilot report pending |
| Adopted | Promoted to the shared layer; §9.4 Definition of Done passes |
| Deprecated | Replaced; migration documented |

Only the Owner moves a component from Draft to Pilot or Adopted. Agents may
draft, measure, and report — they never approve.

## Pilot order (DAB-013)

| # | Component | File | Status |
|---:|---|---|---|
| 1 | Button | `button.md` | Draft (2026-11-07) |
| 2 | Text input | `text-input.md` | Draft (2026-11-08) |
| 3 | Checkbox / radio / switch | `checkbox-radio-switch.md` | Draft (2026-11-08) |
| 4 | Select | `select.md` | Draft (2026-11-08) |
| 5 | Card | `card.md` | Draft (2026-11-08) |
| 6 | Dialog | `dialog.md` | Draft (2026-11-08) |
| 7 | Toast / alert | `toast-alert.md` | Not started |
| 8 | Empty state | `empty-state.md` | Not started |

Draft specimens live under `preview/`. `preview/gallery.html` embeds every
Draft on one page and syncs the theme across all panels. The Button specimen is
`preview/button.html`; it uses the ratified DAB-014 icons and DAB-015 colors
and is never a production asset.

Wave 2 (navigation, footer, tabs, table, pagination, tooltip, badge, avatar,
skeleton) requires a follow-up scope decision.

## Specification template

Every component file uses the same sections:

1. **Status** — lifecycle state, date, owner review
2. **Purpose** — the one job the component does
3. **Anatomy** — background, text, border, typography, padding, height, radius, shadow
4. **Variants** — every variant and its exact token mapping
5. **Sizes** — the ratified size set only
6. **State matrix** — default, hover, pressed, focused, disabled, loading, selected where relevant (§9.2)
7. **Tokens used** — semantic roles only; no raw values
8. **Accessibility** — role, accessible name, keyboard map, focus, target size, announcements
9. **Do / Don't**
10. **Open questions** — recorded, never resolved silently
11. **Definition of Done** — the §9.4 checklist with current status

## Rules

- No raw hex, pixel, or millisecond value where a ratified token exists.
- One component per file; one concern per section.
- Components consume semantic roles, never primitive steps and never site
  accent steps directly. `color-primary*` resolves per site.
- A component never forks a scale. If a value is missing, it is an open
  question and a proposed decision — not a local exception.
- Site themes supply action aliases; they never fork a component.
- Implementation code (CSS, framework components) is outside this directory
  (§1.5). These files are token-level contracts.
