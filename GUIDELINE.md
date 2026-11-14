# Agent Guideline — Using DabDesign

**Status:** 1.0.0, 2026-11-14.
**Audience:** coding agents and contributors.
**Normative:** [`core.md`](core.md) and [`GOVERNANCE.md`](GOVERNANCE.md). This
file routes work; if it conflicts with either, they win.

## 1. Read order

1. The consuming project's `AGENTS.md`.
2. `GUIDELINE.md` — this file.
3. [`core.md`](core.md) — the normative core contract and the only token block.
4. [`GOVERNANCE.md`](GOVERNANCE.md) — principles, `DEC-` decisions, and the
   site-theme contract.
5. [`DabDesign.md`](DabDesign.md) — **only** for the DabAZ official site
   (`dabaz.me`) and DabResume.
6. For typography, font loading, punctuation, or mixed-script spacing, start at
   DabFonts' `GUIDELINE.md`, then `TYPESETTING.md`.

`references/third-party/` is prior art, never a standard. `archive/` is
non-normative and is not a reference implementation.

## 2. What each file answers

| Question | File |
|---|---|
| What token value or rule applies? | `core.md` |
| Why was this decided, and what is approved? | `GOVERNANCE.md` |
| How should an agent approach the work? | `GUIDELINE.md` |
| How are fonts loaded, and what do they allow? | DabFonts' `GUIDELINE.md` and `TYPESETTING.md` |
| What accent, composition, and imagery does the personal series use? | `DabDesign.md` |
| What did another company do? | `references/third-party/` — inspiration only |
| What did the previous release look like? | `archive/` — non-normative |

## 3. Dependencies and ownership

| Dependency | Pin | Owns |
|---|---|---|
| DabAgents | `85c919479e8209d89203d5c56eeb22dda893db56` | Task process, engineering standards, branches and releases, quality gates, voice, compatibility widths, documentation rules |
| DabFonts | `v1.0.0` | Font files, family names, `@font-face`, fallback stacks, `font-synthesis`, `font-display`, preload, allowed weights, punctuation, CJK–Latin spacing, capability boundaries |
| DabDesign | this repository | `type-*` sizes, line heights, weight mapping, measure, first-line indent, alignment, tracking, numeral style; color, space, shape, layout, icons, accessibility, component status |

- Body line height 1.8 is declared only on `type-body` in `core.md`, inside
  DabFonts' 1.75–1.85 body range.
- Typography loading and fallback are DabFonts' rules. Do not restate them in a
  theme or a component.
- Exact scale values are `core.md` §4. Do not copy a second scale into a site
  theme.

## 4. Classify the task

| If the task is about… | Layer | Where it belongs |
|---|---|---|
| Behavior, keyboard, focus, a11y, shared tokens, scale values | Core | `core.md` + a `DEC-` record |
| One site's accent, surface tint, composition, imagery | Site theme | That site's theme document (or `DabDesign.md` for the personal series) |
| A component only one site uses | Site-owned | That site's code; not the shared layer |
| A new shared component | Pilot | Use it in one real site first; spec only after |
| A one-off visual exception | Defect | Open a decision; do not add a local override |

If you cannot tell which layer owns it, stop and ask. Do not guess.

## 5. How to use tokens

- **Use semantic roles, never primitives.** `gray-900`, `red-600`, and
  `blue-700` are primitives; components use `color-text-primary`,
  `color-primary`, `color-border-strong`, etc.
- **No raw values** where a token exists: no hex, px, or ms.
- **Typography uses `type-`**: `type-body`, `type-h1`, `type-label`. Color roles
  keep `color-text-*`. Do not write `text-body` as a token.
- **Do not copy the ramps.** A theme cites token names and records the steps it
  maps; it does not paste 132 hex values.
- **Do not fork a scale.** If no token fits, the answer is a decision in
  `GOVERNANCE.md`, not a local value.
- **Component tokens** exist only when documented in an approved component
  contract. Do not invent them locally.

## 6. Color workflow

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
   decided (`core.md` §3.6); use a darker fill or neutral ink.

## 7. Breakpoints and responsive layout

Mobile-first. Breakpoints are minimum widths: `640` sm, `768` md, `1024` lg,
`1280` xl, `1536` 2xl. Do not add ad-hoc media queries.

- Minimum supported width: 360 px. Verify `375`, `390`, `640`, `768`, `1024`,
  `1280`, and `1536`, plus `320` for horizontal overflow.
- No horizontal scrolling at 320 px or at 200% zoom.
- Containers: `container-sm` 640, `container-md` 768, `container-lg` 1024,
  `container-xl` 1200 (default), `container-2xl` 1280, `container-fluid` 100%.
- Gutters: `space-4` 16 below 640, `space-6` 24 from 640, `space-8` 32 from
  1024.
- Cards reflow by minimum usable width, not fixed desktop columns. Twelve
  columns are available for broad compositions, not imposed everywhere.
- Body measure: **34–38em**, about 36–40 Han characters. One Han is 0.94em, so
  38em holds about 40 characters. First-line indent: `text-indent: 1.88em`,
  exactly two Han characters. Do not indent list items, captions, or table
  cells; separate paragraphs with `margin`, not `<br>` or empty paragraphs.
- Touch targets are at least 44×44 effective. Hover is an enhancement only;
  every hover-revealed action also works on touch and keyboard.

`core.md` §7 is the normative layout section. This section must match it.

## 8. Icons and accessibility

- Tabler Icons, outline only, 24×24, stroke 2, `currentColor`.
- Inline SVG or a self-hosted sprite; no icon font, no CDN.
- Decorative icons are `aria-hidden="true"`. Meaningful icons need a text
  alternative. Icon-only controls need `aria-label` and a 44×44 target.
- WCAG 2.2 AA is the floor: text 4.5:1, large text and non-text UI 3:1, focus
  2px + 2px offset, non-color cues for status, selection, and error.
- Respect `prefers-reduced-motion`; no parallax or auto-play.

The thresholds and the focus geometry live in `core.md` §3.5 and §9.

## 9. Component status

Lifecycle: **Proposed → Draft → Pilot → Adopted → Deprecated**.

| Status | Meaning |
|---|---|
| Proposed | An idea; no contract |
| Draft | A contract is written; no real site consumes it yet |
| Pilot | One real site uses it and evidence is being collected |
| Adopted | Passed the Definition of Done in a pilot and approved by the Owner |
| Deprecated | Superseded; a migration note is required |

- The v1 pilot set is **Button**, **Text input**, and **Card**. Add Dialog only
  if the pilot needs a modal.
- No per-component spec before a pilot. Implement it in the pilot first; write
  the spec only after the real use exposes the contract.
- Only the Owner moves a component from Draft to Pilot or Adopted. An agent
  proposes and reports evidence.
- `components/` and its previews are not part of 1.0.0. They live under
  `archive/` and are **not the current contract**.
- A component contract includes anatomy, variants, sizes, the state matrix,
  accessibility, token slots, and Do/Don't.
- If a shared behavior or token is missing, open a `DEC-`. Do not fork a
  component or add a local exception.

## 10. Site themes

A new site theme follows the contract in `GOVERNANCE.md` §5:

- Scope: which site and surfaces.
- One accent hue and the six alias mappings in both themes.
- The `color-primary-text` step.
- Surface tint: none, or a remap of ratified neutral steps.
- Composition and imagery.
- A measured contrast table.
- Open questions, never silent assumptions.

Voice and microcopy follow DabAgents rule 07; a theme does not define tone.

For `dabaz.me` and DabResume, use `DabDesign.md`; do not create a second
personal-series theme. Every other product gets its own theme document.

## 11. Decisions

1. State the problem and the options.
2. Bring evidence: measured contrast, viewport checks, a real screen.
3. Add a `DEC-` row in `GOVERNANCE.md` with a date and status.
4. If a token or operative rule changes, update `core.md`.
5. Add an entry to `CHANGELOG.md` when a release changes.
6. Do not mark your own decision Approved; the Owner approves.

If `core.md` and a decision record disagree, stop and reconcile. A conflict is
a defect, not a choice.

## 12. Workflow and gates

Branching, commits, releases, and quality gates are DabAgents rules 03 and 04.
Task classification and reporting are rule 01; viewport rules are rule 08;
documentation rules are rule 09. This repository does not restate them.

Design-specific verification before handing off:

- `node scripts/hue-catalog.mjs` exits 0 with 288 checks.
- Contrast is measured on the actual surfaces in both themes.
- Every width in §7 is checked when a UI changes, including 320 px overflow.
- Keyboard operation, focus visibility, and the 44×44 target are verified.
- The archived tree is not cited as the contract.

## 13. Common mistakes

- Copying hex values or component code from `references/third-party/`.
- Using primitive steps (`gray-900`, `blue-600`) inside a component.
- Writing `text-body` instead of `type-body`.
- Applying `DabDesign.md` to DabMusic, DabSudoku, DabMinesweeper, or a new site.
- Treating the archived tree as the current contract.
- Adding a component spec before a real pilot uses it.
- Using a status color as the brand accent.
- Overriding focus, selection, or accessibility behavior.
- Restating font loading or fallback rules instead of pointing at DabFonts.
- Changing a released contract without a `DEC-` and a version bump.

## 14. Task routing

| Request | Start here |
|---|---|
| Build a page for `dabaz.me` or DabResume | `core.md` + `GOVERNANCE.md` + `DabDesign.md` |
| Build a new product site | `core.md` + `GOVERNANCE.md`, then write its theme |
| Add or change a component | Check the pilot; implement first; spec after |
| Change a token value | Open a `DEC-`; update `core.md`; Owner approves |
| Change typography or font loading | DabFonts' `GUIDELINE.md`, then DabDesign's `core.md` |
| Check contrast or a11y | Measure, record, and report actual numbers |
| Borrow an idea from another company | Read `references/third-party/`, translate to our tokens |
| Ask "why is this value like this?" | `GOVERNANCE.md` decision log |
