# DabWave Governance

**Status:** v1 governance, approved by the Owner 2026-11-11.
**Purpose:** principles, decision records, changelog, and the site-theme
contract. It does not carry token values.
**Normative core:** [`core.md`](core.md).
**Personal-series theme:** [`DabDesign.md`](DabDesign.md).
**Handoff:** [`ROADMAP.md`](ROADMAP.md).

> **Reading order for every project:** `core.md` first, then this file. For
> `dabaz.me` and DabResume only, also read `DabDesign.md`. Every other project
> uses its own theme document and must not apply the personal-series theme.

## 1. Principles

1. **Core shares behavior, accessibility, structure, and tokens — not visual
   sameness.** A site may look different; it may not behave differently.
2. **Color is organized by color first.** Ramps are the primary structure; the
   semantic roles are a thin usage mapping.
3. **Restrained, flat, Apple-like.** Content first, generous whitespace, one
   floating shadow, no decorative gradients.
4. **Accessibility is a gate, not a preference.** WCAG 2.2 AA is the baseline.
5. **One accent per site.** Status colors are never brand colors; focus and
   selection are core-fixed.
6. **Self-hosted assets only.** No font CDN, no icon CDN, no third-party
   runtime dependency.
7. **Pilot before catalog.** No component spec is written before a real site
   consumes it.
8. **One source of truth.** Token values live only in `core.md`; no raw values
   in components or site themes.
9. **Decisions are recorded.** A local exception is a defect; propose a
   decision instead.
10. **No 1.0.0 without the Owner's explicit acceptance** of a real pilot.

## 2. Document roles

| File | Role | May contain token values? |
|---|---|---|
| `core.md` | Normative core contract: tokens and operative rules | Yes — the only token block |
| `DabDesign.md` | DabAZ personal series theme: official site + DabResume | Only theme-level accent mappings allowed by the contract |
| `GOVERNANCE.md` | Principles, decisions, changelog, site-theme contract | No |
| `ROADMAP.md` | Handoff: current state, open questions, next steps | No |
| `components/` | Registry and per-component specs, written only when a site consumes them | Only documented component tokens |
| `themes/` | Future site themes | Theme-level values only |

The previous documents are archived at `backup/2026-11-10/`. The old
`DAB-001…DAB-016` records are **historical**; this rewrite starts a new `DEC-`
series. Old component files and previews are pre-reset artifacts and do not
define the current contract.

## 3. Decision log

| ID | Date | Decision | Rationale | Status |
|---|---|---|---|---|
| `DEC-001` | 2026-11-10 | Core/site boundary: core fixes tokens, accessibility, and component behavior; site themes own accent, surface tint, composition, imagery, and voice; site-owned components stay out of the shared layer | Keeps cross-site consistency where it matters without forcing one visual identity | Approved (Owner) |
| `DEC-002` | 2026-11-11 | Color model: color-first taxonomy (gray + 12 hue ramps, 11 steps + white/black) with a thin semantic mapping for surfaces, text, borders, action, status, focus, selection, and overlay | The Owner wants colors organized by color, not function; the thin mapping keeps dark mode and site theming workable | Approved (Owner) |
| `DEC-003` | 2026-11-11 | Visual character: restrained, flat, Apple-like; no shadow at rest; one floating shadow; Apple radius ladder; no decorative gradients | Matches the personal-series identity and keeps the system quiet | Approved (Owner) |
| `DEC-004` | 2026-11-11 | Scope: lean core + one real pilot; no per-component catalog before the pilot; pilot components are Button, Text input, and Card, adding Dialog only if needed | The previous cycle produced six Drafts and zero pilots; validate the contract before multiplying specs | Approved (Owner) |
| `DEC-005` | 2026-11-11 | Document split: `core.md` normative; `DabDesign.md` personal-series theme; `GOVERNANCE.md` principles/decisions/changelog/site-theme contract | Separates shared contract, one site theme, and decision history without duplicating tokens | Approved (Owner) |
| `DEC-006` | 2026-11-11 | Color values: retain the original Tailwind CSS v4 gray and 12 chromatic ramps, 11 steps 50–950, with white and black as separate primitives | The Owner explicitly asked to keep the existing ramps; values are already frozen and measured | Approved (Owner) |
| `DEC-007` | 2026-11-11 | Typography naming: use `type-` for scale and family tokens; keep `color-text-*` for color roles | Removes the ambiguous shared “text” prefix between typography and color | Approved (Owner) |
| `DEC-008` | 2026-11-11 | Personal series accent: blue for links and inline emphasis; neutral ink for primary actions; no surface tint | Keeps the personal series calm and monochrome at rest while giving links a clear identity | Approved (Owner) |
| `DEC-009` | 2026-11-11 | Radius assignment: inputs/selects `radius-sm` 8; buttons `radius-md` 11; cards/panels `radius-lg` 18; `radius-pill` only as an explicit action modifier | Fits the restrained Apple-like character without making buttons default pills | Approved (Owner) |
| `DEC-010` | 2026-11-11 | Carry forward the archived typography, spacing, control sizes, elevation, motion, layout, icon, and accessibility values | These values were already measured and are independent of the color reorganization | Carried forward |

**Status meanings:** Proposed — not yet reviewed; Approved — Owner accepted;
Carried forward — inherited from the archived core without re-litigation.

## 4. Changelog

| Date | Change | Status |
|---|---|---|
| 2026-11-10 | Spec reset. Previous `DabDesign.md` and `core.md` archived to `backup/2026-11-10/`. Scope and boundary approved. | Draft |
| 2026-11-11 | v1 core rewrite: color-first taxonomy with the original Tailwind ramps, thin semantic mapping, `type-` naming, lean component contract. Personal-series theme and governance documents written. | Draft |
| 2026-11-11 | DEC-008 (personal-series blue accent) and DEC-009 (radius assignment) approved by the Owner; v1 core and personal-series theme promoted to approved drafts. | Approved |
| 2026-11-11 | Version stays `0.1.0`. No 1.0.0 without a real pilot and the Owner's acceptance. | Draft |

## 5. Site-theme contract

Every site theme document must provide the following. A theme that cannot fill
a row is not ready.

| Field | Requirement |
|---|---|
| Scope | Which sites/surfaces the theme applies to |
| Accent hue | One chromatic hue from `core.md`; no second accent |
| Fill aliases | `color-primary`, `-hover`, `-pressed`, `-subtle`, `color-on-primary` in both themes |
| Link-safe text | `color-primary-text` step in both themes |
| Surface tint | None, or a remap of ratified neutral steps; no new values |
| Composition | Hero, sections, grid, container, and rhythm choices |
| Imagery | What is used, alt-text policy, what is forbidden |
| Voice | Tone, bilingual rules, message patterns |
| Contrast evidence | Measured pairs for every accent and text combination |
| Open questions | Unresolved choices, never silent assumptions |

**Rules:**

- One accent per site. A second accent is a core decision.
- No theme may redefine a core token value, scale, focus behavior, or
  accessibility target.
- A theme cites core token names; it does not copy the ramps.
- Every surface-tint remap is re-measured and recorded.
- Component behavior comes from `core.md`; a theme may choose documented
  appearance variants but may not fork behavior.
- If a site needs a new behavior or token, it opens a `DEC-` record — it does
  not add a local exception.

## 6. How to make a decision

1. Write the problem and the options.
2. Bring evidence: measured contrast, viewport checks, a real screen.
3. Record the decision in §3 with a `DEC-` ID, date, and status.
4. Update `core.md` if a token or operative rule changes.
5. Add a changelog row.
6. Do not move a component from Draft to Pilot/Adopted; that is the Owner's
   call.
