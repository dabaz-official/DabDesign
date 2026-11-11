# DabWave Design System — Roadmap & Handoff

**Status:** living document · **Updated:** 2026-11-11 · **Branch:** `dabdesign-v0.1.0`
**Current spec version:** `0.1.0` — **do not bump to 1.0.0** without the Owner's
explicit acceptance of a real pilot.

> **2026-11-11 v1 rewrite written and approved.** `core.md` is the normative
> color-first core contract; `DabDesign.md` is the DabAZ personal-series theme
> (official site + DabResume); `GOVERNANCE.md` holds principles, decisions,
> changelog, and the site-theme contract. DEC-008 and DEC-009 are approved. The
> previous versions are archived at `backup/2026-11-10/`. Everything from §2
> downward is **pre-reset history**.

## 0. Current state

| File | State |
|---|---|
| `core.md` | Approved v1 core: gray + 12 hue ramps, thin mapping, type/space/shape/motion/layout/icons/a11y, lean component contract |
| `DabDesign.md` | Approved personal-series theme: official site + DabResume; blue links, neutral ink primary |
| `GOVERNANCE.md` | Principles, `DEC-` decision log, changelog, site-theme contract |
| `ROADMAP.md` | This handoff |

`components/`, `foundation/`, `palettes/`, and the previews are **pre-reset
artifacts**. They are useful as implementation references but do not define the
current contract.

**Next:** build the official-site pilot with Button, Text input, and Card. No
per-component catalog before the pilot.

## 1. Read first

1. [`core.md`](core.md) — normative core contract. Required for every project.
2. [`GOVERNANCE.md`](GOVERNANCE.md) — principles, decisions, site-theme
   contract. Required for every project.
3. [`DabDesign.md`](DabDesign.md) — personal-series theme. Required only for
   the DabAZ official site (`dabaz.me`) and DabResume; not applicable to other
   products.
4. `components/README.md` and `foundation/README.md` — pre-reset implementation
   references.
5. `references/third-party/` — unofficial company analyses, kept as design
   prior art only. They are not standards.

Retired and removed from the tree: `core-template.md`, `template.md`,
`memory-export.md`, `oklch-brand-color.md`. They remain in git history as prior
art only; do not cite them as standards. The six company analyses are retained
under `references/third-party/` with a README marking them unofficial.

---

## Historical (pre-reset)

The sections below describe the 2026-11-01…2026-11-09 system. They are kept for
traceability only.

## 2. Decision status

Every design decision is a `DAB-xxx` record in `DabDesign.md` §13 and, once
approved, an ADR in §2.5.

| ID | Area | Status | Record |
|---|---|---|---|
| DAB-001 | Two-layer architecture (core + site themes) | Approved 2026-11-01 | ADR-001 |
| DAB-002 | Accessibility: WCAG 2.2 AA, contrast thresholds, 2px + 2px focus | Approved 2026-11-06 | ADR-002 |
| DAB-003 | Color model: neutral / accent / functional families | Approved 2026-11-06 | ADR-003; current values in DAB-015 |
| DAB-004 | Neutral palette | Approved 2026-11-06 | ADR-004, DAB-016 |
| DAB-005 | Semantic roles and light/dark mappings | Approved 2026-11-06 | ADR-005 |
| DAB-006 | Functional colors, focus, selection | Approved 2026-11-06 | ADR-006; functional values from DAB-015, focus/selection remain |
| DAB-007 | Overlay | Approved 2026-11-07 | ADR-007 |
| DAB-008 | Typefaces and loading | Approved 2026-11-07 | ADR-008 |
| DAB-009 | Type scale, weights, tracking, casing | Approved 2026-11-07 | ADR-009 |
| DAB-010 | Spacing, sizing, radius, borders | Approved 2026-11-07 | ADR-010 |
| DAB-011 | Elevation and motion | Approved 2026-11-07 | ADR-011 |
| DAB-012 | Layout | Approved 2026-11-07 | ADR-012 |
| DAB-013 | Component pilot scope and order | Approved 2026-11-07 | ADR-013 |
| DAB-014 | Icons: Tabler outline | Approved 2026-11-08 | ADR-014 |
| DAB-015 | Tailwind v4 hue ramps, fill/text split | Approved 2026-11-07 | ADR-015 |
| DAB-016 | Ramps run 50–950; `white`/`black` separate | Approved 2026-11-07 | ADR-016 |

All decisions from DAB-001 to DAB-014, DAB-015, and DAB-016 are Approved.

---

## 3. What exists

### Specification

- `core.md` — the normative core contract. Its frontmatter holds the ratified
  tokens (colors, themes, typography, spacing, sizing, radius, border,
  elevation, motion, breakpoints, containers); its body states the operative
  core rules. This is what a site or agent consumes.
- `DabDesign.md` — governance and decision record: process, ADRs, changelog,
  decision roadmap, and the rationale behind each value.
- `DabDesign.md` §4.9 — the color decision record: Tailwind v4 palettes,
  12 hues, 11 steps, white/black separate, fill and link-safe text steps.
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
- Tooling: `scripts/hue-catalog.mjs` is the catalog builder. Do not add new
  work to `scripts/oklch-ramp.mjs` or `scripts/functional-palette.mjs`; they are
  not part of the current path. The retired `oklch-brand-color.md` notes are in
  git history only.

### Components

| # | Component | Spec | Preview | Status |
|---:|---|---|---|---|
| 1 | Button | `components/button.md` | `components/preview/button.html` | Draft |
| 2 | Text input | `components/text-input.md` | `components/preview/text-input.html` | Draft |
| 3 | Checkbox / radio / switch | `components/checkbox-radio-switch.md` | `components/preview/checkbox-radio-switch.html` | Draft |
| 4 | Select | `components/select.md` | `components/preview/select.html` | Draft |
| 5 | Card | `components/card.md` | `components/preview/card.html` | Draft |
| 6 | Dialog | `components/dialog.md` | `components/preview/dialog.html` | Draft |
| 7 | Toast / alert | — | — | Not started |
| 8 | Empty state | — | — | Not started |

No component is Adopted. Draft means the token contract is written; it still
needs implementation, visual verification, a pilot, and the §9.4 checklist.
Single-page review gallery: `components/preview/gallery.html` embeds all six
Drafts and syncs the theme across every panel.

Button: five variants (`primary`, `secondary`, `ghost`, solid `danger`,
`danger-outline`), sizes 32/40/48, full state matrix, icon-only sizes
16/20/24. Its preview uses the **neutral ink** primary for a neutral site
(DAB-003 option) and the DAB-015 danger values.

Text input: top-aligned label, field-level error with text + icon, asterisk +
one required legend, sizes 32/40/48, native types, leading icons. Its preview
passes 11/11 contrast pairs plus one recorded disabled exemption.

Checkbox / radio / switch: shared anatomy, controls 16/20/24, switch tracks
40×20 / 48×24 / 56×28 with equal thumb margins, 44×44 rows, fieldset/legend
groups, and an indeterminate checkbox. Preview: 11/11 plus one exemption.

Select: native `<select>` baseline, top-aligned label, Tabler chevron,
disabled placeholder option, sizes 32/40/48, native `<optgroup>`. Preview:
11/11 plus one exemption.

Card: static and whole-surface interactive patterns, surface + 1px border +
`radius-lg`, no shadow at rest, the DAB-011 hover lift only on interactive
cards, comfortable/compact padding. Preview: 7/7 contrast pairs plus one
recorded decorative-border exemption in both themes; no overflow at all seven
validation widths (375/390/640/768/1024/1280/1536).

Dialog: native `<dialog>` + `showModal()`, `color-overlay` scrim,
`color-border-strong` edge in both themes, `shadow-floating`, fluid width up to
`container-sm` 640, focus containment/return, destructive variant with Cancel
focused first. Preview: 7/7 contrast pairs; open/close, Escape, and focus
return verified in the browser.

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
5. **Select open items:** custom listbox/search, multi-select, combobox,
   native popup theming, long option text.
6. **Card open items:** grid composition and media treatment are site-owned;
   selectable and horizontal/side-media variants are not specified; loading
   skeletons are deferred to wave 2.
7. **Dialog open items:** exit animation, backdrop-click policy, compact
   confirmation width, drawer/command-palette split, focus-containment browser
   matrix, scroll-lock details, and whether a loading destructive action is
   cancellable.
8. **Site themes do not exist yet.** No document for DabAZ official site,
   DabMusic, DabSudoku, or DabMinesweeper. The official site should use the
   neutral ink action mapping; the others pick a Tailwind hue.
9. **Token export is manual.** The foundation page and previews transcribe
   token values from `core.md`. A generator from its frontmatter →
   CSS/JSON/Tailwind would remove drift; not built.
10. **No CI.** Contrast checks are scripts run by hand; no axe, visual
    regression, or token linter.
11. **1.0.0 is blocked only by Owner acceptance** of the foundation test page.
    Do not bump it yourself.

---

## 5. Next steps (in order)

1. **Owner reviews `core.md` and the six Drafts** — Button, Text input,
   Checkbox / radio / switch, Select, Card, Dialog, with their previews. Adjust
   if needed; only the Owner can move a component from Draft.
2. **Toast / alert** — functional roles, non-color cues, live region.
3. **Empty state** — text hierarchy + Button + illustration slot.
4. **Site theme documents** — official site first (neutral primary), then a
   game, then DabMusic (DAB-013 sequence).
5. **Token export generator + CI** — `core.md` as the only source; contrast
   and visual regression checks.
6. **Foundation test page acceptance → 1.0.0**, Owner only.

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
# http://127.0.0.1:8001/components/preview/checkbox-radio-switch.html
# http://127.0.0.1:8001/components/preview/select.html
# http://127.0.0.1:8001/palettes/preview.html

# Color catalog and contrast checks (must exit 0)
node scripts/hue-catalog.mjs

# Syntax checks
node --check foundation/foundation.js
node --check palettes/preview.js
node --check components/preview/button-preview.js
node --check components/preview/text-input-preview.js
node --check components/preview/checkbox-radio-switch-preview.js
node --check components/preview/select-preview.js
```

Report actual results. Never claim a ratio or a viewport passed unless it was
measured.

---

## 7. Working agreement for the next agent

- **The Owner approves; agents propose.** Do not move a component from Draft to
  Pilot/Adopted, and do not approve a DAB decision yourself.
- **One thing at a time.** The Owner prefers one component or one decision per
  turn, with the result presented for review.
- **One commit per component.** Spec, preview, and registry update go in one
  commit; squash follow-up fixes before handing off.
- **`core.md` is the core contract; `DabDesign.md` is the decision record.**
  New decisions get a DAB ID, an ADR row, a changelog row, and a core token only
  when approved.
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
- Latest commit: see `git log -1`; the branch is pushed.
- The spec is at `0.1.0`; the foundation page is the only 1.0.0 gate.
- Live agent memory for this project exists in the ZCode project memory
  directory, but it is not in the repository. This ROADMAP is the portable
  handoff; keep it updated when the state changes.
- The Owner communicates in Chinese; the repository documents are in English.

---

## 9. Progress log

### 2026-11-09

- **Core extracted:** `core.md` is now the normative core contract (token block
  + operative rules). `DabDesign.md` is the governance and decision record.
- Single-page review gallery added at `components/preview/gallery.html`.
- Button radius is on trial at `radius-lg` 18 (Owner request); pending final
  choice before Pilot. At 32px `sm` it clamps to 16px and reads as a pill.
- Dialog footer uses its own tighter vertical padding (`space-4` 16) while
  header/body stay at `space-6` 24.

### 2026-11-08

- DAB-014 (Tabler icons) ratified.
- Color decisions renumbered: **DAB-015** is the Tailwind hue catalog;
  **DAB-016** is the ramp endpoints (50–950, white/black separate).
- Component Drafts with previews: Button, Text input, Checkbox / radio /
  switch, Select, Card, Dialog.
- Card verified in the browser: 7/7 contrast pairs plus one recorded
  decorative-border exemption in both themes; no overflow at 375, 390, 640,
  768, 1024, 1280, or 1536.
- Dialog Draft added: native modal, `color-overlay`, `color-border-strong`,
  fluid width up to `container-sm`, destructive variant, focus return.
- Fixed two stale DAB-016 comments (functional colors and danger ramps are
  DAB-015) and the catalog JSON `status` field (`approved`).
- Next: Owner review of the six Drafts, then Toast / alert.
