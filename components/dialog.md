# Dialog

**Status:** Draft (2026-11-08) — awaiting Owner review; not Adopted.
**Preview:** `preview/dialog.html` (Draft specimen).
**Pilot site:** none yet.
**Depends on:** DAB-002 (focus, contrast, target size), DAB-005 (semantic
roles), DAB-007 (overlay), DAB-009 (type), DAB-010 (spacing, radius, border),
DAB-011 (elevation, motion), DAB-014 (icons).

## Purpose

Asks for a decision or shows focused content without leaving the page. A
dialog is modal: the page behind it is inert until it closes.

One dialog is open at a time. Drawers, command palettes, and popovers share the
overlay token but have different geometry and are separate components.

## Anatomy

| Part | Rule |
|---|---|
| Overlay | `color-overlay` via `::backdrop`; the only modal scrim (DAB-007) |
| Container | `color-surface`; 1px `color-border-strong`; `radius-lg` 18; `shadow-floating` |
| Width | Fluid: `min(100vw − 2 × space-6, container-sm)` — 640 maximum, 24px viewport margins |
| Height | `calc(100dvh − 2 × space-6)` maximum; the body scrolls, the header and footer stay fixed |
| Header | `space-6` padding; title `text-h3` 20 / 600 / 1.3, `color-text-primary`; optional description `text-body-sm` 14 / 1.6, `color-text-secondary`, `space-2` below the title |
| Close | Icon-only Tabler `x`, `size-icon-md` 20, `color-text-secondary`, 44×44 target, `aria-label="Close"`; inline end of the header |
| Body | `space-6` inline and bottom padding; `text-body` 16 / 1.7, `color-text-primary`; `overflow: auto` |
| Footer | `space-4` top padding, `space-6` inline/bottom; 1px `color-border` divider above; actions end-aligned with `space-3` gap |

The title's heading level comes from the page outline (usually `h2`);
`text-h3` is the visual role. The close control is a Button icon-only
specimen until the Button component is Adopted.

**Dark-theme separation.** The container always carries
`color-border-strong` in both themes. DAB-007 measured that a 50% black scrim
does not separate a dark dialog from a dark page (1.13–1.15:1), so the border
carries the edge; the shadow is never the only cue. Components do not branch
on theme (§3.5), so the strong border is used in light theme too.

## Variants

| Variant | Use |
|---|---|
| `default` | Content or a form with Cancel and a primary action |
| `destructive` | Confirms an irreversible action; Cancel receives initial focus and the confirm action uses the solid `danger` Button |

There is no drawer, popover, or command-palette variant in this component.

## Sizes

One size in the Draft: fluid width with a `container-sm` 640 maximum. A
compact confirmation width below 640 is an open question, not a local
exception.

## State matrix (§9.2)

| State | Requirement |
|---|---|
| Closed | Not in the top layer; the trigger keeps focus |
| Opening | Opacity 0 → 1, `duration-slow` 300ms, `easing-standard`; no scale or translate in the Draft |
| Open | Modal; background inert; body scroll locked; focus contained |
| Closing | Closes immediately and returns focus to the trigger; an exit animation is an open question |
| Loading | The primary action shows its own loading state; the dialog stays open and remains dismissible unless the action is irreversible |
| Error | Shown inline in the body with `color-danger-strong` and an icon, not as a dialog-level state |
| Disabled | Not applicable; disable the affected action, not the dialog |
| Selected | Not applicable |

Under `prefers-reduced-motion: reduce`, the opening opacity transition uses
`duration-fast`; no transform is introduced. Focus visibility is never reduced.

## Behavior

- Open with the native `<dialog>` element and `showModal()`. This supplies the
  top layer, background inertness, and native Escape handling.
- Initial focus: the first focusable element in the dialog. A destructive
  dialog focuses **Cancel**, never the destructive action. If the dialog has
  no focusable element, focus the dialog container with `tabindex="-1"`.
- Focus is contained: an explicit Tab/Shift+Tab trap wraps the dialog's
  focusable elements. Native containment is the baseline, but it varies across
  browsers, so the trap is required and verified in every target browser.
- Escape closes the dialog and returns focus to the trigger. So does the Close
  button or Cancel. Backdrop click does **not** close by default — it is too
  easy to trigger by accident.
- On close, focus returns to the element that opened the dialog. Never leave
  focus on a removed node or at the top of the document.
- Lock document scroll while open; restore the previous scroll position and
  any scrollbar gutter on close.
- Nested dialogs are not supported. Close the current dialog before opening
  another.

## Tokens used

- Surface and text: `color-surface`, `color-text-primary`,
  `color-text-secondary`
- Boundaries: `color-border`, `color-border-strong`
- Overlay: `color-overlay`
- Focus: `color-focus`
- Shape: `radius-lg`, `border-width`
- Space: `space-2`, `space-3`, `space-4`, `space-6`
- Type: `text-h3`, `text-body`, `text-body-sm`
- Elevation: `shadow-floating`
- Motion: `duration-slow`, `duration-fast`, `easing-standard`

Action colors are owned by Button (`color-primary*` / `color-danger*`), not by
Dialog. No component tokens are introduced.

## Accessibility

| Requirement | Rule |
|---|---|
| Role | Native `<dialog>` opened with `showModal()` supplies `role="dialog"` and modality |
| Name | `aria-labelledby` points at the title; `aria-describedby` points at the description when present |
| Focus order | Initial focus inside the dialog; Tab/Shift+Tab cycle within; no focus escape to the page |
| Focus return | On close, focus returns to the trigger |
| Escape | Closes the dialog; never traps the user |
| Background | Inert while open; scroll locked; only one modal at a time |
| Close control | 44×44 target, visible icon, `aria-label="Close"`; labeled by its accessible name |
| Destructive | Cancel receives initial focus; the destructive action names the object and is never the default |
| Error | Text plus icon inside the body; `aria-describedby` or `aria-errormessage` points at the message |
| Contrast | Title and body meet 4.5:1 on `color-surface`; the border meets 3:1; focus meets 3:1 |
| Non-color cues | Error text and icon; the destructive action is labeled, not color-only (§10.5) |
| Reduced motion | Opacity only, `duration-fast`; no scale, translate, or parallax |
| Zoom / reflow | The dialog remains usable at 400% zoom and at 320px; the body scrolls, header and footer stay reachable |

## Do / Don't

**Do**

- Use a dialog for a decision or focused content that should not lose context.
- Keep one primary action; put Cancel before it in the footer.
- Put the object name in the title ("Delete project DabWave?").
- Return focus to the trigger on every close path.
- Test Escape, Tab cycling, and focus return in both themes.

**Don't**

- Don't use a dialog for navigation, onboarding carousels, or long documents.
- Don't close on backdrop click by default.
- Don't nest dialogs.
- Don't focus the destructive action by default.
- Don't remove the border; the shadow cannot carry separation in dark theme.
- Don't use opacity-only disabled or error states.

## Open questions

1. **Exit animation.** An exit transition needs `allow-discrete` / `overlay`
   support or a close delay; the Draft closes immediately.
2. **Backdrop-click policy.** Currently no close. Whether informational dialogs
   may opt in is open.
3. **Compact width.** Confirmations may want a width below `container-sm`; no
   ratified token exists for it.
4. **Drawer / command palette.** Same scrim, different geometry; separate
   components, not Dialog variants.
5. **Focus containment matrix.** The explicit trap is required; the minimum
   browser matrix that must be verified is not enumerated.
6. **Scroll lock details.** Body-only lock versus scrollbar-gutter reservation
   is implementation-specific.
7. **Loading dismissal.** Whether an in-flight destructive action may be
   cancelled is a product decision.

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
