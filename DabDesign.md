# DabAZ Personal Series

**Status:** Approved theme 1.0.0, 2026-11-14. Applies to the **DabAZ official
site** and **DabResume** only.
**Depends on:** [`core.md`](core.md) v1.0.0. This document supplies site-theme
values and composition; it does not redefine core tokens.
**Read first:** `GUIDELINE.md`, then `core.md` and `GOVERNANCE.md`, then this
file. The personal-series theme applies only to the two sites above.
**Not applicable to:** DabMusic, DabSudoku, DabMinesweeper, or future sites.

## 1. Character

Restrained, editorial, neutral, Apple-like.

- Content first: generous whitespace, strong typographic hierarchy, few
  decorative elements.
- Flat at rest: separation comes from surface steps and 1px borders, not shadows
  or gradients.
- One floating shadow, only for interactive card hover and floating layers.
- No decorative gradient meshes, no glassmorphism, no illustration that replaces
  a UI affordance.
- Motion is functional: short color feedback, one restrained card lift.

## 2. Accent

**Accent hue: blue** (Tailwind `blue`). It is used for links and inline
emphasis, not for large surfaces and not as a status color. This is DEC-008
(approved 2026-11-11).

**Primary action: neutral ink.** The five fill aliases map to neutral steps so
the personal series stays monochrome at rest; blue carries links and emphasis.
This keeps the official site and resume calm while still giving links a clear,
accessible identity.

### 2.1 Fill aliases

| Alias | Light | Dark |
|---|---|---|
| `color-primary` | `gray-900` `#171717` | `gray-50` `#FAFAFA` |
| `color-primary-hover` | `gray-950` `#0A0A0A` | `white` `#FFFFFF` |
| `color-primary-pressed` | `black` `#000000` | `gray-200` `#E5E5E5` |
| `color-primary-subtle` | `gray-100` `#F5F5F5` | `gray-800` `#262626` |
| `color-on-primary` | `white` `#FFFFFF` | `gray-900` `#171717` |

### 2.2 Link-safe text

| Alias | Light | Dark |
|---|---|---|
| `color-primary-text` | `blue-700` `#1447E6` | `blue-300` `#8EC5FF` |

Blue never replaces `color-focus`, `color-selection-bg`, or a functional status
color. Selection stays the core-fixed neutral inversion.

### 2.3 Surface tint

None. The personal series uses the core neutral mapping unchanged:
`color-background`, `color-surface`, and `color-surface-secondary` as defined in
`core.md` §3.3.

## 3. Contrast evidence

Measured with the WCAG 2.2 formula on the real surfaces.

| Pair | Ratio | Minimum | Verdict |
|---|---:|---:|---|
| `color-on-primary` on `color-primary` — light | 17.93:1 | 4.5:1 | pass |
| `color-on-primary` on `color-primary` — dark | 17.18:1 | 4.5:1 | pass |
| `color-primary-text` on `color-surface` — light (`blue-700` on white) | 6.83:1 | 4.5:1 | pass |
| `color-primary-text` on `color-background` — light (`blue-700` on `gray-50`) | 6.55:1 | 4.5:1 | pass |
| `color-primary-text` on `color-surface` — dark (`blue-300` on `gray-900`) | 9.89:1 | 4.5:1 | pass |
| `color-primary-text` on `color-background` — dark (`blue-300` on `gray-950`) | 10.92:1 | 4.5:1 | pass |
| `color-focus` on `color-surface` — light | 3.42:1 | 3:1 | pass |
| `color-focus` on `color-background` — light | 3.28:1 | 3:1 | pass |
| `color-focus` on `color-surface` — dark | 5.23:1 | 3:1 | pass |

The accent is used only at the steps above. Do not move link text to `blue-500`
or `blue-600` without re-measuring.

## 4. Typography

Core typography only. No family substitution, no local scale, no tracking
overrides. The official site may use `type-display` and `type-h1` for editorial
headlines; DabResume stays at `type-h2` and below to keep the page scannable.

## 5. Composition

### 5.1 Official site

- Editorial, left-aligned hero with one clear statement and one primary action.
- `container-xl` 1200 default; `container-lg` 1024 for reading-heavy sections.
- Section rhythm: `space-16` 64 between major sections, `space-24` 96 for the
  hero-to-content transition.
- Card grids: three-up at `1024` and above, two-up at `640`, one-up below.
- Borders and surface steps separate sections; no full-bleed gradient bands.
- Footer and navigation are site-owned composition, not core components.

### 5.2 DabResume

- Single column, `container-md` 768 maximum, 34–38em measure.
- Section headings use `type-h3`; roles and dates use `type-label` and
  `type-caption`.
- Print/PDF styling is site-owned; screen layout is the source of truth.
- No portrait is required. If one is used, it sits beside the summary at
  `640` and above and stacks below it on narrow screens.

## 6. Imagery

- Official site: selected work, product screenshots, or personal photography.
  Images carry meaningful `alt` text.
- DabResume: an optional portrait; decorative marks are `aria-hidden`.
- No stock gradient meshes, no abstract blobs, no imagery inside a control.
- Imagery never replaces an affordance or a label.

## 7. Voice

Voice and tone are owned by DabAgents rule 07. This theme does not define them.

## 8. Theme contract checklist

- [x] Scope is explicit: official site + DabResume.
- [x] One accent hue: blue.
- [x] Fill aliases and link-safe text recorded.
- [x] Surface tint: none.
- [x] Contrast measured in both themes.
- [x] Composition and imagery constraints stated.
- [x] No core token value is redefined.
- [x] Owner approved the accent choice (DEC-008, 2026-11-11).
- [x] Depends on `core.md` v1.0.0; voice follows DabAgents rule 07.

## 9. Open questions

1. **Official-site hero.** Final composition and imagery are not designed.
2. **Resume portrait.** Whether to include one, and its art direction.
3. **Print/PDF.** Resume print styles are site-owned and not specified here.
4. **Dark default.** Both themes are supported; whether the personal series
   defaults to light or system is a site-level choice.
