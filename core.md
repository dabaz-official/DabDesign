---
version: "0.1.0"
name: "DabWave Core"
description: >
  The normative core contract for DabWave sites: color ramps, a thin
  semantic mapping, typography, space and shape, elevation and motion,
  layout, icons, accessibility, and the component contract. Decision
  history lives in GOVERNANCE.md.
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
  # Chromatic ramps — Tailwind CSS v4 (MIT), eleven steps 50–950 each.
  # Primitive only: components consume the semantic mapping, never these steps.
  # red
  red-50: "#FEF2F2"
  red-100: "#FFE2E2"
  red-200: "#FFC9C9"
  red-300: "#FFA2A2"
  red-400: "#FF6467"
  red-500: "#FB2C36"
  red-600: "#E7000B"
  red-700: "#C10007"
  red-800: "#9F0712"
  red-900: "#82181A"
  red-950: "#460809"
  # orange
  orange-50: "#FFF7ED"
  orange-100: "#FFEDD4"
  orange-200: "#FFD6A7"
  orange-300: "#FFB86A"
  orange-400: "#FF8904"
  orange-500: "#FF6900"
  orange-600: "#F54900"
  orange-700: "#CA3500"
  orange-800: "#9F2D00"
  orange-900: "#7E2A0C"
  orange-950: "#441306"
  # amber
  amber-50: "#FFFBEB"
  amber-100: "#FEF3C6"
  amber-200: "#FEE685"
  amber-300: "#FFD230"
  amber-400: "#FFB900"
  amber-500: "#FE9A00"
  amber-600: "#E17100"
  amber-700: "#BB4D00"
  amber-800: "#973C00"
  amber-900: "#7B3306"
  amber-950: "#461901"
  # yellow
  yellow-50: "#FEFCE8"
  yellow-100: "#FEF9C2"
  yellow-200: "#FFF085"
  yellow-300: "#FFDF20"
  yellow-400: "#FDC700"
  yellow-500: "#F0B100"
  yellow-600: "#D08700"
  yellow-700: "#A65F00"
  yellow-800: "#894B00"
  yellow-900: "#733E0A"
  yellow-950: "#432004"
  # lime
  lime-50: "#F7FEE7"
  lime-100: "#ECFCCA"
  lime-200: "#D8F999"
  lime-300: "#BBF451"
  lime-400: "#9AE600"
  lime-500: "#7CCF00"
  lime-600: "#5EA500"
  lime-700: "#497D00"
  lime-800: "#3C6300"
  lime-900: "#35530E"
  lime-950: "#192E03"
  # green
  green-50: "#F0FDF4"
  green-100: "#DCFCE7"
  green-200: "#B9F8CF"
  green-300: "#7BF1A8"
  green-400: "#05DF72"
  green-500: "#00C950"
  green-600: "#00A63E"
  green-700: "#008236"
  green-800: "#016630"
  green-900: "#0D542B"
  green-950: "#032E15"
  # teal
  teal-50: "#F0FDFA"
  teal-100: "#CBFBF1"
  teal-200: "#96F7E4"
  teal-300: "#46ECD5"
  teal-400: "#00D5BE"
  teal-500: "#00BBA7"
  teal-600: "#009689"
  teal-700: "#00786F"
  teal-800: "#005F5A"
  teal-900: "#0B4F4A"
  teal-950: "#022F2E"
  # cyan
  cyan-50: "#ECFEFF"
  cyan-100: "#CEFAFE"
  cyan-200: "#A2F4FD"
  cyan-300: "#53EAFD"
  cyan-400: "#00D3F2"
  cyan-500: "#00B8DB"
  cyan-600: "#0092B8"
  cyan-700: "#007595"
  cyan-800: "#005F78"
  cyan-900: "#104E64"
  cyan-950: "#053345"
  # blue
  blue-50: "#EFF6FF"
  blue-100: "#DBEAFE"
  blue-200: "#BEDBFF"
  blue-300: "#8EC5FF"
  blue-400: "#51A2FF"
  blue-500: "#2B7FFF"
  blue-600: "#155DFC"
  blue-700: "#1447E6"
  blue-800: "#193CB8"
  blue-900: "#1C398E"
  blue-950: "#162456"
  # indigo
  indigo-50: "#EEF2FF"
  indigo-100: "#E0E7FF"
  indigo-200: "#C6D2FF"
  indigo-300: "#A3B3FF"
  indigo-400: "#7C86FF"
  indigo-500: "#615FFF"
  indigo-600: "#4F39F6"
  indigo-700: "#432DD7"
  indigo-800: "#372AAC"
  indigo-900: "#312C85"
  indigo-950: "#1E1A4D"
  # violet
  violet-50: "#F5F3FF"
  violet-100: "#EDE9FE"
  violet-200: "#DDD6FF"
  violet-300: "#C4B4FF"
  violet-400: "#A684FF"
  violet-500: "#8E51FF"
  violet-600: "#7F22FE"
  violet-700: "#7008E7"
  violet-800: "#5D0EC0"
  violet-900: "#4D179A"
  violet-950: "#2F0D68"
  # fuchsia
  fuchsia-50: "#FDF4FF"
  fuchsia-100: "#FAE8FF"
  fuchsia-200: "#F6CFFF"
  fuchsia-300: "#F4A8FF"
  fuchsia-400: "#ED6AFF"
  fuchsia-500: "#E12AFB"
  fuchsia-600: "#C800DE"
  fuchsia-700: "#A800B7"
  fuchsia-800: "#8A0194"
  fuchsia-900: "#721378"
  fuchsia-950: "#4B004F"
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
    color-success: "#008236"
    color-success-strong: "#008236"
    color-success-subtle: "#DCFCE7"
    color-on-success: "#FFFFFF"
    color-warning: "#BB4D00"
    color-warning-strong: "#BB4D00"
    color-warning-subtle: "#FEF3C6"
    color-on-warning: "#FFFFFF"
    color-danger: "#E7000B"
    color-danger-strong: "#C10007"
    color-danger-subtle: "#FFE2E2"
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
    color-success: "#05DF72"
    color-success-strong: "#05DF72"
    color-success-subtle: "#0D542B"
    color-on-success: "#000000"
    color-warning: "#FFB900"
    color-warning-strong: "#FFB900"
    color-warning-subtle: "#7B3306"
    color-on-warning: "#000000"
    color-danger: "#FB2C36"
    color-danger-strong: "#FFA2A2"
    color-danger-subtle: "#460809"
    color-on-danger: "#000000"
    color-focus: "#4C89EF"
    color-selection-bg: "#FAFAFA"
    color-selection-fg: "#171717"
    color-overlay: "rgba(0, 0, 0, 0.50)"
typography:
  type-family-sans: 'Inter, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
  type-family-mono: 'ui-monospace, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace'
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
    lineHeight: 1.7
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

# DabWave Core

**Status:** v1 core, approved by the Owner 2026-11-11. Lean shared core; no
component catalog yet.
**Authority:** This file is the normative core contract. `GOVERNANCE.md` records
principles, decisions, and the changelog; `DabDesign.md` is the DabAZ personal
series theme; `ROADMAP.md` is the handoff.
**Scope:** the shared foundation for DabAZ sites, validated by one real pilot
before any component catalog is multiplied.

> **Reading order.** Before starting any project, read this file first, then
> `GOVERNANCE.md`. For the DabAZ official site (`dabaz.me`) and DabResume, also
> read `DabDesign.md`. Those two are the only projects the personal-series
> theme applies to; every other project uses its own theme document.

## 0. How to use this file

1. **Consume semantic roles, never primitive steps.** `gray-900` and `blue-600`
   are primitives; `color-text-primary` and `color-primary` are the component
   API.
2. **The YAML frontmatter is the only token block.** It holds the neutral ramp,
   the twelve chromatic ramps, the thin light/dark mapping, typography, space
   and shape, elevation and motion, layout, and containers. Body tables explain
   intent; they do not create values.
3. **Color is organized by color first.** The primaries are the gray and hue
   ramps; the usage roles are a thin mapping at the end of the color section.
4. **Do not fork a scale.** If no token fits, it is a decision in
   `GOVERNANCE.md` — not a local value.
5. **No component spec before a pilot.** The core defines the component
   contract; per-component specs are written only when a real site consumes
   them.

## 1. Scope and boundary

### 1.1 v1 scope

**In:** boundary; color; typography; space and shape; elevation and motion;
layout; icons; accessibility baseline; component contract standard; token
delivery; lightweight decisions.

**Out:** the full eight-component catalog; per-component specs for unused
components; site themes beyond the personal-series document and one template;
enterprise governance; framework or implementation code; `1.0.0`.

**Pilot:** the DabAZ official site, real content, both themes. Start with
Button, Text input, and Card; add Dialog only if the pilot needs a modal.

### 1.2 Boundary

The core shares **behavior, accessibility, structure, and tokens** — not visual
sameness. A site may look different; it may not behave differently.

| Layer | Owns | Examples |
|---|---|---|
| **Core fixed** | Semantic names and mappings; neutral, functional, focus, selection, overlay values; type; space, size, radius, borders; elevation and motion; layout; icons; accessibility baseline; component contract | `color-text-primary`, `type-body`, `space-6`, focus ring, Dialog keyboard model |
| **Site theme** | One accent hue and its aliases; surface tint by remapping ratified neutral steps; composition; imagery; voice; documented appearance variants | Personal-series accent, hero layout, compact variant |
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
700 / 800 / 900 / 950`. The values are Tailwind CSS v4 (MIT), frozen in the
frontmatter. The display step is `500`; darker steps carry text on light
surfaces, lighter steps carry text on dark surfaces.

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
| `color-border-strong` | `gray-500` | `gray-500` | Interactive boundary; 3:1 |
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
| Latin | Inter (SIL OFL 1.1) | Variable; self-hosted Latin subset; preloaded |
| CJK and full-width symbols | Noto Sans SC (SIL OFL 1.1) | Optional per-site subset; never the full font |
| Monospace | system stack | Code and tabular numerals only |

Stack: `"Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`.

- Self-hosted `woff2` only; no font CDN.
- `font-display: swap` on every `@font-face`.
- Inter is the only preloaded font file.
- A Noto subset is optional, self-hosted, and split with `unicode-range`.
- Targets: Inter Latin subset ≤ 120 KB; any Noto subset ≤ 500 KB total.
- One sans stack; a site theme may not substitute another family.

### 4.2 Scale

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
| `type-body` | 16 | 1.7 | 400 | fixed |
| `type-body-sm` | 14 | 1.6 | 400 | fixed |
| `type-label` | 14 | 1.4 | 600 | fixed |
| `type-caption` | 12 | 1.5 | 400 | fixed |

- Weights: 400 and 600 only. No 700; font synthesis is allowed where 600 is
  unavailable.
- Tracking: zero everywhere, including headings.
- Casing: sentence case for headings, buttons, labels, navigation.
- Numerals: tabular figures in tables, metrics, and aligned columns.

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
shadow; layering comes from surface steps and `color-border`. Exactly one shadow:

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

**Validation widths** — 375, 390, 640, 768, 1024, 1280, 1536. Text-heavy
content holds a 60–75 character measure rather than filling the container.

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
Do/Don't. Each component lives in `components/<name>.md`;
`components/README.md` is the registry and template.

**State matrix:** default, hover (pointer platforms only), pressed (real
variant), focused (ratified focus treatment, both themes), disabled (not
opacity-only), selected (non-color cue), loading/error (layout-preserving,
announced, error pairs with text).

**Lifecycle:** Proposed → Draft → Pilot → Adopted → Deprecated. A component is
promoted only after passing the Definition of Done in a real pilot site. Only
the Owner moves a component from Draft.

**v1 scope:** the core defines this contract, not per-component specs. The pilot
starts with Button, Text input, and Card; add Dialog only if the pilot needs a
modal. No Toast/alert or Empty state spec until a site consumes them.

**Site-owned:** hero/marketing composition, media-player controls and cover
treatment, game board/HUD and game-specific feedback, illustration and imagery.

## 11. Open gaps

1. Bright light-theme accent fills (§3.6).
2. Focus on accent/functional subtle surfaces (§3.6).
3. Token export is manual: previews and the foundation page still transcribe
   values; a generator from this frontmatter is not built.
4. No CI: contrast checks are run by hand; no axe, visual regression, or token
   linter.
5. No site theme beyond the DabAZ personal series; the pilot is the missing
   evidence for whether the shared contract survives real content.

## 12. Decisions

Decision IDs, principles, rationale, changelog, and the site-theme contract
live in `GOVERNANCE.md`. The personal-series theme lives in `DabDesign.md`.
