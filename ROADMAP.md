# DabWave Design System — Roadmap & Handoff

**Status:** living document · **Updated:** 2026-11-08 · **Branch:** `dabdesign-v0.1.0`
**Current spec version:** `0.1.0` — **do not bump to 1.0.0** without the Owner's
explicit acceptance of the foundation test page.

This file is the portable handoff for a new agent. It summarizes what is
ratified, what exists, what is open, and the order of work. When this file and
`DabDesign.md` disagree, **`DabDesign.md` wins**.

---

## 1. Read first

1. `DabDesign.md` §0 (how to use), §1–§3 (definition, governance, tokens).
2. `components/README.md` (component lifecycle, registry, spec template).
3. `palettes/README.md` (how a site picks a hue; Tailwind source).
4. `foundation/README.md` (foundation page and self-hosted fonts).
5. `memory-export.md` **only** for phase-1 history. It is an export of retired
   work, not authority.

Retired files: `core-template.md`, `template.md`, and the old DabAZ `design.md`
content. They are prior art only; do not cite them as standards.

---

## 2. Decision status

Every design decision is a `DAB-xxx` record in `DabDesign.md` §13 and, once
approved, an ADR in §2.5.

| ID | Area | Status | Record |
|---|---|---|---|
| DAB-001 | Two-layer architecture (core + site themes) | Approved 2026-11-01 | ADR-001 |
| DAB-002 | Accessibility: WCAG 2.2 AA, contrast thresholds, 2px + 2px focus | Approved 2026-11-06 | ADR-002 |
| DAB-003 | Color model: neutral / accent / functional families | Approved 2026-11-06 | ADR-003, amended by DAB-016 |
| DAB-004 | Neutral palette | Approved 2026-11-06 | ADR-004, amended by DAB-017 |
| DAB-005 | Semantic roles and light/dark mappings | Approved 2026-11-06 | ADR-005 |
| DAB-006 | Functional colors, focus, selection | Approved 2026-11-06 | ADR-006; functional values replaced by DAB-016, focus/selection remain |
| DAB-007 | Overlay | Approved 2026-11-07 | ADR-007 |
| DAB-008 | Typefaces and loading | Approved 2026-11-07 | ADR-008 |
| DAB-009 | Type scale, weights, tracking, casing | Approved 2026-11-07 | ADR-009 |
| DAB-010 | Spacing, sizing, radius, borders | Approved 2026-11-07 | ADR-010 |
| DAB-011 | Elevation and motion | Approved 2026-11-07 | ADR-011 |
| DAB-012 | Layout | Approved 2026-11-07 | ADR-012 |
| DAB-013 | Component pilot scope and order | Approved 2026-11-07 | ADR-013 |
| DAB-014 | Icons: Tabler outline | Approved 2026-11-08 | ADR-014 |
| DAB-015 | Functional hover/pressed fills | **Not ratified** | Superseded by DAB-016 |
| DAB-016 | Tailwind v4 hue ramps, fill/text split | Approved 2026-11-07 | ADR-016 |
| DAB-017 | Ramps run 50–950; `white`/`black` separate | Approved 2026-11-07 | ADR-017 |

All decisions from DAB-001 to DAB-014, DAB-016, and DAB-017 are Approved.
DAB-015 is dead; do not revive it.

---

## 3. What exists

### Specification

- `DabDesign.md` — the single source of truth. Frontmatter holds the ratified
  tokens (colors, themes, typography, spacing, sizing, radius, border,
  elevation, motion, breakpoints, containers). Body sections explain usage.
- `DabDesign.md` §4.10 — the color model: Tailwind v4 palettes, 12 hues,
  11 steps, white/black separate, fill and link-safe text steps.
- `DabDesign.md` §6.5 — icons: Tabler outline, 24×24, stroke 2, sizes
  16/20/24/32, inline or self-hosted.

### Foundation

- `foundation/` — foundation test page, self-hosted fonts, live contrast table.
- Verified at 375 / 390 / 640 / 768 / 1024 / 1280 / 1536: no horizontal
  overflow; 23 pass / 0 fail / 1 exempt in both themes.
- **Owner acceptance is still pending**; this is the only gate left for 1.0.0.

### Color

- `palettes/tailwind-source.json` — frozen Tailwind v4 values (MIT, 2026-11-07).
- `palettes/catalog.md` / `palettes/ramps.json` — 12 hues × 11 steps,
  white/black separate, fill aliases, link-safe text steps, functional mapping.
- `palettes/preview.html` — visual catalog.
- `scripts/hue-catalog.mjs` — builds the catalog and checks every pair:
  **288/288 pass**.
- Legacy and superseded: `scripts/oklch-ramp.mjs`,
  `scripts/functional-palette.mjs`, `oklch-brand-color.md`. Do not add new work
  to them.

### Components

| # | Component | Spec | Preview | Status |
|---:|---|---|---|---|
| 1 | Button | `components/button.md` | `components/preview/button.html` | Draft |
| 2 | Text input | `components/text-input.md` | `components/preview/text-input.html` | Draft |
| 3 | Checkbox / radio / switch | — | — | Not started |
| 4 | Select | — | — | Not started |
| 5 | Card | — | — | Not started |
| 6 | Dialog | — | — | Not started |
| 7 | Toast / alert | — | — | Not started |
| 8 | Empty state | — | — | Not started |

No component is Adopted. Draft means the token contract is written; it still
needs implementation, visual verification, a pilot, and the §9.4 checklist.

Button: five variants (`primary`, `secondary`, `ghost`, solid `danger`,
`danger-outline`), sizes 32/40/48, full state matrix, icon-only sizes
16/20/24. Its preview uses the **neutral ink** primary for a neutral site
(DAB-003 option) and the DAB-016 danger values.

Text input: top-aligned label, field-level error with text + icon, asterisk +
one required legend, sizes 32/40/48, native types, leading icons. Its preview
passes 11/11 contrast pairs plus one recorded disabled exemption.

### Fonts

- Source package: `A:\Dev\Projects\DabFonts` (Owner's local project).
- `foundation/fonts/inter/InterVariable.woff2` — baseline-shifted Inter.
- `foundation/fonts/noto/NotoSansSC-subset.woff2` — 63 KB subset of the tuned
  Noto Sans SC variable font, `wght` 100–900 kept.
- Never copy the 13 MB Noto chunk set into this repo for a preview.
- No third-party font CDN.

---

## 4. Open questions and known gaps

1. **Bright light-theme fills.** `color-primary` is the fill role and
   `color-primary-text` the link-safe role. A bright `500` fill on a light
   background would need black text and a contrast border; the three-state
   hover/pressed model for that is not decided. The official site uses neutral
   primary, so this only affects colored sites.
2. **Focus on tinted surroundings.** `color-focus` is measured against the
   three neutral surfaces. A focused control on `accent-subtle` or a
   functional `-subtle` surface is not verified.
3. **Button open items:** pill modifier ownership, `aria-pressed` toggle
   variant, spinner timing token.
4. **Text input open items:** textarea, password visibility toggle,
   prefix/suffix, character count, form-level error summary, autofill styling,
   search clear button.
5. **Site themes do not exist yet.** No document for DabAZ official site,
   DabMusic, DabSudoku, or DabMinesweeper. The official site should use the
   neutral ink action mapping; the others pick a Tailwind hue.
6. **Token export is manual.** The foundation page and previews transcribe
   token values from the spec. A generator from frontmatter →
   CSS/JSON/Tailwind would remove drift; not built.
7. **No CI.** Contrast checks are scripts run by hand; no axe, visual
   regression, or token linter.
8. **1.0.0 is blocked only by Owner acceptance** of the foundation test page.
   Do not bump it yourself.

---

## 5. Next steps (in order)

1. **Owner reviews the Text input Draft and preview.** Adjust if needed; only
   the Owner can move it from Draft.
2. **Checkbox / radio / switch** — spec then preview. Reuse Text input's
   label/help/error patterns and the DAB-016 danger values.
3. **Select** — depends on Text input and the popup layer.
4. **Card** — surface, border, radius-lg, the single hover lift.
5. **Dialog** — overlay, focus trap, shadow-floating, slow motion.
6. **Toast / alert** — functional roles, non-color cues, live region.
7. **Empty state** — text hierarchy + Button + illustration slot.
8. **Site theme documents** — official site first (neutral primary), then a
   game, then DabMusic (DAB-013 sequence).
9. **Token export generator + CI** — frontmatter as the only source; contrast
   and visual regression checks.
10. **Foundation test page acceptance → 1.0.0**, Owner only.

---

## 6. How to run and verify

```sh
# Foundation page
python -m http.server 8000 -d foundation
# http://127.0.0.1:8000/

# Component and palette previews (repo root)
python -m http.server 8001 -d .
# http://127.0.0.1:8001/components/preview/button.html
# http://127.0.0.1:8001/components/preview/text-input.html
# http://127.0.0.1:8001/palettes/preview.html

# Color catalog and contrast checks (must exit 0)
node scripts/hue-catalog.mjs

# Syntax checks
node --check foundation/foundation.js
node --check palettes/preview.js
node --check components/preview/button-preview.js
node --check components/preview/text-input-preview.js
```

Report actual results. Never claim a ratio or a viewport passed unless it was
measured.

---

## 7. Working agreement for the next agent

- **The Owner approves; agents propose.** Do not move a component from Draft to
  Pilot/Adopted, and do not approve a DAB decision yourself.
- **One thing at a time.** The Owner prefers one component or one decision per
  turn, with the result presented for review.
- **DabDesign.md is the source of truth.** New decisions get a DAB ID, an ADR
  row, a changelog row, and frontmatter tokens only when approved.
- **Contrast is measured, never estimated.** Use the WCAG 2.2 formula; record
  failures honestly.
- **Do not recompute the color ramps.** The Owner chose to adopt Tailwind v4
  values and let the script verify them. A fit test showed a shared formula
  misrepresents warm hues (up to 85/255 per-channel error). Do not reopen this
  without an explicit Owner request.
- **Ramp shape:** 11 steps `50–950`; `white` and `black` are separate
  primitives. Do not add 0/1000 steps back.
- **Danger dark logic:** default red-500 `#FB2C36`, hover red-400 `#FF6467`,
  pressed red-300 `#FFA2A2`, black text, subtle red-950 `#460809`. Do not
  revert to the old 300/400/500 ordering.
- **Primary for the official site is neutral ink**, not an accent. Colored
  sites use the Tailwind hue action aliases from the catalog.
- **Icons are Tabler outline only.** No filled/duotone, no hand-drawn paths,
  no second family, no icon font or CDN.
- **Fonts come from `DabFonts`.** Do not fetch fresh Inter/Noto or add a CDN.
- **Do not bump the spec to 1.0.0.** The Owner said “先不升版本”; the
  foundation page is built and verified but not accepted.

---

## 8. Handoff facts

- Branch: `dabdesign-v0.1.0`; remote: `origin`.
- Last pushed content before this file: `d12dff1`.
- The spec is at `0.1.0`; the foundation page is the only 1.0.0 gate.
- Live agent memory for this project exists in the ZCode project memory
  directory, but it is not in the repository. This ROADMAP is the portable
  handoff; keep it updated when the state changes.
- The Owner communicates in Chinese; the repository documents are in English.
