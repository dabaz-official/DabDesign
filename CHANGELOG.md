# Changelog

All notable changes to this repository are recorded here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versions follow
semantic versioning.

## 1.2.0 — 2026-11-22

### Added

- `DEC-016`: a blur radius may animate inside a pre-warmed range at the fixed
  tint, on one chrome-sized layer, for `duration-slow` at most.

### Changed

- `core.md` §6.1 rule 7 replaces "blur is not animated" with the warmed-range
  rule. Animating the tint alpha remains forbidden, so the 72% contrast floor
  still holds on every frame.
- `ROADMAP.md` closes the `glass-tint-active` candidate; its alpha half is
  rejected, and `GUIDELINE.md` §12 checks the warm-up.

## 1.1.0 — 2026-11-22

### Added

- `core.md` §6.1 translucency tokens — `glass-blur-sm/md/lg`,
  `glass-saturate`, `glass-tint-light/dark`, `glass-border-light/dark`, and
  `glass-highlight` — with the 72% tint floor, the opaque fallback, and the
  performance limits.
- `DEC-015`: glass is an appearance variant available to every component and is
  never a default.

### Changed

- `DabDesign.md` §1 no longer forbids glassmorphism; the personal series uses
  glass the same opt-in way as every other theme.
- `GUIDELINE.md` §9, §12, and §13 document the glass variant, its verification,
  and its two failure modes.

## 1.0.1 — 2026-11-15

### Changed

- `AGENTS.md` defines what major, minor, and patch mean for this repository
  (DabAgents rule 03 §5).
- The DabAgents pin is the `v1.0.2` tag; the DabFonts pin is `v1.0.1`.

### Fixed

- `core.md` `type-family-sans` and `type-family-mono` carry the family name
  only. The previous values embedded a `<fallback stack defined by DabFonts>`
  placeholder, which is not valid CSS; consumers compose the stack per
  DabFonts.

## 1.0.0 — 2026-11-15

First stable release, aligned with DabAgents 1.0.0.

### Breaking changes

- The system name is unified as **DabDesign**. The former name is retired from
  every normative file, generated artifact, and preview.
- Typography moves from the previous self-hosted dual-stack to **Dab Sans**
  and **Dab Mono** from DabFonts. Font files, family stacks, loading, and
  allowed weights are now DabFonts' responsibility.
- Layout parameters move into this repository: body measure **34–38em**,
  first-line indent **1.88em**, and the `type-body` line height **1.8** are
  defined in `core.md` §4.2 and §7, inside DabFonts' 1.75–1.85 body range.
- Chromatic ramps move from Tailwind CSS v4 to **v3.4.17** values. The gray
  ramp is unchanged; 115 of 132 chromatic steps change. Fill aliases,
  link-safe text steps, and functional mappings are regenerated.
- The previous component drafts, foundation page, earlier documents, and
  retired scripts move to `archive/0.1.0/`. There is no live component
  directory; its files and previews are not the current contract.
- Voice and tone leave the personal-series theme. DabAgents rule 07 owns voice
  and microcopy; `DabDesign.md` links to it.
- Version `0.1.0` becomes `1.0.0`.

### Added

- `README.md`, `AGENTS.md`, and this changelog.
- `GUIDELINE.md` dependencies and ownership section, routing typography to
  DabFonts and exact scale values to `core.md` §4.
- `core.md` §7 measure and first-line indent, with the 0.94em Han derivation.
- `archive/README.md`, marking the archived tree as non-normative.
- `ROADMAP.md` as the post-1.0 plan and open-decision log.
- `DEC-012` (1.0.0 release scope, archive, voice handover), `DEC-013` (color
  ramps carried forward), and `DEC-014` (ramps unified on Tailwind v3.4.17).

### Changed

- `GUIDELINE.md` is the 1.0.0 entry point. It keeps §7 (breakpoints and
  responsive layout) and §9 (component status) and points to DabAgents rules
  01, 03, 04, 07, 08, and 09 for process, releases, gates, voice, viewports,
  and documentation.
- `core.md` frontmatter and status are 1.0.0. Typography families are declared
  by name only; §4.2 is the single authority for sizes, line heights, weights,
  and tracking; §10 no longer points at a component directory.
- `GOVERNANCE.md` is 1.0.0, updates the document-role table, and moves released
  changes to this file.
- `DabDesign.md` depends on `core.md` v1.0.0. The blue links now cite the
  Tailwind v3.4.17 values (`blue-700` `#1D4ED8`, `blue-300` `#93C5FD`) with
  re-measured ratios.
- `core.md` and `GOVERNANCE.md` no longer duplicate each other: the theme
  contract points at `core.md` §3.4, the core boundary no longer claims voice,
  and the principles that repeated core rules are removed.
- `scripts/hue-catalog.mjs` emits `DEC-014` and a DabDesign title; regenerated
  `palettes/catalog.md` and `palettes/ramps.json`.
- `palettes/preview.html` and `palettes/preview.css` are self-contained, so the
  catalog no longer depends on the archived foundation page.
- `references/third-party/README.md` uses the DabDesign name.

### Removed

- Duplicated branch, commit, release, CI, and quality-gate process from
  `GUIDELINE.md`; those belong to DabAgents rules 03 and 04.
- The previous font-loading details and fallback stacks from `core.md`;
  DabFonts owns them.
- The weight-synthesis allowance that conflicted with DabFonts' policy.
- The former decision-ID prefix and the pre-1.0 progress log from the current
  documents. The archived tree and git history remain the record.
- The retired palette scripts from the live `scripts/` path.

## Pre-1.0 history

- `0.1.0` — color-first core with the Tailwind ramps and a thin semantic
  mapping, the personal-series theme, governance through `DEC-011`, and the
  agent guideline. The system was then named DabWave. A foundation test page
  and six component drafts were built; all moved to `archive/0.1.0/` at 1.0.0.
