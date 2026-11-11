# Select

**Status:** Draft (2026-11-08) — awaiting Owner review; not Adopted.
**Preview:** `preview/select.html` (Draft specimen).
**Pilot site:** none yet.
**Depends on:** DAB-002 (focus, contrast), DAB-005 (semantic roles), DAB-009
(type), DAB-010 (sizes, radius, borders), DAB-011 (motion), DAB-014 (icons),
DAB-015 (danger values).

## Purpose

Chooses one option from a known list. The baseline is the native `<select>`,
which keeps native keyboard behavior, mobile pickers, and screen-reader
support. Multi-select, search/filter, and a fully custom listbox are out of
scope.

## Anatomy

- Field wrapper: label, control, optional helper text, error text.
- Label: top-aligned, always visible, `text-label` (14 / 1.4 / 600),
  `color-text-primary`, `space-2` below.
- Required marker: `*` after the label, `aria-hidden="true"`; native
  `required` carries the semantics; one “* Required” legend at the top of the
  form.
- Control: native `<select>`; `width: 100%`; 1px border; `radius-sm` 8;
  background `color-surface`; text `color-text-primary`.
- Chevron: Tabler `chevron-down`, `size-icon-sm` 16 for `sm`/`md`,
  `size-icon-md` 20 for `lg`; `color-text-tertiary`; `aria-hidden="true"`;
  `pointer-events: none`; positioned at the inline end.
- Padding: inline start `space-3` 12 / `space-4` 16 / `space-5` 20; inline end
  adds the chevron width plus `space-2` so the value never sits under it.
- Placeholder: a disabled, selected first option with an empty value, text
  `color-text-tertiary`. It never replaces the label.
- Helper or error text: `text-body-sm`, `space-1` below. Error text is
  `color-danger-strong` with an icon.
- No shadow.

| Size | Height | Padding start | Text | Radius | Chevron |
|---|---:|---:|---|---:|---:|
| `sm` | `control-height-sm` 32 | `space-3` 12 | `text-body-sm` 14 | `radius-sm` 8 | 16 |
| `md` (default) | `control-height-md` 40 | `space-4` 16 | `text-body` 16 | `radius-sm` 8 | 16 |
| `lg` | `control-height-lg` 48 | `space-5` 20 | `text-body-lg` 18 | `radius-sm` 8 | 20 |

## Variants

| Variant | Native | Notes |
|---|---|---|
| `select` | `<select>` | One option; baseline |
| `select-placeholder` | `<select>` + disabled first option | Empty value; placeholder styled as tertiary text |

A grouped option list uses native `<optgroup>`. Multi-select and searchable
comboboxes are not part of this component.

## State matrix (§9.2)

| State | Background | Text | Border | Notes |
|---|---|---|---|---|
| Default | `color-surface` | `color-text-primary` | `color-border-strong` | Placeholder `color-text-tertiary` |
| Hover | `color-surface` | `color-text-primary` | `color-text-tertiary` | Dual use: the text role as an emphasized boundary |
| Focused | `color-surface` | `color-text-primary` | `color-border-strong` + 2px `color-focus` ring, 2px offset | Ring is never removed |
| Selected | `color-surface` | `color-text-primary` | `color-border-strong` | No separate “filled” color |
| Disabled | `color-surface-secondary` | `color-text-disabled` | `color-border` | Removed from tab order |
| Error | `color-surface` | `color-text-primary` | `color-danger` | Error text `color-danger-strong` + icon; `aria-invalid` |
| Open | native popup | native | native | The OS renders the option list; it is not styled |

Border and background transitions use `duration-fast` and `easing-linear`.
Error is never color-only: the message and icon are required.

## Tokens used

- Surface and text: `color-surface`, `color-surface-secondary`,
  `color-text-primary`, `color-text-secondary`, `color-text-tertiary`,
  `color-text-disabled`
- Boundaries: `color-border`, `color-border-strong`, `color-danger`
- Error text: `color-danger-strong`
- Focus: `color-focus`
- Shape and size: `radius-sm`, `border-width`, `control-height-sm|md|lg`
- Space: `space-1`, `space-2`, `space-3`, `space-4`, `space-5`
- Type: `text-label`, `text-body-sm`, `text-body`, `text-body-lg`
- Icons: `size-icon-sm`, `size-icon-md`
- Motion: `duration-fast`, `easing-linear`

No component tokens are required.

## Accessibility

| Requirement | Rule |
|---|---|
| Label | A visible `<label for>` on every select; placeholder is never the label |
| Required | Native `required`; the `*` is `aria-hidden`; one “* Required” legend at the top of the form |
| Helper text | `aria-describedby` points to the helper text id |
| Error | `aria-invalid="true"`; `aria-describedby` points to the error id; visible text and icon |
| Keyboard | Native select behavior; Up/Down, Home/End, type-ahead, Enter/Space; no custom key handling |
| Focus | 2px `color-focus` ring, 2px offset, element radius preserved |
| Target size | Visual heights 32/40/48. On coarse pointers use `lg`, or provide a 44×44 effective hit area around the control |
| Mobile | The native picker is the expected interaction; no custom dropdown |
| Chevron | Decorative, `aria-hidden`; the selected value is the accessible value |
| Non-color cues | Selected value text; error text and icon; never color alone (§10.5) |
| Labels | English, Simplified Chinese, and mixed labels must wrap without clipping |

## Do / Don't

**Do**

- Use a select when there are more than about seven known options.
- Keep the label visible above the control.
- Use a disabled placeholder option with an empty value.
- Use native `<optgroup>` for meaningful groups.
- Put errors next to the field with text and an icon.

**Don't**

- Don't use a select for two options; use radio buttons or a switch.
- Don't use a select when the user needs to type or filter; use a combobox
  (future component).
- Don't use multi-select as a baseline; it is not specified.
- Don't hide the label or rely on the placeholder.
- Don't style or replace the native option list in this component.
- Don't remove the focus ring.

## Open questions

1. **Custom listbox.** A themed popup with search/filter is not specified; the
   native picker is the baseline.
2. **Multi-select.** Not specified.
3. **Option grouping.** Native `<optgroup>` is allowed but not styled.
4. **Placeholder rules.** A disabled empty option is specified; whether a
   select may start with a real default is a product decision.
5. **Long option text.** Native truncation is accepted; a custom tooltip is not
   specified.
6. **Combobox.** Type-to-filter is a separate component.

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
