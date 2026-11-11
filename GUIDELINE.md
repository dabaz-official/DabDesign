# Agent Guideline — Using DabDesign

**Status:** v1, 2026-11-12.
**Audience:** coding agents and contributors.
**Normative:** [`core.md`](core.md) and [`GOVERNANCE.md`](GOVERNANCE.md). This
file explains process; if it conflicts with either, they win.

## 0. Read order

1. [`core.md`](core.md) — the normative core contract: tokens, thin mapping,
   type, space/shape, motion, layout, icons, accessibility, component contract.
2. [`GOVERNANCE.md`](GOVERNANCE.md) — principles, `DEC-` decisions, changelog,
   site-theme contract.
3. `GUIDELINE.md` — this file.
4. [`DabDesign.md`](DabDesign.md) — **only** for the DabAZ official site
   (`dabaz.me`) and DabResume.

Never treat `references/third-party/` as standards. Never treat `components/`,
`foundation/`, `palettes/`, or the old previews as the current contract; they
are pre-reset implementation references.

## 1. What each file answers

| Question | File |
|---|---|
| What token value or rule applies? | `core.md` |
| Why was this decided, and what is approved? | `GOVERNANCE.md` |
| How should an agent approach the work? | `GUIDELINE.md` |
| What accent, composition, and voice does the personal series use? | `DabDesign.md` |
| What did another company do? | `references/third-party/` — inspiration only |
| What did the old system look like? | `components/`, `foundation/`, `palettes/` — pre-reset |

## 2. First classify the task

Before writing code or tokens, decide which layer owns the change:

| If the task is about… | Layer | Where it belongs |
|---|---|---|
| Behavior, keyboard, focus, a11y, shared tokens, scale values | Core | `core.md` + a `DEC-` record |
| One site's accent, surface tint, composition, imagery, voice | Site theme | A theme document (or `DabDesign.md` for the personal series) |
| A component only one site uses | Site-owned | That site's code; not the shared layer |
| A new shared component | Pilot | Use it in one real site first; spec only after |
| A one-off visual exception | Defect | Open a decision; do not add a local override |

If you cannot tell which layer owns it, stop and ask. Do not guess.

## 3. How to use tokens

- **Use semantic roles, never primitives.** `gray-900`, `red-600`, and
  `blue-700` are primitives; components use `color-text-primary`,
  `color-primary`, `color-border-strong`, etc.
- **No raw values** where a token exists: no hex, px, or ms.
- **Typography uses `type-`**: `type-body`, `type-h1`, `type-label`.
  Color roles keep `color-text-*`. Do not write `text-body` as a token.
- **Do not copy the ramps.** A theme cites token names and records the steps it
  maps; it does not paste 132 hex values.
- **Do not fork a scale.** If no token fits, the answer is a decision in
  `GOVERNANCE.md`, not a local value.
- **Component tokens** exist only when documented in a component spec and
  approved. Do not invent them locally.

## 4. Color workflow

1. Pick **one** chromatic hue from the twelve in `core.md` §3.1, or use neutral
   ink for a neutral site.
2. Map the six aliases in both themes: `color-primary`,
   `color-primary-hover`, `color-primary-pressed`, `color-primary-subtle`,
   `color-on-primary`, and `color-primary-text`.
3. Keep the fill/text split: `color-primary` is the fill;
   `color-primary-text` is the link-safe text step.
4. Measure every text/fill pair on the actual surfaces with the WCAG 2.2
   formula. Record the ratios in the theme document.
5. Never use a functional status color as the accent. Never override
   `color-focus`, `color-selection-bg`, or `color-selection-fg`.
6. Avoid bright `500` fills on light surfaces until the hover/pressed model is
   decided; use a darker fill or neutral ink.

## 5. Typography workflow

- Use the `type-*` roles from `core.md` §4.2. No local scale, no local
  `font-family`, no tracking overrides.
- Inter + Noto Sans SC, self-hosted `woff2`, `font-display: swap`; no font CDN.
- Weights: 400 and 600 only. Sentence case. Tabular numerals in tables and
  metrics.
- Keep body sizes fixed; only `type-display` and `type-h1` are fluid.

## 6. Space, shape, and controls

- Use `space-*`; the grid is 4px with a 2px half-step. No free values.
- Control heights: 32 / 40 / 48. Icons: 16 / 20 / 24 / 32.
- Radius: inputs/selects `radius-sm` 8; buttons `radius-md` 11; cards/panels
  `radius-lg` 18. `radius-pill` is an explicit action modifier, never a
  default.
- Borders: 1px; 2px only for focus or validated selected outlines.
- Touch surfaces need a 44×44 effective target; artwork may be smaller.

## 7. Layout workflow

- Mobile-first breakpoints: 640 / 768 / 1024 / 1280 / 1536.
- Containers: 640 / 768 / 1024 / 1200 (default) / 1280 / fluid.
- Gutters: `space-4` / `space-6` / `space-8` by viewport band.
- Cards reflow by minimum usable width, not fixed desktop columns.
- Text-heavy content holds a 60–75 character measure.
- Verify all seven widths: 375, 390, 640, 768, 1024, 1280, 1536.

## 8. Icons and accessibility

- Tabler Icons, outline only, 24×24, stroke 2, `currentColor`.
- Inline SVG or self-hosted sprite; no icon font, no CDN.
- Decorative icons: `aria-hidden="true"`. Meaningful icons need a text
  alternative. Icon-only controls need `aria-label` and a 44×44 target.
- WCAG 2.2 AA is the floor: text 4.5:1, large text and non-text UI 3:1, focus
  2px + 2px offset, non-color cues for status/selection/error.
- Respect `prefers-reduced-motion`; no parallax or auto-play.

## 9. Components

- **No per-component spec before a pilot.** The v1 pilot set is Button, Text
  input, and Card; add Dialog only if the pilot needs a modal.
- When a component is needed, implement it in the pilot first. Write the spec
  only after the real use exposes the contract.
- A component contract includes anatomy, variants, sizes, state matrix,
  accessibility, token slots, and Do/Don't.
- Do not promote a component from Draft to Pilot/Adopted; only the Owner does.
- If a shared behavior or token is missing, open a decision. Do not fork a
  component or add a local exception.

## 10. Site themes

A new site theme follows the contract in `GOVERNANCE.md` §5:

- Scope: which site/surfaces.
- One accent hue and the six alias mappings in both themes.
- `color-primary-text` step.
- Surface tint: none, or a remap of ratified neutral steps.
- Composition, imagery, and voice.
- A measured contrast table.
- Open questions, never silent assumptions.

For `dabaz.me` and DabResume, use `DabDesign.md`; do not create a second
personal-series theme. For any other product, create its own theme and keep it
separate from the personal series.

## 11. Decisions

1. State the problem and options.
2. Bring evidence: measured contrast, viewport checks, a real screen.
3. Add a `DEC-` row in `GOVERNANCE.md` with date and status.
4. If a token or operative rule changes, update `core.md`.
5. Add a changelog row.
6. Do not mark your own decision Approved; the Owner approves.

If `core.md` and a decision record disagree, stop and reconcile. A conflict is a
defect, not a choice.

## 12. Quality gates before handing off

- [ ] Uses semantic roles only; no raw values.
- [ ] Contrast measured in both themes on the actual surfaces.
- [ ] Focus visible; keyboard operation verified.
- [ ] 44×44 target on touch surfaces.
- [ ] No horizontal overflow at 375 / 390 / 640 / 768 / 1024 / 1280 / 1536.
- [ ] Reduced motion respected.
- [ ] English, Simplified Chinese, and mixed text wrap without clipping.
- [ ] No unapproved token, local scale, or component fork.
- [ ] Documentation and `core.md` agree.
- [ ] Report actual results, not estimates.

## 13. Common mistakes

- Copying hex values or component code from `references/third-party/`.
- Using primitive steps (`gray-900`, `blue-600`) inside a component.
- Writing `text-body` instead of `type-body`.
- Applying `DabDesign.md` to DabMusic, DabSudoku, DabMinesweeper, or a new site.
- Treating pre-reset `components/` or previews as the current contract.
- Adding a component spec before a real pilot uses it.
- Using a status color as the brand accent.
- Overriding focus, selection, or accessibility behavior.
- Bumping to `1.0.0` without the Owner's acceptance of a real pilot.

## 14. Task routing

| Request | Start here |
|---|---|
| Build a page for `dabaz.me` or DabResume | `core.md` + `GOVERNANCE.md` + `DabDesign.md` |
| Build a new product site | `core.md` + `GOVERNANCE.md`, then write its theme |
| Add or change a component | Check the pilot; implement first; spec after |
| Change a token value | Open a `DEC-`; update `core.md`; Owner approves |
| Check contrast or a11y | Measure, record, and report actual numbers |
| Borrow an idea from another company | Read `references/third-party/`, translate to our tokens |
| Ask "why is this value like this?" | `GOVERNANCE.md` decision log |
