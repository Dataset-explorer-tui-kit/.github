# Dataset Explorer TUI Kit

Small, focused terminal explorers for datasets — built on the Charm ecosystem.

The reusable kit provides a starting point; each explorer lives in its own
repository and can evolve independently. No LLM is required at runtime.

## From a dataset to your own explorer

Give a coding agent a local dataset, a research question, and the kit's
[workflow skill](https://github.com/Dataset-explorer-tui-kit/dataset-explorer-kit/blob/main/skills/dataset-explorer/SKILL.md).
The agent uses the kit rather than starting an interface from scratch.

![Agent-assisted workflow: provide a dataset and research question; the agent inspects a bounded sample, configures a recipe or scaffolds a focused app, then verifies it. You browse, search, inspect, and export in the resulting terminal explorer.](https://raw.githubusercontent.com/Dataset-explorer-tui-kit/.github/main/profile/assets/kit-workflow.svg)

**The agent helps build it. It does not run inside it.** The resulting explorer
needs no LLM or Hermes at runtime. Original datasets stay unchanged; selected-cover
fetching is an optional feature, not a dataset download pipeline.

### Ask your agent

> Use the Dataset Explorer Kit to inspect my local dataset at `[path]` and build
> an explorer for `[research question]`. Read the bundled skill first, preserve
> the original data, prefer a recipe, and scaffold a standalone app only when
> needed. Verify the result with tests and a real terminal run.

CSV/TSV tables, JSONL records and EAD archival hierarchies have existing readers.
Other formats or custom behavior may need a focused adapter. A recipe is often
enough: a new dataset does not automatically need a new repository.

<sub>Diagram rendered with Pele. Editable source: [kit-workflow.mmd](assets/kit-workflow.mmd).</sub>

## Repositories

| Repository | Purpose |
| --- | --- |
| **[dataset-explorer-kit](https://github.com/Dataset-explorer-tui-kit/dataset-explorer-kit)** | Main repository: the reusable kit, documentation, examples, and scaffolding. |
| [cbk-explorer](https://github.com/Dataset-explorer-tui-kit/cbk-explorer) | A dataset-specific explorer for the Dutch children's book catalogue. |
| [tg-osint](https://github.com/Dataset-explorer-tui-kit/tg-osint) | A standalone Telegram OSINT reader. |

Start with the **[main README](https://github.com/Dataset-explorer-tui-kit/dataset-explorer-kit#readme)**
for an overview of the kit and its applications.

These repositories are currently private; their links require access.
