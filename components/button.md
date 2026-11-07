# Button

**Status:** Draft (2026-11-07) — awaiting Owner review; not Adopted.
**Pilot site:** none yet.
**Depends on:** DAB-002 (focus, contrast), DAB-003 (action aliases), DAB-006
(functional values), DAB-009 (label type), DAB-010 (sizes, radius, borders),
DAB-011 (motion).

## Purpose

Triggers an action in the current context. A button is never navigation; use a
link for destinations. Within one view or section there is at most one primary
button.

## Anatomy

- Root: native `<button>`. Default `type="button"`; `type="submit"` only inside
  a form.
- Content: a required label, an optional leading icon, an optional trailing
  icon. Icons are pending the icon-set decision and are not specified here.
- Border is always 1px so hover and pressed states never shift layout; unused
  borders are transparent.
- No shadow at rest. No shadow on hover or press (DAB-011: the one floating
  shadow belongs to floating layers, not buttons).

| Size | Height | Padding inline | Gap | Radius | Min width | Label type |
|---|---:|---:|---:|---:|---:|---|
| `sm` | `control-height-sm` 32 | `space-3` 12 | `space-2` 8 | `radius-sm` 8 | 44 | `text-label` |
| `md` (default) | `control-height-md` 40 | `space-4` 16 | `space-2` 8 | `radius-sm` 8 | 44 | `text-label` |
| `lg` | `control-height-lg` 48 | `space-5` 20 | `space-2` 8 | `radius-sm` 8 | 44 | `text-label` |

All sizes use `text-label` (14 / 1.4 / 600). The scale has no 16px semibold
role; do not compose one locally. If large buttons need a larger label, that is
a type-scale decision, not a component override.

## Variants

| Variant | Background | Text | Border | Use |
|---|---|---|---|---|
| `primary` | `color-primary` | `color-on-primary` | transparent | The one main action |
| `secondary` | `color-surface` | `color-text-primary` | `color-border-strong` | Alternative action |
| `ghost` | transparent | `color-text-primary` | transparent | Quiet action in dense UI |
| `danger` | `color-surface` | `color-danger-strong` | `color-danger` | Destructive action, secondary weight |

`color-primary*` resolves per site theme. A site with a neutral identity may
map the action aliases onto ink (DAB-003); the Button does not branch on it.

## State matrix (§9.2)

| State | `primary` | `secondary` | `ghost` | `danger` |
|---|---|---|---|---|
| Default | bg `color-primary`, text `color-on-primary` | bg `color-surface`, text `color-text-primary`, border `color-border-strong` | transparent, text `color-text-primary` | bg `color-surface`, text `color-danger-strong`, border `color-danger` |
| Hover (pointer only) | bg `color-primary-hover` | bg `color-surface-secondary` | bg `color-surface-secondary` | bg `color-danger-subtle` |
| Pressed | bg `color-primary-pressed` | bg `color-surface-secondary`, border `color-text-primary` | bg `color-surface-secondary`, border `color-border-strong` | bg `color-danger-subtle`, border `color-danger-strong` |
| Focused | `outline: 2px solid color-focus`, `outline-offset: 2px`; keeps the button radius | same | same | same |
| Disabled | bg `color-surface-secondary`, text `color-text-disabled`, border `color-border` | same | same | same |
| Loading | variant colors preserved; label preserved; `aria-busy="true"`; interaction blocked; 16px spinner in `currentColor` | same | same | same |

Hover is applied only under `@media (hover: hover)`; touch devices never get a
sticky hover state. Pressed is a color and border change, never a scale
(DAB-011).

**Dual-use note.** Two pressed borders reuse semantic roles at the component
definition site, as §4.2 permits: `secondary` uses the text role
`color-text-primary` as an emphasized border, and `danger` uses the text role
`color-danger-strong`. No new value is introduced.

**Disabled is not opacity.** All variants collapse to the same disabled
treatment: `color-surface-secondary` fill, `color-text-disabled` label,
`color-border` border. The contrast exemption is recorded in §4.7/§10.1; the
state remains perceivable.

**Loading.** The accessible name does not change. The spinner is a functional
indeterminate indicator — a documented exception to the no-infinite-animation
rule — rotating at 1000ms `linear`. Under `prefers-reduced-motion: reduce` the
spinner is static and only `aria-busy` communicates progress.

## Tokens used

Semantic only; no primitive step and no site accent step appears here.

- Action: `color-primary`, `color-primary-hover`, `color-primary-pressed`,
  `color-on-primary`
- Neutral: `color-surface`, `color-surface-secondary`, `color-text-primary`,
  `color-text-disabled`, `color-border`, `color-border-strong`
- Functional: `color-danger`, `color-danger-strong`, `color-danger-subtle`
- Focus: `color-focus`
- Shape and size: `radius-sm`, `border-width`, `control-height-sm|md|lg`
- Space: `space-2`, `space-3`, `space-4`, `space-5`
- Type: `text-label`
- Motion: `duration-fast`, `easing-linear`

No component tokens are required. If one becomes necessary, it is proposed
through §2.2 before use.

## Accessibility

| Requirement | Rule |
|---|---|
| Role | Native `button`; never a `div` with a click handler |
| Accessible name | Visible label. Icon-only buttons require `aria-label`; the icon set is pending, so icon-only buttons are not yet specified |
| Keyboard | Native Enter and Space; no custom key handling |
| Focus | Visible 2px `color-focus` ring, 2px offset, never removed |
| Target size | 44 × 44 effective minimum. Visual heights are 32/40/48 and min-width is 44; on coarse pointers `sm` expands its hit area by 6px vertically per side and `md` by 2px, so the target reaches 44 without changing the visual height |
| Disabled | Native `disabled` when the action is simply unavailable. `aria-disabled="true"` plus focusability when the user must discover why; activation is blocked in script. Never opacity-only |
| Loading | `aria-busy="true"`; label unchanged; interaction blocked; completion is announced by the resulting content or status message, not by a second live region inside the button |
| Labels | Sentence case (DAB-009); English, Simplified Chinese, and mixed labels must all wrap without clipping |
| Contrast | `color-on-primary` on `color-primary`/`-hover`/`-pressed` follows the site ramp contract; `danger-strong` on `surface` and on `danger-subtle` is measured in §4.7; `border-strong` and `danger` meet 3:1 |

## Do / Don't

**Do**

- Use one `primary` button per view or section.
- Use `danger` for destructive actions and confirm irreversible ones.
- Keep the visible label short and specific; the label is the accessible name.
- Keep the focus ring exactly as ratified.
- Use `secondary` or `ghost` when the action is not the main one.

**Don't**

- Don't use a button for navigation.
- Don't use `ghost` for the main action.
- Don't stack two `primary` buttons.
- Don't remove or restyle the focus outline.
- Don't use 700 weight, all-caps, or a local font size.
- Don't add a shadow or a press scale.
- Don't use `color-primary-subtle` as a button fill; it is a tint surface, not
  an action surface.

## Open questions

1. **Icon set.** Icon-only buttons, leading/trailing icons, and stroke width
   wait on a system icon decision. Until then this spec covers text buttons.
2. **Solid destructive variant.** A solid `danger` fill needs a ratified
   pressed value; `color-danger-strong` is a text role, not a fill. Until a
   functional pressed role exists, destructive actions use the outlined
   `danger` variant.
3. **Focus on tinted surroundings.** `color-focus` was measured against the
   three neutral surfaces only. A focused button placed directly on an
   accent-subtle or functional-subtle surface is not yet verified; do not do it
   until measured.
4. **Pill modifier.** DAB-010 allows `radius-pill` for primary CTAs. Whether
   the pill shape is a Button modifier or a site-composition concern is not
   decided. The base Button stays at `radius-sm`.
5. **Toggle button.** An `aria-pressed` toggle variant is not specified.
6. **Spinner token.** The 1000ms spinner loop is a component-level functional
   value; whether to add a motion token for indeterminate progress is open.

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
