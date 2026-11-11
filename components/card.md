# Card

**Status:** Draft (2026-11-08) — awaiting Owner review; not Adopted.
**Preview:** `preview/card.html` (Draft specimen).
**Pilot site:** none yet.
**Depends on:** DAB-001 (core/site split), DAB-005 (semantic roles), DAB-009
(type), DAB-010 (spacing, radius, borders), DAB-011 (elevation, motion, hover
lift), DAB-012 (layout), DAB-014 (icons, when a media slot carries one).

## Purpose

Groups related content into one bounded surface. A card organizes; it does not
decorate. Two patterns share the same surface:

- **Static card** — a container for content and controls. It never lifts.
- **Interactive card** — the whole surface is one navigation target. It lifts
  on hover, and it contains no nested interactive elements.

Cards do not own page composition: grids, columns, and gaps belong to the site
theme layer (§1.6). The card owns its surface, border, radius, internal
spacing, and the hover lift contract.

## Anatomy

| Part | Rule |
|---|---|
| Container | `color-surface`; 1px `color-border`; `radius-lg` 18; **no shadow at rest** |
| Padding | `space-6` 24 (comfortable, default) or `space-4` 16 (compact) |
| Media (optional) | Full-bleed at the top; top corners `radius-lg`, bottom corners 0; no padding around it. In a media card, the body fills the remaining height and centers its text vertically |
| Eyebrow (optional) | `text-caption` 12 / 1.5, `color-text-tertiary` |
| Title | `text-h4` 18 / 600 / 1.4, `color-text-primary`, zero tracking |
| Body | `text-body` 16 / 1.7, `color-text-secondary` |
| Meta (optional) | `text-caption` 12 / 1.5, `color-text-tertiary` |
| Footer (optional) | `space-4` above; optional 1px `color-border` divider; actions are Buttons or links, not card-level behavior |
| Nested surfaces | Never exceed the container radius. A media or inset panel inside the padding uses `radius-md` 11 at most |

Internal rhythm: eyebrow → title `space-1`; title → body `space-2`; body →
footer `space-4`. Text line length is capped by the composition, not the card.

The title's heading level comes from the page outline (`h2`–`h6`); `text-h4` is
the visual role, not the semantic level.

## Variants

| Variant | Element | Behavior |
|---|---|---|
| `static` (default) | `<article>` or `<div>` | Container only; no hover lift, no shadow |
| `interactive` | a single `<a href>` wrapping the card content | Whole surface navigates; `scale(1.01)` + `shadow-floating` on hover |
| `media` | either variant + top media slot | Media is content; it never carries the interaction. The body fills the remaining height and centers its text vertically |

There is no whole-surface `<button>` card: a button's content model cannot
validly contain headings and block content. An in-page action uses a static
card with a Button in the footer.

## Sizes

Card is not a control; it has no 32/40/48 height. Density is the only size axis.

| Density | Padding | Title | Body | Meta |
|---|---|---:|---|---|
| `comfortable` (default) | `space-6` 24 | `text-h4` | `text-body` | `text-caption` |
| `compact` | `space-4` 16 | `text-h4` | `text-body` | `text-caption` |

## State matrix (§9.2)

| State | Static card | Interactive card |
|---|---|---|
| Default | surface, 1px border, `radius-lg`, no shadow | same |
| Hover | — | `transform: scale(1.01)` + `shadow-floating`, `duration-slow`, `easing-standard`; pointer platforms only |
| Pressed | — | Background `color-surface-secondary`, border `color-border-strong`, **no scale**, `duration-fast`, `easing-linear` |
| Focused | — | 2px `color-focus` outline, 2px offset, card radius preserved |
| Disabled | — | Not defined. If the destination is unavailable, render a static card; never an opacity-only disabled link |
| Selected | — | Not defined. Selectable cards are an open question, not a silent variant |
| Loading / Error | Content-level; the card adds no state | same |

The hover lift is the only transform allowed in a resting UI (DAB-011). It is
forbidden on static cards, buttons, inputs, and navigation. Radius never
animates. Under `prefers-reduced-motion: reduce`, the transform is disabled and
`shadow-floating` appears instantly; color and border changes remain at
`duration-fast`.

## Tokens used

- Surface and text: `color-surface`, `color-surface-secondary`,
  `color-text-primary`, `color-text-secondary`, `color-text-tertiary`
- Boundaries: `color-border`, `color-border-strong`
- Focus: `color-focus`
- Shape: `radius-lg`, `radius-md`, `border-width`
- Space: `space-1`, `space-2`, `space-4`, `space-6`
- Type: `text-h4`, `text-body`, `text-caption`
- Elevation: `shadow-floating`
- Motion: `duration-fast`, `duration-slow`, `easing-linear`, `easing-standard`

No component tokens are required. If a card-specific dimension is ever needed,
it is proposed through §2.2.

## Accessibility

| Requirement | Rule |
|---|---|
| Static semantics | Use `<article>` for self-contained content or a plain `<div>` for visual grouping; do not add `role="region"` unless the card has an accessible name |
| Heading | The title is a real heading at the level the page outline requires; never a styled `div` |
| Interactive semantics | One `<a href>` wraps the whole card; the accessible name is the card title |
| No nested targets | An interactive card contains no links, buttons, inputs, or other focusable content. If the card needs its own controls, use a static card |
| Keyboard | The interactive card is a single tab stop; Enter activates the link; the whole surface is the target |
| Focus | 2px `color-focus` outline, 2px offset, visible in both themes; never removed |
| Media | Meaningful images carry `alt`; decorative media is `aria-hidden="true"` or `alt=""` |
| Target size | The entire card surface is the target; it exceeds the 44×44 effective target |
| Non-color cues | Link semantics, focus ring, and pressed background; the lift is never the only cue (§10.5) |
| Reduced motion | No scale, translate, or parallax; shadow appears instantly; color feedback stays |
| Localization | Titles and body copy must wrap in English, Simplified Chinese, and mixed text without clipping |

## Do / Don't

**Do**

- Use one card per item in a grid; let the site theme own columns and gaps.
- Keep the title short and put supporting detail in the body or meta line.
- Use an interactive card only when the whole surface is the single
  destination.
- Put controls in the footer of a static card.
- Keep the resting card flat; the border and surface step provide separation.

**Don't**

- Don't add a shadow at rest; `shadow-floating` is for hover and floating
  layers only.
- Don't nest an interactive card inside another card or link.
- Don't place buttons or links inside an interactive card.
- Don't animate radius, padding, or layout.
- Don't use hover lift on a card that is not fully clickable.
- Don't use a card as a substitute for a Button or a form control.

## Open questions

1. **Grid composition.** Columns, gaps, and breakpoint reflow belong to the
   site theme; the card does not define a grid.
2. **Media treatment.** Aspect ratio, cropping, and art direction are
   site-owned; only the top-corner radius and full-bleed rule are fixed here.
3. **Selectable card.** A card that acts as a radio or checkbox option is not
   specified; it needs selected-state and group semantics.
4. **Horizontal / side-media variant.** Not specified.
5. **Loading skeleton.** Deferred to the wave-2 skeleton scope.
6. **Compact typography.** Compact changes padding only; whether the title
   should step down to `text-label` is open.

## Definition of Done (§9.4)

- [x] Uses only approved semantic and component tokens.
- [ ] Every state in the matrix implemented and visually verified.
- [ ] Focus visible in every ratified theme; keyboard operation verified.
- [ ] Contrast measured on the actual rendered surfaces.
- [ ] English, Chinese, and mixed-language labels verified.
- [ ] Light and dark themes verified at all validation widths (§8.3).
- [x] Frontmatter and body specification agree (no component tokens added).
- [ ] Accessibility checklist (§10.6) passes.

Implementation and pilot are intentionally pending; this file is a token-level
contract, not code (§1.5).
