---
version: "0.1.0"
name: "DabWave Design System"
description: >
  The core foundation contract for DabWave: ratified tokens and operative rules
  for color, typography, space and shape, elevation and motion, layout, icons,
  accessibility, and component standards. Governance and decision history live
  in DabDesign.md.
colors:
  # Neutral primitives — DAB-004 and DAB-016.
  # Eleven steps 50–950; white and black are separate primitives.
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
themes:
  # Semantic mappings — DAB-005 and DAB-006 (approved 2026-11-06). Action roles
  # (color-primary*) are per-site by DAB-003 and are not defined here.
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
    # Functional roles — DAB-015 (Tailwind green/amber/red references)
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
    # Functional roles — DAB-015 (Tailwind green/amber/red references)
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
  # Families — DAB-008 (approved 2026-11-07).
  text-family-sans: 'Inter, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
  text-family-mono: 'ui-monospace, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace'
  # Scale — DAB-009 (approved 2026-11-07). Zero tracking on every role.
  text-display:
    fontSize: "clamp(2.25rem, 1.5rem + 3vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: 0
  text-h1:
    fontSize: "clamp(1.875rem, 1.5rem + 1.5vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  text-h2:
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  text-h3:
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  text-h4:
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  text-body-lg:
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
  text-body:
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
  text-body-sm:
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  text-label:
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  text-caption:
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
spacing:
  # Spacing — DAB-010 (approved 2026-11-07). 4px grid with a 2px half-step.
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
  # Sizing — DAB-010 (approved 2026-11-07).
  size-icon-sm: 16px
  size-icon-md: 20px
  size-icon-lg: 24px
  size-icon-xl: 32px
  control-height-sm: 32px
  control-height-md: 40px
  control-height-lg: 48px
radius:
  # Radius — DAB-010 (approved 2026-11-07). Apple ladder, Owner request.
  radius-none: 0px
  radius-xs: 5px
  radius-sm: 8px
  radius-md: 11px
  radius-lg: 18px
  radius-pill: 9999px
  radius-full: 50%
border:
  # Borders — DAB-010 (approved 2026-11-07).
  border-width: 1px
elevation:
  # Elevation — DAB-011 (approved 2026-11-07). Flat at rest; one floating level.
  shadow-floating: "2px 4px 16px rgba(0, 0, 0, 0.16)"
motion:
  # Motion — DAB-011 (approved 2026-11-07).
  duration-fast: 100ms
  duration-base: 200ms
  duration-slow: 300ms
  easing-standard: "cubic-bezier(0, 0, 0.5, 1)"
  easing-linear: "linear"
breakpoints:
  # Breakpoints — DAB-012 (approved 2026-11-07). Minimum widths, mobile-first.
  breakpoint-sm: 640px
  breakpoint-md: 768px
  breakpoint-lg: 1024px
  breakpoint-xl: 1280px
  breakpoint-2xl: 1536px
containers:
  # Containers — DAB-012 (approved 2026-11-07). container-xl is the default.
  container-sm: 640px
  container-md: 768px
  container-lg: 1024px
  container-xl: 1200px
  container-2xl: 1280px
  container-fluid: 100%
---

# DabWave Core Foundation

**Status:** Core contract, extracted from `DabDesign.md` on 2026-11-09. Spec
version `0.1.0`.
**Authority:** This file is the normative **core contract**: the token values
and operative rules every DabWave site shares. `DabDesign.md` is the governance
and decision record — it owns *why* a value exists, the ADRs, the changelog, and
the decision process. Component contracts live in `components/`; site themes
live in their own documents. If this file and a decision record disagree, stop
and reconcile before implementing.
**Scope:** The core foundation ratified by DAB-001…DAB-016: neutral palette,
semantic roles, functional/focus/selection/overlay values, typography,
space/shape, elevation/motion, layout, icons, accessibility baseline, and
component standards.
**Not core:** a site's accent hue choice, surface-tint remapping, composition,
imagery, content voice, component implementations, framework choices, and
governance history. Those live in the site theme or in `DabDesign.md`.

## 0. How to use this file

1. **Sites and agents consume semantic tokens, never primitives.** `gray-500`
   is a primitive; `color-text-primary` is a semantic role. Components never
   reference `gray-*`, `accent-*`, or raw hex.
2. **The YAML frontmatter is the canonical token block.** Body tables explain
   intent and usage; they do not create new values. A value that is not in the
   frontmatter is not a standard.
3. **Do not fork a scale.** If no token fits, the answer is a decision through
   `DabDesign.md` §2.2 — not a local value.
4. **Reference, don't copy.** Site themes and component specs cite token names.
   They do not transcribe the eleven hue ramps or the neutral values.
5. **Component contracts** follow `components/README.md` and the lifecycle in
   `DabDesign.md` §9. No component is Adopted until its pilot passes §9.4.

## 1. Core boundary (DAB-001)

| Layer | Owns | Mutability |
|---|---|---|
| **Core foundation** (this file) | Semantic token names and both theme mappings; neutral, functional, focus, selection, and overlay values; type; space, size, radius, borders; elevation and motion; layout tokens; icon system; accessibility baseline; component standards | Fixed system-wide; changes only through a core decision |
| **Site theme** | One accent hue and its alias mapping in both modes; surface tint by remapping ratified neutral steps; composition; imagery; content voice within `DabDesign.md` §11 | Per site, within the whitelist |
| **Site-owned components** | Hero/marketing composition, media-player controls, game board and HUD, illustration and imagery | Site documents; not shared-layer components |

**Locked — a site theme may never override:** semantic token names · neutral
palette values · type scale · spacing scale · radius scale · border rules ·
component implementations · focus behavior · accessibility targets · elevation
and motion scales.

**Variance budget.** A site may differ in composition, imagery, and one accent.
It may not differ in type scale, spacing rhythm, radius language, focus, or
accessibility behavior. A project needing a wholly different system is a
separate brand forking the core — not a theme exception.

## 2. Token architecture

| Layer | Purpose | Example | Used directly in components |
|---|---|---|---|
| Primitive | Raw value, no UI meaning | `gray-500` | No |
| Semantic | Purpose within a theme | `color-text-primary` | Yes |
| Component | Repeated component decision semantic tokens cannot express | `button-height-md` | Only when documented in the component spec |

- Naming: role-based kebab-case with category prefixes `color-`, `text-`,
  `space-`, `radius-`, `shadow-`, `duration-`, `easing-`, `breakpoint-`,
  `container-`.
- Export naming: `dab-<token>` (for example `dab-color-text-primary`).
- Tokens must be expressible as CSS custom properties, native theme resources,
  or design-tool variables.
- Generated artifacts (CSS variables, JSON dictionaries, Tailwind configs) come
  from this frontmatter — never hand-edited.
- Names are stable. Renaming an approved token is a breaking change
  (`DabDesign.md` §2.4).

## 3. Color

### 3.1 Three families (DAB-003)

| Family | Scope | Values |
|---|---|---|
| Neutral ramp | All sites | Core-fixed, DAB-004/DAB-016 |
| Accent ramp | One per site theme | Site chooses one hue; aliases and contrast are core-governed, DAB-015 |
| Functional colors | All sites | Core-fixed ramp references, DAB-006/DAB-015 |

**Neutral-first.** Surfaces, text, and borders come from the neutral ramp.
Color carries action, state, and emphasis only. Accent never carries body text
or large neutral surfaces; functional colors never carry brand expression.

### 3.2 Neutral primitive (DAB-004, DAB-016)

Eleven steps `gray-50` … `gray-950`; `white` and `black` are separate
primitives, not steps. The ramp is pure neutral (C = 0) and identical on every
site. Values are adopted Tailwind Neutral, not regenerated.

Tint policy: a site theme's surface-tint override may only choose which
ratified neutral step serves which surface role. It may not introduce a tinted
or new hex value; that is a core decision.

### 3.3 Accent contract (DAB-003, DAB-015)

- One accent ramp per site: eleven steps `accent-50` … `accent-950`, selected
  from the twelve Tailwind hue ramps in §3.6.
- Components consume only five fill aliases — `color-primary`,
  `color-primary-hover`, `color-primary-pressed`, `color-primary-subtle`,
  `color-on-primary` — plus `color-primary-text` for links and inline
  emphasis.
- `color-primary` is the **fill** role; `color-primary-text` is the
  **link-safe text** role. They are not interchangeable: a bright fill cannot
  also clear 4.5:1 as link text on a light background.
- Light and dark map the same aliases onto different steps of the same hue.
  A contrast failure is fixed by remapping an alias, never by editing a value.
- A neutral site may map the five fill aliases onto neutral ink; its accent
  ramp still serves links and selection.
- Accent is not a status color and never replaces functional colors.

### 3.4 Functional roles (DAB-006, DAB-015)

Statuses: `success`, `warning`, `danger`. There is no `info` status —
informational messaging uses a neutral surface and neutral text.

Each status has four roles:

| Role | Purpose | Minimum |
|---|---|---|
| base | Icons, borders, default fills | 3:1 |
| strong | Status text on neutral surfaces | 4.5:1 |
| subtle | Alert and banner tint surface | Text on it is measured |
| on | Text/icon on its own base fill | 4.5:1 |

Values are Tailwind green/amber/red ramp references (DAB-015), not separately
generated hexes. `on-*` is used only on its own base fill. Status always pairs
with a non-color cue (§9.5).

### 3.5 Semantic roles and mappings (DAB-005)

| Role | Light | Dark | Requirement |
|---|---|---|---|
| `color-background` | `gray-50` | `gray-950` | — |
| `color-surface` | `white` | `gray-900` | — |
| `color-surface-secondary` | `gray-100` | `gray-800` | — |
| `color-text-primary` | `gray-900` | `gray-50` | 4.5:1 |
| `color-text-secondary` | `gray-700` | `gray-300` | 4.5:1 |
| `color-text-tertiary` | `gray-600` | `gray-400` | 4.5:1 |
| `color-text-inverse` | `white` | `gray-900` | 4.5:1 |
| `color-text-disabled` | `gray-400` | `gray-600` | Exempt, recorded |
| `color-border` | `gray-200` | `gray-800` | Decorative |
| `color-border-strong` | `gray-500` | `gray-500` | 3:1 |

Rules:

- Components consume semantic roles only; primitive steps never appear in
  component code.
- `color-border` never carries the only boundary of an interactive control;
  interactive boundaries use `color-border-strong`.
- `color-text-tertiary` is not a contrast escape hatch; hint and metadata text
  still meets 4.5:1.
- `color-text-disabled` is the only contrast-exempt text role, and a disabled
  control still needs a perceivable state beyond color.
- Role names are identical in light, dark, and site themes; components never
  branch on theme.
- A site theme may remap which ratified neutral step serves which surface
  role, but never rename roles, introduce values, or reorder the hierarchy.
  Every remap is re-measured and recorded in the site theme document.

### 3.6 Hue ramps (DAB-015, DAB-016)

Twelve Tailwind CSS v4 palettes: red, orange, amber, yellow, lime, green, teal,
cyan, blue, indigo, violet, fuchsia. Steps run `50`–`950`; `white` and `black`
are separate primitives. The display step is `500`; fill aliases and
link-safe text steps are selected by contrast in `palettes/catalog.md`.

A site theme selects one hue, records the fill and text steps, and cites the
catalog. It does not copy eleven hexes into its document.

### 3.7 Focus, selection, overlay (DAB-006, DAB-007)

- `color-focus` is `#4C89EF` in both themes, core-fixed, never accent-derived.
  Ring: 2px outline, 2px offset, element radius preserved; ≥ 3:1 against
  adjacent colors.
- Selection is an inverted neutral pair: `color-selection-bg` `gray-900` /
  `gray-50`, `color-selection-fg` `white` / `gray-900`. It is not an accent
  tint.
- `color-overlay` is `rgba(0, 0, 0, 0.50)` in both themes. It is the modal
  scrim only — dialogs, drawers, command palettes. Never hover/pressed, never a
  media backdrop.
- In dark theme the scrim signals modality only; a modal surface must also
  carry `color-border-strong` (or ratified elevation). Never raise scrim
  opacity to compensate.

### 3.8 Contrast thresholds (DAB-002)

| Content | Minimum |
|---|---|
| Body text and every text style below large-text size, including secondary and muted text | 4.5:1 |
| Large text (≥ 24px regular, ≥ 18.66px bold) | 3:1 |
| Non-text UI: interactive boundaries, informative icons, focus indicators | 3:1 |
| Disabled controls | Exempt, but recorded — never silently omitted |

Contrast is measured on the actual surface, in both themes. "Estimated ~"
ratios are documentation defects.

### 3.9 Open color gaps

- **Bright light-theme fills.** A bright `500` fill on a light background
  needs black text and a contrast border; the three-state hover/pressed model
  for that is not decided. Official site uses neutral ink; only colored sites
  are affected.
- **Focus on tinted surroundings.** `color-focus` is measured against the three
  neutral surfaces. A focused control on `accent-subtle` or a functional
  `-subtle` surface is not verified.

## 4. Typography

### 4.1 Families and loading (DAB-008)

| Role | Family | Notes |
|---|---|---|
| Latin | Inter (SIL OFL 1.1) | Variable, self-hosted Latin subset, preloaded |
| CJK and full-width symbols | Noto Sans SC (SIL OFL 1.1) | Optional per-site subset; never the full font |
| Monospace | system stack | No webfont; code and tabular numerals only |

Stack: `"Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`.

Loading rules:

- Self-hosted `woff2` only; no public CDN.
- `font-display: swap` on every `@font-face`.
- Inter is the only preloaded font file.
- A Noto subset is optional, self-hosted, and split with `unicode-range`.
- Targets: Inter Latin subset ≤ 120 KB; any Noto subset ≤ 500 KB total.
- One sans stack only; a site theme may not substitute another family.
- Components never declare `font-family`; they inherit the token.

### 4.2 Type scale (DAB-009)

16px base; integer sizes 12/14/16/18/20/24/30/36/48. Body and below fixed;
`display` and `h1` fluid via `clamp()`.

| Token | Size | Line height | Weight | Behavior |
|---|---:|---:|---:|---|
| `text-display` | 36 → 48 | 1.1 | 600 | fluid |
| `text-h1` | 30 → 36 | 1.2 | 600 | fluid |
| `text-h2` | 24 | 1.2 | 600 | fixed |
| `text-h3` | 20 | 1.3 | 600 | fixed |
| `text-h4` | 18 | 1.4 | 600 | fixed |
| `text-body-lg` | 18 | 1.7 | 400 | fixed |
| `text-body` | 16 | 1.7 | 400 | fixed |
| `text-body-sm` | 14 | 1.6 | 400 | fixed |
| `text-label` | 14 | 1.4 | 600 | fixed |
| `text-caption` | 12 | 1.5 | 400 | fixed |

- Weights: 400 and 600 only. No 700. Font synthesis is allowed where 600 is
  unavailable.
- Tracking: zero everywhere, including headings.
- Casing: sentence case for headings, buttons, labels, navigation.
- Numerals: tabular figures in tables, metrics, and aligned numeric columns.

## 5. Space, sizing, radius, borders

### 5.1 Spacing (DAB-010)

4px grid with a 2px half-step; fourteen steps:

`space-0` 0 · `space-0-5` 2 · `space-1` 4 · `space-2` 8 · `space-3` 12 ·
`space-4` 16 · `space-5` 20 · `space-6` 24 · `space-8` 32 · `space-10` 40 ·
`space-12` 48 · `space-16` 64 · `space-20` 80 · `space-24` 96.

Typical ranges: compact control padding 8–12 · standard control padding 12–16 ·
card padding 16–24 · section gaps 32–64 · page rhythm 64–96. No free values.

### 5.2 Controls and icons (DAB-010)

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
reach a 44×44 effective target — use `lg` or provide the missing hit area.
Icon artwork is never the hit target.

### 5.3 Radius — Apple ladder (DAB-010)

| Token | Value | Core use |
|---|---:|---|
| `radius-none` | 0 | Full-bleed, deliberate square edges |
| `radius-xs` | 5 | Compact inline chips (rare) |
| `radius-sm` | 8 | Default controls — inputs, selects; most buttons before the current trial |
| `radius-md` | 11 | Capsules, secondary chips, soft buttons |
| `radius-lg` | 18 | Cards, panels, popovers, inline imagery |
| `radius-pill` | 9999px | Primary CTAs and search — deliberate, never default |
| `radius-full` | 50% | Circular icon buttons and avatars |

Nested surfaces never take a larger radius than their container. Radius never
animates. `radius-pill` is an action signal, not a default for every button or
card.

**Component-level deviation.** The Button Draft currently trials `radius-lg`
18 at the Owner's request (2026-11-09); at the 32px `sm` height that clamps to
16px and renders as a pill. This is a component choice, not a change to the
core ladder; the final choice is pending.

### 5.4 Borders (DAB-010)

1px default. 2px only for the focus outline and validated selected outlines.
No 0.5px borders — device-pixel snapping makes them inconsistent.

## 6. Elevation and motion (DAB-011)

**Flat at rest.** Cards, buttons, navigation, and every resting surface carry
no shadow; layering comes from surface steps and `color-border`. Exactly one
shadow token exists:

`shadow-floating: 2px 4px 16px rgba(0, 0, 0, 0.16)`

Use it only for the hover lift of a whole-surface interactive card and for
floating layers (dialog, popover, dropdown, toast). In dark theme floating
layers must also carry `color-border-strong`; the shadow is never the only
separation cue.

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
`prefers-reduced-motion: reduce`, transform/scale/translate/parallax/auto-play
are disabled; color and opacity changes remain at `duration-fast`;
`shadow-floating` appears instantly; focus visibility is never reduced.

## 7. Layout (DAB-012)

**Breakpoints** — minimum widths, mobile-first: `640` `sm`, `768` `md`, `1024`
`lg`, `1280` `xl`, `1536` `2xl`.

**Containers** — `width: 100%` plus `max-width` and auto inline margins:
`container-sm` 640 · `container-md` 768 · `container-lg` 1024 · `container-xl`
1200 (default) · `container-2xl` 1280 · `container-fluid` 100%.

**Gutters** — below 640: `space-4` 16; 640–1023: `space-6` 24; 1024+: `space-8`
32. Gutters are inner container padding, never a second page-level layer.

**Grid** — 12 columns available for broad desktop compositions, not imposed
everywhere. Default gap `space-6` 24 on desktop, `space-4` 16 on narrow
screens. Cards reflow by minimum usable width, not fixed desktop column counts.
Full-bleed backgrounds may extend past the container; content stays aligned.

**Validation widths** — 375, 390, 640, 768, 1024, 1280, 1536. Breakpoints are
applied when content needs them, not merely to change styles at each step.
Text-heavy content holds a 60–75 character measure rather than filling the
container.

## 8. Icons (DAB-014)

- Tabler Icons, outline only, MIT. No filled/duotone, emoji, hand-drawn paths,
  or a second family.
- 24×24 viewBox, stroke 2, round caps and joins, `fill: none`,
  `stroke: currentColor`.
- Sizes 16 / 20 / 24 / 32; grid and stroke scale together, so stroke width is
  never overridden per size.
- Delivery: inline SVG or a self-hosted sprite. No icon font, no CDN. Bundled
  icons carry the Tabler MIT notice.
- Icons inherit `currentColor`; there is no separate icon color token.
- Decorative icons are `aria-hidden="true"`. Meaningful icons need a text
  alternative. Icon-only controls require `aria-label` and a 44×44 effective
  target. An icon never replaces a visible primary-action label unless the
  meaning is universally unambiguous and an accessible name exists.

## 9. Accessibility baseline (DAB-002)

Target: **WCAG 2.2 Level AA**. Named opt-ins: 44×44 effective targets and the
2px outline + 2px offset focus geometry (SC 2.4.13 adopted as house policy).
Blanket AAA is a non-goal.

- Contrast thresholds: §3.8.
- Focus: every keyboard-focusable element has a visible 2px outline with 2px
  offset in `color-focus`, keeping the element's radius, ≥ 3:1 against adjacent
  colors. The outline is never removed without an approved replacement.
- Keyboard and semantics: native elements where they exist; accessible names
  for icon-only controls; logical focus order; expected keyboard interactions
  per component. Interactive behavior is not implemented on non-semantic
  elements when a native element fits.
- Target size: 44×44 effective on touch surfaces; icon artwork may be smaller
  than its target. Exceptions are documented.
- Non-color cues: status, selection, and errors always carry text, icon, or
  shape in addition to color.
- Per-component checklist: role · keyboard map · accessible name · focus order ·
  contrast on real surfaces · every ratified theme · screen-reader
  announcement of dynamic states.
- Motion and cognition: `prefers-reduced-motion` respected; no flashing,
  parallax, or auto-play without controls; no essential task depends on timing
  or memory.

## 10. Component contract and scope (DAB-013, §9)

A component entry includes name, purpose, anatomy (background, text, border,
typography, padding, height, radius, shadow), variants, sizes, state matrix,
accessibility (role, keyboard, accessible name, focus), and component-specific
Do/Don't. Each component lives in `components/<name>.md`;
`components/README.md` is the registry and template.

**State matrix standard:** default, hover (pointer platforms only), pressed
(real variant), focused (ratified focus treatment, both themes), disabled (not
opacity-only), selected (non-color cue), loading/error (layout-preserving,
announced, error pairs with text).

**Lifecycle:** Proposed → Draft → Pilot → Adopted → Deprecated. A component is
promoted only after passing the §9.4 Definition of Done in a real pilot site.
Only the Owner moves a component from Draft.

**Current state:** six Drafts (Button, Text input, Checkbox/radio/switch,
Select, Card, Dialog); Toast/alert and Empty state not started; no component is
Adopted. Single-page gallery: `components/preview/gallery.html`.

**Site-owned, not shared-layer:** hero/marketing composition, media-player
controls and cover treatment, game board/HUD and game-specific feedback,
illustration and imagery. Navigation, footer, tabs, table, pagination, tooltip,
badge, avatar, and skeleton are deferred to a wave-2 scope decision.

## 11. Open core gaps

1. Bright light-theme accent fills (§3.9).
2. Focus on accent/functional subtle surfaces (§3.9).
3. Button radius trial: `radius-lg` 18 is provisional; final choice pending.
4. Token export is manual: foundation and previews transcribe values; a
   generator from this frontmatter is not built.
5. No CI: contrast checks are run by hand; no axe, visual regression, or token
   linter.
6. No site theme documents yet; the first pilot is the missing evidence for
   whether the shared component contract survives real product use.

## 12. Decision traceability

| Decision | Core area | Section |
|---|---|---|
| DAB-001 | Core/site boundary | §1 |
| DAB-002 | Accessibility baseline | §9 |
| DAB-003 | Color families and accent contract | §3 |
| DAB-004 | Neutral palette | §3.2 |
| DAB-005 | Semantic roles and mappings | §3.5 |
| DAB-006 | Functional roles, focus, selection | §3.4, §3.7 |
| DAB-007 | Overlay | §3.7 |
| DAB-008 | Typefaces and loading | §4.1 |
| DAB-009 | Type scale and typesetting | §4.2 |
| DAB-010 | Space, sizing, radius, borders | §5 |
| DAB-011 | Elevation and motion | §6 |
| DAB-012 | Layout | §7 |
| DAB-013 | Component scope and lifecycle | §10 |
| DAB-014 | Icons | §8 |
| DAB-015 | Tailwind hue ramps | §3.3, §3.6 |
| DAB-016 | Ramp endpoints and primitives | §3.2, §3.6 |

## 13. Non-negotiables

- No raw hex, px, or ms value where a ratified token exists.
- No primitive token (`gray-*`, `accent-*`) in component code; semantic roles
  only.
- No fork of a ratified scale into a second scale.
- No theme branch inside a component; roles resolve per theme.
- No second sans family, no font CDN, no icon font, no second icon family.
- No shadow at rest; only the one `shadow-floating` token, in its two approved
  uses.
- No radius or layout animation.
- No 0.5px borders.
- No component promotion without a pilot and the §9.4 checklist.
- No change to a core value without a decision through `DabDesign.md` §2.2 and
  a changelog entry.
