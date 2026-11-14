# AGENTS.md — DabDesign

## Role

DabDesign is a **design dependency repository**, not a web application. It
defines the shared design contract for DabAZ web projects: tokens, typography,
space and shape, layout, icons, accessibility, and component status. It ships
no framework, build chain, CI, deploy target, or package manifest.

## Pins and entry points

| Dependency | Pin | Entry point |
|---|---|---|
| DabAgents | `ebd76db1e9c6c65401e41180fcf75c48c23c50e4` | [DabAgents operating rules](https://github.com/dabaz-official/DabAgents/blob/ebd76db1e9c6c65401e41180fcf75c48c23c50e4/rules/01-operating.md) |
| DabFonts | `v1.0.0` | `GUIDELINE.md` |

Start UI work at this repository's `GUIDELINE.md`. Start typography or font
loading work at DabFonts' `GUIDELINE.md`. Follow the pin, not `main`.

Conflict order: the consuming project's `AGENTS.md`, then this repository's
`GUIDELINE.md` / `core.md` / `GOVERNANCE.md`, then DabAgents.

## Read order

1. `GUIDELINE.md` — agent entry point.
2. `core.md` — normative token contract.
3. `GOVERNANCE.md` — principles and decisions.
4. `DabDesign.md` — only for `dabaz.me` and DabResume.
5. `CHANGELOG.md` and `ROADMAP.md` — release state and next work.

`archive/` and `references/third-party/` are not normative.

## Commands

```sh
node scripts/hue-catalog.mjs        # regenerate palettes/ and verify contrast
node --check scripts/hue-catalog.mjs
python3 -m http.server 8000         # preview palettes/ at /palettes/preview.html
```

## Definition of Done

- [ ] The change is in the layer that owns it: core, site theme, or site-owned
      component.
- [ ] `node scripts/hue-catalog.mjs` exits 0 with 288 checks and 0 failures.
- [ ] `node --check scripts/hue-catalog.mjs` passes.
- [ ] No raw values, local scale, unapproved token, or component fork.
- [ ] `core.md`, `GUIDELINE.md`, `GOVERNANCE.md`, and the theme document agree.
- [ ] No legacy system name, decision prefix, Windows path, or pre-1.0 path in
      a normative file.
- [ ] For a consuming UI change: every width in `GUIDELINE.md` §7, both themes,
      keyboard operation, and measured contrast were verified.
- [ ] Report actual commands and results, not estimates.

## Versioning

Versions are this repository's own; they do not track DabAgents or DabFonts.
Consumers pin all three independently.

- **Major** — a token is renamed or removed, a component's API changes, or a
  `type-*` value moves.
- **Minor** — a component, token, or pattern is added.
- **Patch** — documentation, comments, or an internal refactor with no change
  to a published value.

## Exceptions

Recorded under DabAgents rule 04 §9. Review date: 2027-11-14.

| Area | Exception | Reason |
|---|---|---|
| Stack | No framework, build, package manager, or package manifest | The repository is documentation and one zero-dependency script |
| CI | No CI | No build or test pipeline; run the commands above locally |
| Tests | No unit-test suite | Contrast is verified by `scripts/hue-catalog.mjs`; documentation has no runtime |
| Deploy | No deploy target | Consumers pin the repository; there is no hosted artifact |
| Formatting | No formatter or linter gate | Markdown and one dependency-free script; keep the diff reviewable |

## Language

Repository artifacts — documents, comments, and commit messages — are in
English. Reply in the user's language. The primary locale of a consuming site
is declared in that project's `AGENTS.md`; this repository has no user-facing
surface.
