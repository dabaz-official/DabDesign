# Text input

**Status:** Draft (2026-11-08) — awaiting Owner review; not Adopted.
**Preview:** `preview/text-input.html` (Draft specimen).
**Pilot site:** none yet.
**Depends on:** DAB-002 (focus, contrast), DAB-005 (semantic roles), DAB-009
(type), DAB-010 (sizes, radius, borders), DAB-011 (motion), DAB-014 (icons),
DAB-015 (danger values).

## Purpose

Collects a single line of text. Long-form text is a textarea and is not part of
this component. The input is never navigation and never triggers an action by
itself.

## Anatomy

- Field wrapper: label, control, optional helper text, error text.
- Label: **top-aligned**, always visible, `text-label` (14 / 1.4 / 600),
  `color-text-primary`, `space-2` below.
- Required marker: a `*` after the label, `aria-hidden="true"`; the native
  `required` attribute carries the semantics. A single legend at the top of the
  form reads “* Required” in `text-caption` / `color-text-secondary`.
- Control: native `<input>`; `width: 100%`; 1px border; `radius-sm` 8;
  background `color-surface`; text `color-text-primary`.
- Optional leading or trailing icon: DAB-014, `size-icon-sm` 16 for `sm`/`md`,
  `size-icon-md` 20 for `lg`; decorative icons are `aria-hidden="true"`;
  `space-2` between icon and text.
- Helper or error text: `text-body-sm` (14 / 1.6), `space-1` below the control.
  Error text carries an icon plus a text message; it is never color alone.
- No shadow.

| Size | Height | Padding inline | Input text | Radius | Label |
|---|---:|---:|---|---:|---|
| `sm` | `control-height-sm` 32 | `space-3` 12 | `text-body-sm` 14 | `radius-sm` 8 | `text-label` |
| `md` (default) | `control-height-md` 40 | `space-4` 16 | `text-body` 16 | `radius-sm` 8 | `text-label` |
| `lg` | `control-height-lg` 48 | `space-5` 20 | `text-body-lg` 18 | `radius-sm` 8 | `text-label` |

Placeholder text uses `color-text-tertiary`. A placeholder never replaces the
label and never carries required or format rules that the label or helper text
does not repeat.

## Variants

One anatomy, differentiated by native input semantics, not by visuals:

| Variant | Native | Notes |
|---|---|---|
| `text` | `type="text"` | Default |
| `email` | `type="email"` | `autocomplete="email"`; `inputmode="email"` |
| `password` | `type="password"` | Pasting is allowed; visibility toggle is a future icon button |
| `search` | `type="search"` | A clear button is not part of this spec |
| `number` | `type="number"` | Use `inputmode="numeric"`; step rules are field-specific |
| `tel` | `type="tel"` | `autocomplete="tel"`; `inputmode="tel"` |

## State matrix (§9.2)

| State | Background | Text | Border | Notes |
|---|---|---|---|---|
| Default | `color-surface` | `color-text-primary` | `color-border-strong` | Placeholder `color-text-tertiary` |
| Hover | `color-surface` | `color-text-primary` | `color-text-tertiary` | Dual use: the text role as an emphasized boundary, documented here |
| Focused | `color-surface` | `color-text-primary` | `color-border-strong` + 2px `color-focus` ring, 2px offset | Ring is never removed |
| Filled | same as default | `color-text-primary` | `color-border-strong` | No separate “filled” color |
| Disabled | `color-surface-secondary` | `color-text-disabled` | `color-border` | Not opacity-only; removed from tab order |
| Readonly | `color-surface-secondary` | `color-text-secondary` | `color-border` | Focusable and copyable |
| Error | `color-surface` | `color-text-primary` | `color-danger` | Error text `color-danger-strong` + icon; `aria-invalid` |
| Required | same as default | same | same | `*` after label; native `required` |

Border and background transitions use `duration-fast` and `easing-linear`.
Error color is never the only cue: the message text and icon are required.

## Tokens used

- Surface and text: `color-surface`, `color-surface-secondary`,
  `color-text-primary`, `color-text-secondary`, `color-text-tertiary`,
  `color-text-disabled`
- Boundaries: `color-border`, `color-border-strong`, `color-danger`
- Error text: `color-danger-strong`
- Focus: `color-focus`
- Shape and size: `radius-sm`, `border-width`, `control-height-sm|md|lg`
- Space: `space-1`, `space-2`, `space-3`, `space-4`, `space-5`
- Type: `text-label`, `text-body-sm`, `text-body`, `text-body-lg`,
  `text-caption`
- Icons: `size-icon-sm`, `size-icon-md`
- Motion: `duration-fast`, `easing-linear`

No component tokens are required. If one becomes necessary, it is proposed
through §2.2 before use.

## Accessibility

| Requirement | Rule |
|---|---|
| Label | A visible `<label for>` on every field, top-aligned. Placeholder is never the label |
| Required | Native `required`; the `*` is `aria-hidden`; a “* Required” legend appears once at the top of the form |
| Helper text | `aria-describedby` points to the helper text id |
| Error | `aria-invalid="true"`; `aria-describedby` points to the error id; the message includes text and an icon; announced when validation runs |
| Keyboard | Native input behavior; Enter submits the form; no custom key handling |
| Focus | 2px `color-focus` ring, 2px offset, element radius preserved |
| Target size | Visual heights 32/40/48. On coarse pointers use `lg`, or provide a 44×44 effective hit area around the control; the visual height does not change |
| Disabled vs readonly | Disabled is unavailable and removed from tab order; readonly keeps the value focusable and copyable. Use readonly when the value matters |
| Autofill | Set `autocomplete` and `inputmode` per field; do not disable autofill or paste |
| Password | Pasting is allowed; `autocomplete="current-password"` or `"new-password"`; a visibility toggle, when added, is an icon button with `aria-label` and `aria-pressed` |
| Labels | English, Simplified Chinese, and mixed labels must wrap without clipping; required legend is bilingual-ready |

## Do / Don't

**Do**

- Use a visible top-aligned label for every input.
- Use the correct native `type`, `autocomplete`, and `inputmode`.
- Keep helper text for format rules; replace it with the error message when
  validation fails, or show both with the error first.
- Put errors next to the field with text and an icon.
- Use readonly when the value is important but not editable.

**Don't**

- Don't use a placeholder as the label.
- Don't remove or restyle the focus ring.
- Don't use danger colors for non-error emphasis.
- Don't disable a field without explaining why; prefer readonly.
- Don't use a text input for multi-line content.
- Don't put critical instructions only in placeholder text.

## Open questions

1. **Textarea.** Multi-line text is a separate component and is not specified.
2. **Password visibility toggle.** It depends on the icon-only Button pattern
   and needs `aria-pressed`; not specified here.
3. **Prefix / suffix.** Currency, units, and fixed affixes are not specified.
4. **Character count.** `maxlength` display and announcement are not specified.
5. **Form-level error summary.** Field-level errors are decided; a summary at
   the top of long forms is not.
6. **Autofill styling.** `:-webkit-autofill` overrides are not specified.
7. **Search clear button.** `type="search"` is supported; a custom clear button
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
