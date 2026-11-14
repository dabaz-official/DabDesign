# Checkbox / radio / switch

**Status:** Draft (2026-11-08) — awaiting Owner review; not Adopted.
**Preview:** `preview/checkbox-radio-switch.html` (Draft specimen).
**Pilot site:** none yet.
**Depends on:** DAB-002 (focus, contrast), DAB-003 (action aliases), DAB-005
(semantic roles), DAB-009 (type), DAB-010 (sizes, radius, borders), DAB-011
(motion), DAB-014 (icons), DAB-015 (danger values).

## Purpose

Three selection controls with distinct semantics:

- **Checkbox** — zero or more options; supports an indeterminate state.
- **Radio** — exactly one option from a group.
- **Switch** — an immediate on/off setting; it takes effect without a separate
  submit.

They share anatomy, sizes, focus, error, and target-size rules. They differ in
shape, state cue, and group semantics.

## Anatomy

- Group: `<fieldset>` + `<legend>` for checkbox and radio groups. A switch is a
  single row and needs no fieldset.
- Row: control, label, optional description. Label sits to the **right** of the
  control; `space-2` between control and label.
- Label: `text-body` (16 / 1.7), `color-text-primary`; it is part of the hit
  area.
- Description: `text-body-sm` (14 / 1.6), `color-text-secondary`, aligned with
  the label text, `space-1` below the label.
- Switch thumb: off `color-text-tertiary`, on `color-surface`; 1px
  `color-border` border. The off fill gives the thumb contrast against
  `surface-secondary` in both themes. The thumb sits 2px from the track's
  outer edge on the leading side — left when off, right when on — and is
  vertically centered, so the three visual gaps match.
- Checkbox check uses the Tabler `check` path; the radio dot and the
  indeterminate dash are shape cues, not separate icons.
- Error: below the row or group, `text-body-sm`, `color-danger-strong` + icon;
  never color alone.
- Group legend: `text-label` (14 / 1.4 / 600), `color-text-primary`,
  `space-3` below.
- Group rows stack with `space-3` (12); each row has a 44×44 effective target.
- No shadow.

| Size | Checkbox / radio | Switch track | Thumb | Label | Description |
|---|---:|---|---:|---|---|
| `sm` | 16 | 40 × 20 | 16 | `text-body` | `text-body-sm` |
| `md` (default) | 20 | 48 × 24 | 20 | `text-body` | `text-body-sm` |
| `lg` | 24 | 56 × 28 | 24 | `text-body` | `text-body-sm` |

Checkbox uses `radius-xs` 5; radio uses `radius-full` (50%); the switch track
uses `radius-pill` (9999px), and the thumb uses `radius-full`. The switch
track and thumb dimensions are component-level values; see open questions.

## Variants

| Variant | Native element | Semantics |
|---|---|---|
| `checkbox` | `<input type="checkbox">` | Multi-select; supports `indeterminate` |
| `radio` | `<input type="radio">` | One per named group; native arrow-key navigation |
| `switch` | `<input type="checkbox" role="switch">` | Immediate on/off setting |

## State matrix (§9.2)

| State | Checkbox / radio | Switch |
|---|---|---|
| Default | background `color-surface`, border `color-border-strong`, label `color-text-primary` | track `color-surface-secondary`, border `color-border-strong`, thumb `color-text-tertiary` + `color-border` border |
| Hover | border `color-text-tertiary` (documented dual use) | border `color-text-tertiary` |
| Focused | 2px `color-focus` ring, 2px offset, element radius preserved | same |
| Checked / on | fill `color-primary`, border `color-primary`; checkbox check or radio dot in `color-on-primary` | track `color-primary`, border `color-primary`, thumb `color-surface` + `color-border` border |
| Indeterminate | checkbox fill `color-primary`, border `color-primary`, horizontal dash in `color-on-primary` | — |
| Disabled | background `color-surface-secondary`, border `color-border`, label `color-text-disabled`, glyph `color-text-disabled` | track `color-surface-secondary`, thumb `color-text-disabled` + `color-border` border, label `color-text-disabled` |
| Error | border `color-danger`, label `color-text-primary`, error text `color-danger-strong` + icon | same |

Hover and focus transitions use `duration-fast` and `easing-linear`. Selected
state never relies on color alone: the check, dot, or thumb position carries
the state.

Disabled selected state keeps the check/dot/thumb position visible but muted
with `color-text-disabled`; it is never opacity-only.

## Tokens used

- Surface and text: `color-surface`, `color-surface-secondary`,
  `color-text-primary`, `color-text-secondary`, `color-text-disabled`
- Action: `color-primary`, `color-on-primary`
- Boundaries and error: `color-border`, `color-border-strong`, `color-danger`,
  `color-danger-strong`
- Focus: `color-focus`
- Shape: `radius-xs`, `radius-full`, `radius-pill`, `border-width`
- Space: `space-1`, `space-2`, `space-3`
- Type: `text-label`, `text-body`, `text-body-sm`, `text-caption`
- Motion: `duration-fast`, `easing-linear`

No component tokens are required beyond the switch dimensions listed in the
size table. If those become tokens, they are proposed through §2.2.

## Accessibility

| Requirement | Rule |
|---|---|
| Group semantics | Checkbox and radio groups use `<fieldset>` + `<legend>`. The legend is the accessible group name |
| Label | Each control has a visible `<label>`; the label is part of the 44×44 hit area |
| Keyboard — checkbox | Native Space toggles; Tab moves between controls |
| Keyboard — radio | Native arrow keys move and select within the group; Tab enters and leaves the group |
| Keyboard — switch | Native Space toggles; the control is focusable and announced as a switch |
| Checked state | Native `checked`; radio groups share a `name`; switch exposes `aria-checked` through `role="switch"` |
| Indeterminate | Set the DOM `indeterminate` property; the mixed state is announced and the dash is visible |
| Required | Native `required`; a `*` after the group legend, plus one “* Required” legend at the top of the form |
| Error | `aria-invalid="true"` on the affected control(s); `aria-describedby` points to the error id; error text and icon are visible |
| Target size | 44×44 effective per row; the control artwork is 16/20/24 but the label and row padding provide the target |
| Disabled | Native `disabled`; checkbox and radio have no readonly state — use disabled and explain why in helper text |
| Non-color cues | Check, dot, dash, thumb position, and text; never color alone (§10.5) |
| Focus | 2px `color-focus` ring, 2px offset; never removed |
| Labels | English, Simplified Chinese, and mixed labels must wrap without clipping |

## Do / Don't

**Do**

- Use checkboxes for independent options, radios for one-of-many, switches for
  immediate settings.
- Put the label to the right and make the label part of the hit area.
- Use the indeterminate state only for a parent checkbox whose children are
  partially selected.
- Show group errors below the group with text and an icon.

**Don't**

- Don't use a switch for a value that needs a Save action.
- Don't use radio buttons for more than about seven options; use a Select.
- Don't use color alone to show selection.
- Don't use a checkbox where a radio expresses one-of-many.
- Don't remove the focus ring.
- Don't use opacity-only disabled states.

## Open questions

1. **Switch dimensions.** Track and thumb sizes are component-level values in
   the size table; whether to tokenize them is open.
2. **Switch motion.** The thumb travel duration/easing is not specified.
3. **Readonly.** Checkbox and radio have no native readonly; disabled plus
   helper text is the current answer.
4. **Indeterminate announcement.** The exact screen-reader wording for the
   mixed state is not specified.
5. **Group-level error summary.** Field-level errors are specified; a summary
   for long groups is not.
6. **Switch label position.** Right-side labels are specified; a stacked label
   is not.

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
