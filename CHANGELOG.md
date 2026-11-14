# Changelog

All notable changes to this repository are recorded here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versions follow
semantic versioning.

## 1.0.0 — 2026-11-14

First stable release, aligned with DabAgents 1.0.0.

### Breaking changes

- The system name is unified as **DabDesign**. The former name is retired from
  every normative file, generated artifact, and preview.
- Typography moves from the self-hosted Inter + Noto Sans SC stack to
  **Dab Sans** and **Dab Mono** from DabFonts. Font files, family stacks,
  `@font-face`, `font-synthesis`, `font-display`, preload, and allowed weights
  are now DabFonts' responsibility.
- Layout parameters move into this repository: body measure **34–38em**,
  first-line indent **1.88em**, and the `type-body` line height **1.8** are
  defined in `core.md` §4.2 and §7, inside DabFonts' 1.75–1.85 body range.
- The previous component drafts, foundation page, earlier documents, and
  retired scripts move to `archive/0.1.0/`. `components/` no longer exists at
  the repository root; its files and previews are not the current contract.
- Voice and tone leave the personal-series theme. DabAgents rule 07 owns voice
  and microcopy; `DabDesign.md` links to it.
- Version `0.1.0` becomes `1.0.0`.

### Added

- `README.md`, `AGENTS.md`, and this changelog.
- `GUIDELINE.md` dependencies and ownership section, routing typography to
  DabFonts and exact scale values to `core.md` §4.
- `core.md` §7 measure and first-line indent, with the 0.94em Han derivation.
- `archive/README.md`, marking the archived tree as non-normative.
- `DEC-012` (1.0.0 release scope, archive, voice handover) and `DEC-013`
  (twelve hue ramps and aliases carried forward, effective 1.0.0).

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
  Tailwind v4 ramp values (`blue-700` `#1447E6`, `blue-300` `#8EC5FF`) with
  re-measured ratios.
- `ROADMAP.md` is replaced by a short post-1.0 plan.
- `scripts/hue-catalog.mjs` emits `DEC-013` and a DabDesign title; regenerated
  `palettes/catalog.md` and `palettes/ramps.json`.
- `palettes/preview.html` and `palettes/preview.css` are self-contained, so the
  catalog no longer depends on the archived foundation page.
- `references/third-party/README.md` uses the DabDesign name.

### Removed

- Duplicated branch, commit, release, CI, and quality-gate process from
  `GUIDELINE.md`; those belong to DabAgents rules 03 and 04.
- Inter and Noto Sans SC loading details, fallback stacks, `font-display`, and
  preload rules from `core.md`; DabFonts owns them.
- The `font-synthesis` allowance that conflicted with DabFonts'
  `font-synthesis: none`.
- The former decision-ID prefix and the pre-1.0 progress log from the current
  documents. The archived tree and git history remain the record.
- The retired palette scripts from the live `scripts/` path.

## Pre-1.0 history

- `0.1.0` — color-first core with the Tailwind ramps and a thin semantic
  mapping, the personal-series theme, governance through `DEC-011`, and the
  agent guideline. The system was then named DabWave. A foundation test page
  and six component drafts were built; all moved to `archive/0.1.0/` at 1.0.0.
