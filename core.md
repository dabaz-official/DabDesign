---
version: "1.2.0"
name: "DabDesign Core"
description: >
  The normative core contract for DabDesign sites: color ramps, a thin
  semantic mapping, typography, space and shape, elevation, motion,
  translucency, layout, icons, accessibility, and the component contract.
  Decision history lives in GOVERNANCE.md.
colors:
  white: "#FFFFFF"
  gray-50: "#FAFAFA"
  gray-100: "#F5F5F5"
  gray-200: "#E5E5E5"
  gray-300: "#D4D4D4"
  gray-400: "#A3A3A3"
  gray-500: "#737373"
  gray-600: "#525252"
  gray-700: "#404040"
  gray-800: "#262626"
  gray-900: "#171717"
  gray-950: "#0A0A0A"
  black: "#000000"
  # Chromatic ramps — Tailwind CSS v3.4.17 (MIT), eleven steps 50–950 each.
  # Primitive only: components consume the semantic mapping, never these steps.
  # red
  red-50: "#FEF2F2"
  red-100: "#FEE2E2"
  red-200: "#FECACA"
  red-300: "#FCA5A5"
  red-400: "#F87171"
  red-500: "#EF4444"
  red-600: "#DC2626"
  red-700: "#B91C1C"
  red-800: "#991B1B"
  red-900: "#7F1D1D"
  red-950: "#450A0A"
  # orange
  orange-50: "#FFF7ED"
  orange-100: "#FFEDD5"
  orange-200: "#FED7AA"
  orange-300: "#FDBA74"
  orange-400: "#FB923C"
  orange-500: "#F97316"
  orange-600: "#EA580C"
  orange-700: "#C2410C"
  orange-800: "#9A3412"
  orange-900: "#7C2D12"
  orange-950: "#431407"
  # amber
  amber-50: "#FFFBEB"
  amber-100: "#FEF3C7"
  amber-200: "#FDE68A"
  amber-300: "#FCD34D"
  amber-400: "#FBBF24"
  amber-500: "#F59E0B"
  amber-600: "#D97706"
  amber-700: "#B45309"
  amber-800: "#92400E"
  amber-900: "#78350F"
  amber-950: "#451A03"
  # yellow
  yellow-50: "#FEFCE8"
  yellow-100: "#FEF9C3"
  yellow-200: "#FEF08A"
  yellow-300: "#FDE047"
  yellow-400: "#FACC15"
  yellow-500: "#EAB308"
  yellow-600: "#CA8A04"
  yellow-700: "#A16207"
  yellow-800: "#854D0E"
  yellow-900: "#713F12"
  yellow-950: "#422006"
  # lime
  lime-50: "#F7FEE7"
  lime-100: "#ECFCCB"
  lime-200: "#D9F99D"
  lime-300: "#BEF264"
  lime-400: "#A3E635"
  lime-500: "#84CC16"
  lime-600: "#65A30D"
  lime-700: "#4D7C0F"
  lime-800: "#3F6212"
  lime-900: "#365314"
  lime-950: "#1A2E05"
  # green
  green-50: "#F0FDF4"
  green-100: "#DCFCE7"
  green-200: "#BBF7D0"
  green-300: "#86EFAC"
  green-400: "#4ADE80"
  green-500: "#22C55E"
  green-600: "#16A34A"
  green-700: "#15803D"
  green-800: "#166534"
  green-900: "#14532D"
  green-950: "#052E16"
  # teal
  teal-50: "#F0FDFA"
  teal-100: "#CCFBF1"
  teal-200: "#99F6E4"
  teal-300: "#5EEAD4"
  teal-400: "#2DD4BF"
  teal-500: "#14B8A6"
  teal-600: "#0D9488"
  teal-700: "#0F766E"
  teal-800: "#115E59"
  teal-900: "#134E4A"
  teal-950: "#042F2E"
  # cyan
  cyan-50: "#ECFEFF"
  cyan-100: "#CFFAFE"
  cyan-200: "#A5F3FC"
  cyan-300: "#67E8F9"
  cyan-400: "#22D3EE"
  cyan-500: "#06B6D4"
  cyan-600: "#0891B2"
  cyan-700: "#0E7490"
  cyan-800: "#155E75"
  cyan-900: "#164E63"
  cyan-950: "#083344"
  # blue
  blue-50: "#EFF6FF"
  blue-100: "#DBEAFE"
  blue-200: "#BFDBFE"
  blue-300: "#93C5FD"
  blue-400: "#60A5FA"
  blue-500: "#3B82F6"
  blue-600: "#2563EB"
  blue-700: "#1D4ED8"
  blue-800: "#1E40AF"
  blue-900: "#1E3A8A"
  blue-950: "#172554"
  # indigo
  indigo-50: "#EEF2FF"
  indigo-100: "#E0E7FF"
  indigo-200: "#C7D2FE"
  indigo-300: "#A5B4FC"
  indigo-400: "#818CF8"
  indigo-500: "#6366F1"
  indigo-600: "#4F46E5"
  indigo-700: "#4338CA"
  indigo-800: "#3730A3"
  indigo-900: "#312E81"
  indigo-950: "#1E1B4B"
  # violet
  violet-50: "#F5F3FF"
  violet-100: "#EDE9FE"
  violet-200: "#DDD6FE"
  violet-300: "#C4B5FD"
  violet-400: "#A78BFA"
  violet-500: "#8B5CF6"
  violet-600: "#7C3AED"
  violet-700: "#6D28D9"
  violet-800: "#5B21B6"
  violet-900: "#4C1D95"
  violet-950: "#2E1065"
  # fuchsia
  fuchsia-50: "#FDF4FF"
  fuchsia-100: "#FAE8FF"
  fuchsia-200: "#F5D0FE"
  fuchsia-300: "#F0ABFC"
  fuchsia-400: "#E879F9"
  fuchsia-500: "#D946EF"
  fuchsia-600: "#C026D3"
  fuchsia-700: "#A21CAF"
  fuchsia-800: "#86198F"
  fuchsia-900: "#701A75"
  fuchsia-950: "#4A044E"
themes:
  light:
    color-background: "#FAFAFA"
    color-surface: "#FFFFFF"
    color-surface-secondary: "#F5F5F5"
    color-text-primary: "#171717"
    color-text-secondary: "#404040"
    color-text-tertiary: "#525252"
    color-text-inverse: "#FFFFFF"
    color-text-disabled: "#A3A3A3"
    color-border: "#E5E5E5"
    color-border-strong: "#737373"
    color-success: "#15803D"
    color-success-strong: "#15803D"
    color-success-subtle: "#DCFCE7"
    color-on-success: "#FFFFFF"
    color-warning: "#B45309"
    color-warning-strong: "#B45309"
    color-warning-subtle: "#FEF3C7"
    color-on-warning: "#FFFFFF"
    color-danger: "#DC2626"
    color-danger-strong: "#B91C1C"
    color-danger-subtle: "#FEE2E2"
    color-on-danger: "#FFFFFF"
    color-focus: "#4C89EF"
    color-selection-bg: "#171717"
    color-selection-fg: "#FFFFFF"
    color-overlay: "rgba(0, 0, 0, 0.50)"
  dark:
    color-background: "#0A0A0A"
    color-surface: "#171717"
    color-surface-secondary: "#262626"
    color-text-primary: "#FAFAFA"
    color-text-secondary: "#D4D4D4"
    color-text-tertiary: "#A3A3A3"
    color-text-inverse: "#171717"
    color-text-disabled: "#525252"
    color-border: "#262626"
    color-border-strong: "#737373"
    color-success: "#4ADE80"
    color-success-strong: "#4ADE80"
    color-success-subtle: "#14532D"
    color-on-success: "#000000"
    color-warning: "#FBBF24"
    color-warning-strong: "#FBBF24"
    color-warning-subtle: "#78350F"
    color-on-warning: "#000000"
    color-danger: "#EF4444"
    color-danger-strong: "#FCA5A5"
    color-danger-subtle: "#450A0A"
    color-on-danger: "#000000"
    color-focus: "#4C89EF"
    color-selection-bg: "#FAFAFA"
    color-selection-fg: "#171717"
    color-overlay: "rgba(0, 0, 0, 0.50)"
typography:
  # Family names only. Font files, loading, fallback, and allowed weights are
  # defined by DabFonts; compose the stack per DabFonts, do not copy it here.
  type-family-sans: '"Dab Sans"'
  type-family-mono: '"Dab Mono"'
  type-display:
    fontSize: "clamp(2.25rem, 1.5rem + 3vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: 0
  type-h1:
    fontSize: "clamp(1.875rem, 1.5rem + 1.5vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  type-h2:
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  type-h3:
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  type-h4:
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  type-body-lg:
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
  type-body:
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0
  type-body-sm:
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  type-label:
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  type-caption:
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
spacing:
  space-0: 0px
  space-0-5: 2px
  space-1: 4px
  space-2: 8px
  space-3: 12px
  space-4: 16px
  space-5: 20px
  space-6: 24px
  space-8: 32px
  space-10: 40px
  space-12: 48px
  space-16: 64px
  space-20: 80px
  space-24: 96px
sizing:
  size-icon-sm: 16px
  size-icon-md: 20px
  size-icon-lg: 24px
  size-icon-xl: 32px
  control-height-sm: 32px
  control-height-md: 40px
  control-height-lg: 48px
radius:
  radius-none: 0px
  radius-xs: 5px
  radius-sm: 8px
  radius-md: 11px
  radius-lg: 18px
  radius-pill: 9999px
  radius-full: 50%
border:
  border-width: 1px
elevation:
  shadow-floating: "2px 4px 16px rgba(0, 0, 0, 0.16)"
glass:
  glass-blur-sm: 12px
  glass-blur-md: 20px
  glass-blur-lg: 32px
  glass-saturate: 180%
  glass-tint-light: "rgba(255, 255, 255, 0.72)"
  glass-tint-dark: "rgba(23, 23, 23, 0.72)"
  glass-border-light: "rgba(0, 0, 0, 0.08)"
  glass-border-dark: "rgba(255, 255, 255, 0.12)"
  glass-highlight: "inset 0 1px 0 rgba(255, 255, 255, 0.30)"
motion:
  duration-fast: 100ms
  duration-base: 200ms
  duration-slow: 300ms
  easing-standard: "cubic-bezier(0, 0, 0.5, 1)"
  easing-linear: "linear"
breakpoints:
  breakpoint-sm: 640px
  breakpoint-md: 768px
  breakpoint-lg: 1024px
  breakpoint-xl: 1280px
  breakpoint-2xl: 1536px
containers:
  container-sm: 640px
  container-md: 768px
  container-lg: 1024px
  container-xl: 1200px
  container-2xl: 1280px
  container-fluid: 100%
---

# DabDesign Core

**Status:** 1.2.0, 2026-11-22. 1.0.0 was approved by the Owner 2026-11-14;
1.1.0 adds the translucency tokens and DEC-015; 1.2.0 amends the blur-animation
rule (DEC-016). Lean shared core; no normative component catalog at this
version.
**Authority:** This file is the normative core contract. `GOVERNANCE.md` records
principles, decisions, and the site-theme contract; `CHANGELOG.md` records
released changes; `ROADMAP.md` is the post-1.0 plan; `DabDesign.md` is the
DabAZ personal-series theme.
**Scope:** the shared foundation for DabAZ sites, validated by one real pilot
before a component is promoted.

> **Reading order.** Start at `GUIDELINE.md`; it routes here for token values
> and to `GOVERNANCE.md` for decisions. For the DabAZ official site
> (`dabaz.me`) and DabResume, also read `DabDesign.md`. Those two are the only
> projects the personal-series theme applies to; every other project uses its
> own theme document.

## 0. How to use this file

1. **Consume semantic roles, never primitive steps.** `gray-900` and `blue-600`
   are primitives; `color-text-primary` and `color-primary` are the component
   API.
2. **The YAML frontmatter is the only token block.** It holds the neutral ramp,
   the twelve chromatic ramps, the thin light/dark mapping, typography, space
   and shape, elevation, motion, translucency, layout, and containers. Body
   tables explain intent; they do not create values.
3. **Color is organized by color first.** The primaries are the gray and hue
   ramps; the usage roles are a thin mapping at the end of the color section.
4. **Do not fork a scale.** If no token fits, it is a decision in
   `GOVERNANCE.md` — not a local value.
5. **No component spec before a pilot.** The core defines the component
   contract; per-component specs are written only when a real site consumes
   them.

## 1. Scope and boundary

### 1.1 1.0.0 scope

**In:** boundary; color; typography; space and shape; elevation;
translucency; motion; layout; icons; accessibility baseline; component
contract standard; token delivery; lightweight decisions.

**Out:** the full eight-component catalog; per-component specs for unused
components; site themes beyond the personal-series document; enterprise
governance; framework or implementation code.

**Pilot:** the DabAZ official site, real content, both themes. Start with
Button, Text input, and Card; add Dialog only if the pilot needs a modal. No
component is Adopted at 1.0.0.

### 1.2 Boundary

The core shares **behavior, accessibility, structure, and tokens** — not visual
sameness. A site may look different; it may not behave differently.

| Layer | Owns | Examples |
|---|---|---|
| **Core fixed** | Semantic names and mappings; neutral, functional, focus, selection, overlay values; type; space, size, radius, borders; elevation, motion, and translucency; layout; icons; accessibility baseline; component contract | `color-text-primary`, `type-body`, `space-6`, focus ring, Dialog keyboard model |
| **Site theme** | One accent hue and its aliases; surface tint by remapping ratified neutral steps; composition; imagery; documented appearance variants | Personal-series accent, hero layout, compact variant |
| **Site-owned** | Components with no shared behavior contract | Hero composition, media player, game board/HUD, illustration |

**Locked:** semantic names, neutral and functional values, type/spacing/radius
scales, focus and keyboard behavior, accessibility targets, component behavior.
No site may fork a scale, invent a value, or override focus.

**Contract vs implementation.** The core fixes the contract, not the code. A
site implements the component in its own framework; behavior, states, keyboard,
focus, and accessibility must match. Visual appearance varies only through core
tokens or documented appearance variants.

## 2. Token architecture and naming

### 2.1 Three layers

| Layer | Purpose | Example | Used in components |
|---|---|---|---|
| Primitive | Raw value, no UI meaning | `gray-900`, `blue-600` | No |
| Semantic | Purpose within a theme | `color-text-primary`, `type-body`, `space-4` | Yes |
| Component | Repeated component decision semantic tokens cannot express | `button-height-md` | Only when documented in the component spec |

### 2.2 Naming

Role-based kebab-case. Prefixes:

`color-` color roles · `type-` typography · `space-` spacing · `size-` icon
sizes · `control-` control heights · `radius-` radius · `border-` border width
· `shadow-` elevation · `duration-` / `easing-` motion · `breakpoint-` /
`container-` layout.

Typography uses `type-`, never `text-`; color roles keep `color-text-*`.
`type-body` is typography; `color-text-primary` is color.

### 2.3 Source and export

- `core.md` frontmatter is the only token block. Every token appears once.
- Export naming: `dab-<token>` — `dab-color-text-primary`, `dab-type-body`,
  `dab-space-4`.
- Site themes may carry only the theme-level values the contract requires
  (accent aliases, link-safe text, a surface-tint remap); they never duplicate
  the core ramps or neutral values.
- Generated CSS, JSON, and tool variables derive from this frontmatter; never
  hand-edited.
- Names are stable. Renaming an approved token is a breaking change with a
  migration note.

## 3. Color — color first

### 3.1 The primary structure: ramps

The color system is organized by color, not by function. There are thirteen
families:

- **Neutral:** `gray-50` … `gray-950`, plus `white` and `black` as separate
  primitives.
- **Chromatic:** `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`,
  `cyan`, `blue`, `indigo`, `violet`, `fuchsia`.

Every chromatic ramp has eleven steps: `50 / 100 / 200 / 300 / 400 / 500 / 600 /
700 / 800 / 900 / 950`. The values are Tailwind CSS v3.4.17 (MIT), frozen in the
frontmatter. The palette values are v3.4.17; the framework used by consuming
projects remains Tailwind CSS v4 per DabAgents rule 02 §5. The display step is
`500`; darker steps carry text on light surfaces, lighter steps carry text on
dark surfaces.

Ramps are **primitive**: components never reference `gray-900` or `blue-600`
directly. The usage mapping in §3.3 is the component API.

### 3.2 Rules for ramps

- `white` and `black` exist once, outside every ramp.
- Gray is pure neutral and identical on every site; its values are never
  regenerated.
- A site theme chooses **one** chromatic hue for its accent. It does not
  redeclare the ramp values.
- Functional status colors are ramp references: success → green, warning →
  amber, danger → red.
- Accent is never a status color; status colors never carry brand expression.

### 3.3 The thin usage mapping

This is deliberately small. Components consume these roles; a site theme may
remap only the accent and surface-tint entries allowed by §1.2.

| Role | Light | Dark | Purpose |
|---|---|---|---|
| `color-background` | `gray-50` | `gray-950` | Page background |
| `color-surface` | `white` | `gray-900` | Cards, panels, inputs |
| `color-surface-secondary` | `gray-100` | `gray-800` | Nested or secondary surface |
| `color-text-primary` | `gray-900` | `gray-50` | Default text |
| `color-text-secondary` | `gray-700` | `gray-300` | Supporting text |
| `color-text-tertiary` | `gray-600` | `gray-400` | Hints and metadata; still 4.5:1 |
| `color-text-inverse` | `white` | `gray-900` | Text on inverted surfaces |
| `color-text-disabled` | `gray-400` | `gray-600` | Disabled text; exempt but recorded |
| `color-border` | `gray-200` | `gray-800` | Decorative divider |
| `color-border-strong` | `gray-500` | `gray-500` | Component boundary; 3:1 |
| `color-focus` | `#4C89EF` | `#4C89EF` | Focus ring, core-fixed |
| `color-selection-bg` | `gray-900` | `gray-50` | Selected text background |
| `color-selection-fg` | `white` | `gray-900` | Selected text |
| `color-overlay` | `rgba(0,0,0,.50)` | `rgba(0,0,0,.50)` | Modal scrim only |

Functional roles (values in the frontmatter): each status has `base` (icon,
border, fill; 3:1), `strong` (text; 4.5:1), `subtle` (tint surface), and `on`
(text on its own base; 4.5:1). Role names are `color-success`,
`color-success-strong`, `color-success-subtle`, `color-on-success`; the same
quartet exists for `warning` and `danger`. `on-*` is used only on its own base
fill. There is no `info` role; informational messaging uses a neutral surface.

### 3.4 Accent contract

- One accent hue per site theme, selected from the twelve chromatic ramps.
- The site maps six aliases in both themes:
  `color-primary` (fill), `color-primary-hover`, `color-primary-pressed`,
  `color-primary-subtle`, `color-on-primary`, and `color-primary-text` (the
  link-safe text role).
- `color-primary` is the **fill** role; `color-primary-text` is the **text**
  role. They are not interchangeable: a bright fill cannot also clear 4.5:1 as
  link text on a light surface.
- A neutral site may map the fill aliases onto neutral ink; its accent ramp
  still serves links and selection.
- A site records its hue, fill steps, text steps, and measured ratios in its
  theme document. It does not copy the ramp hexes.

### 3.5 Contrast

| Content | Minimum |
|---|---|
| Body text and every text style below large-text size, including secondary and muted | 4.5:1 |
| Large text (≥ 24px regular, ≥ 18.66px bold) | 3:1 |
| Non-text UI: interactive boundaries, informative icons, focus | 3:1 |
| Disabled controls | Exempt, but recorded |

Contrast is measured on the actual surface, in both themes. "Estimated ~"
ratios are documentation defects.

Measured core pairs, using the v3.4.17 values and the core surfaces:

| Pair | Light | Dark | Minimum |
|---|---:|---:|---:|
| `color-text-primary` on `color-surface` | 17.93:1 | 17.18:1 | 4.5:1 |
| `color-text-tertiary` on `color-surface-secondary` | 7.17:1 | 6.00:1 | 4.5:1 |
| `color-border-strong` on `color-background` | 4.54:1 | 4.18:1 | 3:1 |
| `color-focus` on `color-surface-secondary` | 3.14:1 | 4.42:1 | 3:1 |
| `color-selection-fg` on `color-selection-bg` | 17.93:1 | 17.18:1 | 4.5:1 |
| `color-success-strong` on `color-surface` | 5.02:1 | 10.29:1 | 4.5:1 |
| `color-warning-strong` on `color-surface` | 5.02:1 | 10.74:1 | 4.5:1 |
| `color-danger-strong` on `color-surface` | 6.47:1 | 9.45:1 | 4.5:1 |
| `color-on-success` on `color-success` | 5.02:1 | 12.05:1 | 4.5:1 |
| `color-on-warning` on `color-warning` | 5.02:1 | 12.58:1 | 4.5:1 |
| `color-on-danger` on `color-danger` | 4.83:1 | 5.58:1 | 4.5:1 |

The full 288-pair verification is generated in `palettes/catalog.md`; the
personal-series accent pairs are in `DabDesign.md` §3.

### 3.6 Open color gaps

- **Bright light-theme fills.** A bright `500` fill on a light background needs
  black text and a contrast border; the three-state hover/pressed model is not
  decided. The personal series uses neutral ink; only colored sites are
  affected.
- **Focus on tinted surroundings.** `color-focus` is measured against neutral
  surfaces only. A focused control on an accent or status `-subtle` surface is
  not verified.

## 4. Typography

### 4.1 Families and loading

| Role | Family | Notes |
|---|---|---|
| Sans | `Dab Sans` | Text, headings, and UI |
| Monospace | `Dab Mono` | Code and tabular numerals only |

- Family names are the only family-level values this file owns. Font files,
  loading, fallback, and the allowed weight set are defined by
  [DabFonts](https://github.com/dabaz-official/DabFonts) in its guideline and
  typesetting specification.
- One sans family; a site theme may not substitute another family.

### 4.2 Scale

This table is the **single authority** for exact sizes, line heights, weights,
and tracking. DabFonts owns the font files and the constraints they impose;
this file owns the values assigned to roles.

16px base; integer sizes 12/14/16/18/20/24/30/36/48. Body and below fixed;
`display` and `h1` fluid via `clamp()`.

| Token | Size | Line height | Weight | Behavior |
|---|---:|---:|---:|---|
| `type-display` | 36 → 48 | 1.1 | 600 | fluid |
| `type-h1` | 30 → 36 | 1.2 | 600 | fluid |
| `type-h2` | 24 | 1.2 | 600 | fixed |
| `type-h3` | 20 | 1.3 | 600 | fixed |
| `type-h4` | 18 | 1.4 | 600 | fixed |
| `type-body-lg` | 18 | 1.7 | 400 | fixed |
| `type-body` | 16 | 1.8 | 400 | fixed |
| `type-body-sm` | 14 | 1.6 | 400 | fixed |
| `type-label` | 14 | 1.4 | 600 | fixed |
| `type-caption` | 12 | 1.5 | 400 | fixed |

- `type-body` uses 1.8, inside the 1.75–1.85 body range DabFonts requires for
  Chinese body copy.
- Tracking: zero everywhere, including headings.
- Alignment: body copy is start-aligned; do not justify. Headings inherit the
  same alignment unless a site theme documents an editorial exception.
- Numerals: tabular figures in tables, metrics, and aligned columns.
- Copy style and casing follow DabAgents rule 07; they are not type tokens.

## 5. Space and shape

### 5.1 Spacing

4px grid with a 2px half-step; fourteen steps:

`space-0` 0 · `space-0-5` 2 · `space-1` 4 · `space-2` 8 · `space-3` 12 ·
`space-4` 16 · `space-5` 20 · `space-6` 24 · `space-8` 32 · `space-10` 40 ·
`space-12` 48 · `space-16` 64 · `space-20` 80 · `space-24` 96.

Ranges: compact control padding 8–12 · standard control padding 12–16 · card
padding 16–24 · section gaps 32–64 · page rhythm 64–96. No free values.

### 5.2 Controls and icons

| Token | Value | Use |
|---|---:|---|
| `control-height-sm` | 32 | Dense desktop |
| `control-height-md` | 40 | Default |
| `control-height-lg` | 48 | Touch / generous |
| `size-icon-sm` | 16 | Inline, compact |
| `size-icon-md` | 20 | Default |
| `size-icon-lg` | 24 | Prominent |
| `size-icon-xl` | 32 | Empty state / media |

`md` is a visual default, not a touch claim: on touch surfaces a control must
reach a 44×44 effective target. Icon artwork is never the hit target.

### 5.3 Radius — Apple ladder

| Token | Value | Use |
|---|---:|---|
| `radius-none` | 0 | Full-bleed, deliberate square edges |
| `radius-xs` | 5 | Compact inline chips |
| `radius-sm` | 8 | Inputs, selects |
| `radius-md` | 11 | Default buttons and soft controls |
| `radius-lg` | 18 | Cards, panels, popovers, inline imagery |
| `radius-pill` | 9999px | Explicit pill action; never default |
| `radius-full` | 50% | Circular icon buttons and avatars |

Nested surfaces never exceed their container's radius. Radius never animates.
The Button uses `radius-md` 11; inputs and selects use `radius-sm` 8; cards and
panels use `radius-lg` 18. `radius-pill` is an explicit action signal, not a
default. This assignment is DEC-009 (approved 2026-11-11).

### 5.4 Borders

1px default. 2px only for the focus outline and validated selected outlines. No
0.5px borders — device-pixel snapping makes them inconsistent.

## 6. Elevation and motion

**Flat at rest.** Cards, buttons, navigation, and every resting surface carry no
shadow; layering comes from surface steps and `color-border`. A glass surface
(§6.1) is the only other material: it is opt-in, never the default. Exactly one
shadow:

`shadow-floating: 2px 4px 16px rgba(0, 0, 0, 0.16)`

Used only for the hover lift of a whole-surface interactive card and for
floating layers (dialog, popover, dropdown, toast). In dark theme floating
layers must also carry `color-border-strong`; the shadow is never the only cue.

**Hover lift — interactive cards only.** `transform: scale(1.01)` plus
`shadow-floating`, 300ms, `easing-standard`. This is the only transform allowed
in a resting UI; it is forbidden on buttons, inputs, navigation, and static
cards. Radius never animates.

| Token | Value | Use |
|---|---:|---|
| `duration-fast` | 100ms | Color, background, border, opacity feedback |
| `duration-base` | 200ms | Tooltip and dropdown entrance |
| `duration-slow` | 300ms | Card hover lift, dialog and drawer entrance |
| `easing-standard` | `cubic-bezier(0, 0, 0.5, 1)` | Transform, shadow, overlay entrance |
| `easing-linear` | `linear` | Color-only transitions |

Only `transform`, `opacity`, `color`, `background-color`, `border-color`, and
`box-shadow` animate. Layout properties never animate. Press is a color or
border change at `duration-fast`, not a scale. Under
`prefers-reduced-motion: reduce`, movement is disabled; color and opacity remain
at `duration-fast`; `shadow-floating` appears instantly; focus is never reduced.

### 6.1 Translucency — glass

Glass is an **appearance variant available to every component**, never a
default. A component that offers it documents the variant in its contract; a
component that declines it records that too. No surface is forbidden glass by
category, and no surface ships glass unless it was chosen.

| Token | Value | Use |
|---|---|---|
| `glass-blur-sm` | 12px | Chips, small controls, inline toolbars |
| `glass-blur-md` | 20px | Navigation bars, sticky bars, popovers |
| `glass-blur-lg` | 32px | Sheets, large panels, dialogs |
| `glass-saturate` | 180% | Pairs with every blur step |
| `glass-tint-light` | `rgba(255,255,255,.72)` | Base glass fill, light theme |
| `glass-tint-dark` | `rgba(23,23,23,.72)` | Base glass fill, dark theme |
| `glass-border-light` | `rgba(0,0,0,.08)` | Hairline edge, light theme |
| `glass-border-dark` | `rgba(255,255,255,.12)` | Hairline edge, dark theme |
| `glass-highlight` | `inset 0 1px 0 rgba(255,255,255,.30)` | Optional specular top edge |

**The 72% floor is the accessibility mechanism.** Text on glass sits on the
composited tint, and any backdrop is bounded by pure black or pure white. At 72%
those extremes bound the worst case, measured with the WCAG 2.2 formula:

| Pair on `glass-tint` | Light over black | Dark over white | Minimum | Verdict |
|---|---:|---:|---:|---|
| `color-text-primary` | 9.0:1 | 6.8:1 | 4.5:1 | pass |
| `color-text-secondary` | 5.2:1 | 4.8:1 | 4.5:1 | pass |
| `color-text-tertiary` | 3.9:1 | 2.8:1 | 4.5:1 | fail |
| `color-focus` | 1.7:1 | 2.1:1 | 3:1 | fail |

Rules:

1. **No default.** A component's resting state is opaque `color-surface`. Glass
   is a documented variant, chosen per surface.
2. **Primary and secondary text only.** Tertiary text, disabled text, and any
   non-text element that owes 3:1 — borders, icons, focus — never sit directly
   on `glass-tint`. They go on an opaque `color-surface` content plane inside
   the glass, or the variant does not use glass.
3. **Focus is never the exception.** Because the core focus colour falls below
   3:1 on glass, a glass surface that contains focusable controls keeps those
   controls on an opaque content plane, or provides a measured focus track that
   reaches 3:1. §9 is unchanged.
4. **Fallback is mandatory.** Under `@supports not (backdrop-filter: blur(1px))`
   and under `prefers-reduced-transparency: reduce` where supported,
   `glass-tint` resolves to opaque `color-surface`. A translucent panel with no
   blur is never shipped.
5. **Functional, not decorative.** Glass belongs to a layer that content moves
   under: navigation, sub-navigation, sticky bars, popovers, dialogs, sheets,
   toasts, and floating controls. A full-bleed decorative glass panel is out of
   scope, consistent with DEC-003.
6. **One blur layer.** Glass never nests. Inner content planes are opaque.
7. **Blur may animate only inside a warmed range.** A `backdrop-filter`
   transition is allowed when all of these hold:
   - only the blur radius changes; the tint stays at the core value (rule 8);
   - the maximum radius in the range was painted once before the first
     interaction — warm-up is part of the feature, not an optimization;
   - one glass layer, chrome-sized: navigation, bars, sheets, popovers. Never
     per item in a list, never a full-bleed scrolling surface;
   - `duration-slow` at most, and nothing else animates with it;
   - under `prefers-reduced-motion: reduce` the change is instant.

   The first paint of a new filter value costs about 85–100ms on the measured
   hardware; re-entering an unwarmed radius range can hitch again. Animating
   `opacity` or `transform` instead stays valid and needs no warm-up.
8. **The tint is core-fixed.** A site theme may choose which components use
   glass; it may not change the tint alpha. If a surface cannot pass at 72%, it
   does not carry that content on glass.

This is DEC-015 (approved 2026-11-22), with rule 7 amended by DEC-016. It
withdraws the blanket glass ban in `DabDesign.md` §1 and leaves DEC-003's
flat-at-rest default intact.

## 7. Layout

**Breakpoints** — minimum widths, mobile-first: `640` `sm`, `768` `md`, `1024`
`lg`, `1280` `xl`, `1536` `2xl`.

**Containers** — `container-sm` 640 · `container-md` 768 · `container-lg` 1024 ·
`container-xl` 1200 (default) · `container-2xl` 1280 · `container-fluid` 100%.

**Gutters** — below 640: `space-4` 16; 640–1023: `space-6` 24; 1024+: `space-8`
32. Gutters are inner container padding.

**Grid** — 12 columns available for broad compositions, not imposed everywhere.
Default gap `space-6` 24 on desktop, `space-4` 16 on narrow screens. Cards
reflow by minimum usable width, not fixed desktop columns. Full-bleed
backgrounds may extend past the container; content stays aligned.

**Measure and indent** — body copy holds a **34–38em** measure, about 36–40 Han
characters. One Han is 0.94em, so 38em holds about 40 characters. First-line
indent is `text-indent: 1.88em`, exactly two Han characters. List items,
captions, and table cells are not indented; paragraphs are separated with
`margin`, not `<br>` or empty paragraphs.

**Validation widths** — 375, 390, 640, 768, 1024, 1280, 1536, plus 320 for
horizontal overflow. No horizontal scrolling at 320 or at 200% zoom.

## 8. Icons

- Tabler Icons, outline only, MIT. No filled/duotone, emoji, hand-drawn paths,
  or a second family.
- 24×24 viewBox, stroke 2, round caps and joins, `fill: none`,
  `stroke: currentColor`.
- Sizes 16 / 20 / 24 / 32; grid and stroke scale together.
- Inline SVG or a self-hosted sprite. No icon font, no CDN. Bundled icons carry
  the Tabler MIT notice.
- Icons inherit `currentColor`; there is no separate icon color token.
- Decorative icons are `aria-hidden="true"`. Meaningful icons need a text
  alternative. Icon-only controls require `aria-label` and a 44×44 target.

## 9. Accessibility

Target: **WCAG 2.2 Level AA**. Named opt-ins: 44×44 effective targets and the
2px outline + 2px offset focus geometry (SC 2.4.13 adopted as house policy).
Blanket AAA is a non-goal.

- Contrast thresholds: §3.5.
- Focus: every keyboard-focusable element has a visible 2px `color-focus`
  outline with 2px offset, keeping the element's radius, ≥ 3:1 against adjacent
  colors. Never removed without an approved replacement.
- Keyboard and semantics: native elements where they exist; accessible names
  for icon-only controls; logical focus order; expected keyboard interactions.
- Target size: 44×44 effective on touch surfaces; icon artwork may be smaller.
- Non-color cues: status, selection, and errors always carry text, icon, or
  shape in addition to color.
- Per-component checklist: role, keyboard map, accessible name, focus order,
  contrast on real surfaces, both themes, screen-reader announcement.
- Motion: `prefers-reduced-motion` respected; no flashing, parallax, or
  auto-play without controls.

## 10. Component contract

A component entry includes name, purpose, anatomy (background, text, border,
typography, padding, height, radius, shadow), variants, sizes, state matrix,
accessibility (role, keyboard, accessible name, focus), and component-specific
Do/Don't.

**State matrix:** default, hover (pointer platforms only), pressed (real
variant), focused (ratified focus treatment, both themes), disabled (not
opacity-only), selected (non-color cue), loading/error (layout-preserving,
announced, error pairs with text).

**Status at 1.2.0:** no per-component spec is normative in this repository.
The archived component drafts and previews under `archive/` are not the current
contract. A component contract is written only after a real site consumes it.
The v1 pilot set is Button, Text input, and Card; add Dialog only if the pilot
needs a modal.

**Lifecycle:** Proposed → Draft → Pilot → Adopted → Deprecated. A component is
promoted only after passing the Definition of Done in a real pilot site. Only
the Owner moves a component from Draft.

**Site-owned:** hero/marketing composition, media-player controls and cover
treatment, game board/HUD and game-specific feedback, illustration and imagery.

## 11. Open gaps

1. Bright light-theme accent fills (§3.6).
2. Focus on accent/functional subtle surfaces (§3.6).
3. No token-export generator: consumers transcribe values from this
   frontmatter. `palettes/` is generated, but no CSS/JSON exporter exists.
4. No CI: `scripts/hue-catalog.mjs` is the only automated check; contrast,
   keyboard, and viewport checks are run by hand.
5. No pilot evidence yet. The v1 pilot is the next step; no component is
   Adopted at 1.0.0.
6. Glass (§6.1): the 72% floor is a bound derived from the black/white
   extremes, not a measurement on real backdrops. Blur animation was measured on
   one desktop GPU (DEC-016); mobile Safari and low-end GPUs are unmeasured.

## 12. Decisions

Decision IDs, principles, rationale, and the site-theme contract live in
`GOVERNANCE.md`. Released changes live in `CHANGELOG.md`. The personal-series
theme lives in `DabDesign.md`.
