# DabDesign Governance

**Status:** 1.0.0, approved by the Owner 2026-11-14.
**Purpose:** principles, decision records, and the site-theme contract. It does
not carry token values.
**Normative core:** [`core.md`](core.md).
**Personal-series theme:** [`DabDesign.md`](DabDesign.md).
**Released changes:** [`CHANGELOG.md`](CHANGELOG.md).

> **Reading order.** Start at `GUIDELINE.md`; it routes here for decisions and
> to `core.md` for values. For `dabaz.me` and DabResume only, also read
> `DabDesign.md`. Every other project uses its own theme document and must not
> apply the personal-series theme.

## 1. Principles

1. **Visual sameness is not the goal.** Core shares behavior, accessibility,
   and tokens; a site may look different but may not behave differently
   (`core.md` §1.2).
2. **Color is organized by color first.** Ramps are the structure; the semantic
   mapping is deliberately thin (`core.md` §3).
3. **Restrained, flat, Apple-like.** Content first, generous whitespace, one
   floating shadow, no decorative gradients.
4. **Accessibility is a gate, not a preference.** WCAG 2.2 AA is the baseline.
5. **One accent per site.** Status colors are never brand colors; focus and
   selection are core-fixed (`core.md` §3.4).
6. **Self-hosted assets only.** No font CDN, no icon CDN, no third-party
   runtime dependency.
7. **One source of truth.** Token values live only in `core.md`; no raw values
   in components or site themes.
8. **Decisions are recorded.** A local exception is a defect; propose a
   decision instead.
9. **The Owner approves decisions and component promotion.** A released
   contract changes by a recorded decision and a version bump, not by drift.

## 2. Document roles

| File | Role | May contain token values? |
|---|---|---|
| `README.md` | Entry: purpose, read order, pins, palette preview, license | No |
| `AGENTS.md` | Repository contract: pins, commands, Definition of Done, exceptions | No |
| `GUIDELINE.md` | Agent entry: dependencies, token use, §7 layout, §9 component status | No |
| `core.md` | Normative core contract: tokens and operative rules | Yes — the only token block |
| `GOVERNANCE.md` | Principles, decisions, site-theme contract | No |
| `CHANGELOG.md` | Released changes, newest first | No |
| `archive/` | Previous release, kept for comparison | Historical only — never normative |

Supporting directories: `palettes/` holds generated color evidence for the
core contract; `references/third-party/` holds unofficial prior art. Neither is
a standard, and neither may override `core.md`.

## 3. Decision log

| ID | Date | Decision | Rationale | Status |
|---|---|---|---|---|
| `DEC-001` | 2026-11-10 | Core/site boundary: core fixes tokens, accessibility, and component behavior; site themes own accent, surface tint, composition, imagery, and site-owned components stay out of the shared layer | Keeps cross-site consistency where it matters without forcing one visual identity | Approved (Owner) |
| `DEC-002` | 2026-11-11 | Color model: color-first taxonomy (gray + 12 hue ramps, 11 steps + white/black) with a thin semantic mapping for surfaces, text, borders, action, status, focus, selection, and overlay | The Owner wants colors organized by color, not function; the thin mapping keeps dark mode and site theming workable | Approved (Owner) |
| `DEC-003` | 2026-11-11 | Visual character: restrained, flat, Apple-like; no shadow at rest; one floating shadow; Apple radius ladder; no decorative gradients | Matches the personal-series identity and keeps the system quiet | Approved (Owner) |
| `DEC-004` | 2026-11-11 | Scope: lean core + one real pilot; no per-component catalog before the pilot; pilot components are Button, Text input, and Card, adding Dialog only if needed | The previous cycle produced drafts and no pilots; validate the contract before multiplying specs | Approved (Owner) |
| `DEC-005` | 2026-11-11 | Document split: `core.md` normative; `DabDesign.md` personal-series theme; `GOVERNANCE.md` principles/decisions/site-theme contract | Separates shared contract, one site theme, and decision history without duplicating tokens | Approved (Owner) |
| `DEC-006` | 2026-11-11 | Color values: retain the original Tailwind CSS v4 gray and 12 chromatic ramps, 11 steps 50–950, with white and black as separate primitives | The Owner explicitly asked to keep the existing ramps; values are already frozen and measured | Approved (Owner) |
| `DEC-007` | 2026-11-11 | Typography naming: use `type-` for scale and family tokens; keep `color-text-*` for color roles | Removes the ambiguous shared “text” prefix between typography and color | Approved (Owner) |
| `DEC-008` | 2026-11-11 | Personal series accent: blue for links and inline emphasis; neutral ink for primary actions; no surface tint | Keeps the personal series calm and monochrome at rest while giving links a clear identity | Approved (Owner) |
| `DEC-009` | 2026-11-11 | Radius assignment: inputs/selects `radius-sm` 8; buttons `radius-md` 11; cards/panels `radius-lg` 18; `radius-pill` only as an explicit action modifier | Fits the restrained Apple-like character without making buttons default pills | Approved (Owner) |
| `DEC-010` | 2026-11-11 | Carry forward the archived typography, spacing, control sizes, elevation, motion, layout, icon, and accessibility values | These values were already measured and are independent of the color reorganization | Carried forward |
| `DEC-011` | 2026-11-12 | Body line height: `type-body` moves from 1.7 to 1.8, inside the 1.75–1.85 range DabFonts requires for Chinese body copy | Resolves the cross-repository conflict for CJK body text; 1.8 is the midpoint and remains comfortable for Latin text | Approved (Owner) |
| `DEC-012` | 2026-11-14 | 1.0.0 release: adopt the DabAgents 1.0.0 dependency contract, archive the component drafts, foundation page, and earlier documents, move voice to rule 07, and make DabDesign the single system name | The previous release duplicated process rules and font loading, and its artifacts contradicted the revised typography contract | Approved (Owner) |
| `DEC-013` | 2026-11-14 | Color values: the twelve Tailwind v4 hue ramps, the gray ramp, fill aliases, link-safe text steps, and functional mappings are carried forward from the previous color decision, effective 1.0.0 | The values were already frozen and verified; 1.0.0 changes ownership and naming, not the ramps | Superseded by DEC-014 |
| `DEC-014` | 2026-11-15 | Ramps: replace the Tailwind v4 chromatic values with Tailwind CSS v3.4.17 values; the gray ramp, eleven steps, and white/black primitives are unchanged; regenerate fill aliases, link-safe text steps, and functional mappings | The Owner chose to unify on the v3 palette; 115 of 132 chromatic values differ from v4 | Approved (Owner) |

**Status meanings:** Proposed — not yet reviewed; Approved — Owner accepted;
Carried forward — inherited from an earlier decision without re-litigation;
Superseded — replaced by a later decision.

`DEC-014` replaces the chromatic values in `DEC-006` and `DEC-013`. It does not
change the gray ramp or the eleven-step shape.

## 4. Changelog

Released changes live in [`CHANGELOG.md`](CHANGELOG.md). This file no longer
keeps an inline changelog; the decision log records design decisions, not
releases.

## 5. Site-theme contract

Every site theme document must provide the following. A theme that cannot fill
a row is not ready.

| Field | Requirement |
|---|---|
| Scope | Which sites/surfaces the theme applies to |
| Accent hue | One chromatic hue from `core.md` §3.1; no second accent |
| Fill aliases | The six accent aliases defined in `core.md` §3.4, in both themes |
| Link-safe text | The `color-primary-text` step from `core.md` §3.4, measured in both themes |
| Surface tint | None, or a remap of ratified neutral steps; re-measured and recorded |
| Composition | Hero, sections, grid, container, and rhythm choices |
| Imagery | What is used, alt-text policy, what is forbidden |
| Copy and voice | Follows DabAgents rule 07; a theme records terminology only, never tone |
| Contrast evidence | Measured pairs for every accent and text combination |
| Open questions | Unresolved choices, never silent assumptions |

**Rules:**

- A theme may not redefine a core token value, scale, focus behavior, or
  accessibility target.
- Component behavior comes from `core.md`; a theme may choose documented
  appearance variants but may not fork behavior.

## 6. How to make a decision

1. Write the problem and the options.
2. Bring evidence: measured contrast, viewport checks, a real screen.
3. Record the decision in §3 with a `DEC-` ID, date, and status.
4. Update `core.md` if a token or operative rule changes.
5. Add an entry to `CHANGELOG.md` when the change ships.
6. Do not move a component from Draft to Pilot/Adopted; that is the Owner's
   call.
