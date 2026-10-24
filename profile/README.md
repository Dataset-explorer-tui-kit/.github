# Dataset Explorer TUI Kit

Small, focused terminal explorers for datasets — built on the Charm ecosystem.

The reusable kit provides a starting point; each explorer lives in its own
repository and can evolve independently. No LLM is required at runtime.

## The whole kit

Have a dataset that is awkward to explore? Give it to a coding agent with a
question—for example, “Find books where the notes mention watermills.” The kit
gives the agent ready-made parts to build a small terminal app for that task,
rather than starting from scratch. You then use the app yourself.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Dataset-explorer-tui-kit/.github/main/profile/assets/kit-overview-dark.svg">
  <img alt="Build time: an agent fits the kit to your question, tests the app and saves why. Run time: you browse and search local records and export results without AI. Future: review Git history and outcomes across projects, then test DSPy proposals before use." src="https://raw.githubusercontent.com/Dataset-explorer-tui-kit/.github/main/profile/assets/kit-overview-light.svg">
</picture>

**Use what fits your data:** tables, feeds, or archival hierarchies. Keep the
source unchanged, preserve its structure, and export only the actual matches.
A database is not mandatory; large-data adapters are deliberate project choices,
not implied features of every recipe.

## From a dataset to your own explorer

Give a coding agent a local dataset, a research question, and the kit's
[workflow skill](https://github.com/Dataset-explorer-tui-kit/dataset-explorer-kit/blob/main/skills/dataset-explorer/SKILL.md).
The agent uses the kit rather than starting an interface from scratch.

**A concrete example:** you want books about watermills, but the topic may appear
only in descriptive notes. The agent makes those notes searchable, checks that
the book is found, and saves why that choice mattered. This is an illustrative
example, not a claim that every catalogue has these fields.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Dataset-explorer-tui-kit/.github/main/profile/assets/kit-workflow-dark.svg">
  <img alt="Example: ask for books on watermills. The agent sees titles and notes, makes notes searchable, tests a notes-only match, and commits the change with the reason that titles missed books. You read and export results. Later, reviewed examples could help DSPy choose better search fields for unseen requests." src="https://raw.githubusercontent.com/Dataset-explorer-tui-kit/.github/main/profile/assets/kit-workflow-light.svg">
</picture>

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

<sub>Both diagrams are rendered with Pele, with light and dark variants selected by your browser's color preference. [Editable sources and rendering instructions](assets/DIAGRAMS.md).</sub>

## A project history that explains why

For an authorized standalone project, the agent creates the folder, Git repo,
active `AGENTS.md`, initial dataset profile, and decision/checkpoint helpers.
You describe what you want; **the agent takes the decision notes from the session**.
Reasons distinguish explicit user intent, agent inference, and unknowns.

Every meaningful increment gets required tests/vet/build and an explicit-file
local commit containing its decision and verification receipt. Failed checks stop
the checkpoint; no background watcher or automatic push is installed. Decision
notes can later be compared across projects; no DSPy optimizer is installed yet.

**CI and Dependabot are included automatically in every new scaffold.** CI checks
formatting, module consistency, vet, tests, race detection and build using only
fixtures. Dependabot proposes Go and GitHub Actions updates for review, without
auto-merging. Publishing is not complete until actual GitHub CI has been checked.

Before publishing a new explorer here, record the actual binary with **VHS** on
reviewed safe data, embed the GIF in its README, retain organization attribution,
and update the repository guide below. Visibility stays private unless public
publication is explicitly approved.

The kit demo in the repository section below contains only fictional records,
not project datasets or session history.
See the kit's [project workflow](https://github.com/Dataset-explorer-tui-kit/dataset-explorer-kit/blob/main/docs/PROJECT-WORKFLOW.md)
and [recipe-selection guide](https://github.com/Dataset-explorer-tui-kit/dataset-explorer-kit/blob/main/docs/RECIPE-SELECTION.md).
The workflow above includes checkpoints and separately authorized publication;
the project guide explains their safety boundaries in detail.

## The long-term game: project history becomes learning material

**Git is more than a backup: it is the trace from a research request to a
decision, a code or recipe change, and its verification.** In agent-managed
projects, structured decision notes and human-readable commit bodies preserve
the request, the chosen approach, why it was chosen, alternatives, evidence,
and check results. User intent, agent inference, and unknown reasons stay distinct.

The intended progression is:

1. **Capture evidence now.** Keep versioned changes, decision notes, verification
   receipts, and honestly recorded outcomes. A passing test is not proof that a
   research task succeeded; failures and user corrections matter too.
2. **Compare projects deliberately.** Review and redact histories, identify repeated
   decisions, and turn relevant examples into task-specific evaluation cases.
   Session notes are observations—not automatically trustworthy training labels.
3. **Establish a baseline.** Define success criteria, measure today's recipe-selection
   workflow, and reserve independent held-out cases. Split related projects and
   near-duplicate tasks carefully to avoid leaking answers into evaluation.
4. **Experiment with DSPy later.** Optimize build-time recipe proposals and workflow
   choices against reviewed examples, then evaluate on unseen tasks. Keep unsupported
   capabilities explicit. Never optimize away source safety, required checks,
   authorization, or honest reporting.
5. **Adopt only demonstrated improvements.** Review the proposed change, version the
   workflow and evaluation results, and keep rollback possible. Broader automation
   follows evidence—not simply a growing commit count.

**Available now:** agent-managed Git checkpoints, structured decision records,
and initial manual recipe-selection cases. **Not installed yet:** an automatic
cross-project collector, outcome-labeling pipeline, or DSPy optimizer. The eventual
learning loop helps build better explorers; it does not put an LLM inside them.

## Repositories

| Repository | Purpose |
| --- | --- |
| **[dataset-explorer-kit](https://github.com/Dataset-explorer-tui-kit/dataset-explorer-kit)** | Main repository: reusable kit, recipe selection, agent-managed decision history, scaffolding and VHS demos. |
| [cbk-explorer](https://github.com/Dataset-explorer-tui-kit/cbk-explorer) | A dataset-specific explorer for the Dutch children's book catalogue. |
| [tg-osint](https://github.com/Dataset-explorer-tui-kit/tg-osint) | A standalone Telegram OSINT reader. |
| [dutch-news-explorer](https://github.com/Dataset-explorer-tui-kit/dutch-news-explorer) | A read-only explorer for 255,524 Dutch news articles (2010–2023): the default path is a derived, read-only DuckDB snapshot with lazy paging and full-text search; browse by date, title and category, inspect the exact source line and export the matches. |
| [ait-explorer](https://github.com/Dataset-explorer-tui-kit/ait-explorer) | A read-only explorer for the AIT incident dataset (ISD; 544 incidents of authoritarian interference): scan year, actor → target country and title, read summary and cited sources, and export the matches. Ships a table projection and a lossless JSONL view; refresh is a separate script, the app itself stays offline. |

### Dataset Explorer Kit — the starting point

Search a fictional book catalogue, find a topic mentioned only in notes, and
inspect the fields and original record.

[![Dataset Explorer Kit: browse fictional books, search notes, and inspect fields and source.](https://raw.githubusercontent.com/Dataset-explorer-tui-kit/.github/main/profile/assets/recipe-selection.gif)](https://raw.githubusercontent.com/Dataset-explorer-tui-kit/.github/main/profile/assets/recipe-selection.gif)

[Open animation](https://raw.githubusercontent.com/Dataset-explorer-tui-kit/.github/main/profile/assets/recipe-selection.gif) · [Repository](https://github.com/Dataset-explorer-tui-kit/dataset-explorer-kit)

### CBK Explorer — children's books

Search the catalogue for Rosa Parks and view the selected book's cover and details.

[![CBK Explorer: search for Rosa Parks and display the book cover and catalogue details.](https://raw.githubusercontent.com/Dataset-explorer-tui-kit/.github/main/profile/assets/cbk-explorer.gif)](https://raw.githubusercontent.com/Dataset-explorer-tui-kit/.github/main/profile/assets/cbk-explorer.gif)

[Open animation](https://raw.githubusercontent.com/Dataset-explorer-tui-kit/.github/main/profile/assets/cbk-explorer.gif) · [Repository](https://github.com/Dataset-explorer-tui-kit/cbk-explorer)

### TG OSINT — Telegram posts

Move between feeds, conflict areas, channels and individual posts. Source labels
and draft assessments remain distinct from verified facts.

[![TG OSINT: browse feeds, conflict areas and channels, search posts, and inspect a post and its source context.](https://raw.githubusercontent.com/Dataset-explorer-tui-kit/.github/main/profile/assets/tg-osint.gif)](https://raw.githubusercontent.com/Dataset-explorer-tui-kit/.github/main/profile/assets/tg-osint.gif)

[Open animation](https://raw.githubusercontent.com/Dataset-explorer-tui-kit/.github/main/profile/assets/tg-osint.gif) · [Repository](https://github.com/Dataset-explorer-tui-kit/tg-osint)

### Dutch News Explorer — newspaper articles

Find articles about Keukenhof, narrow the search, inspect field statistics, and
read the exact source line. This demo shows the read-only DuckDB version.

[![Dutch News Explorer: search NOS articles about Keukenhof, narrow the results, and inspect fields and the original source line.](https://raw.githubusercontent.com/Dataset-explorer-tui-kit/.github/main/profile/assets/dutch-news-explorer.gif)](https://raw.githubusercontent.com/Dataset-explorer-tui-kit/.github/main/profile/assets/dutch-news-explorer.gif)

[Open animation](https://raw.githubusercontent.com/Dataset-explorer-tui-kit/.github/main/profile/assets/dutch-news-explorer.gif) · [Repository](https://github.com/Dataset-explorer-tui-kit/dutch-news-explorer)

### AIT Explorer — interference incidents

Scan year, actor → target country and title; search narrows the list, and field
statistics plus the original source line are one Tab away. The recording uses a
fictional six-record fixture, not the live dataset.

[![AIT Explorer: browse fictional interference records, search Syldavia to narrow six records to two, inspect field statistics and read the original source line.](https://raw.githubusercontent.com/Dataset-explorer-tui-kit/.github/main/profile/assets/ait-explorer.gif)](https://raw.githubusercontent.com/Dataset-explorer-tui-kit/.github/main/profile/assets/ait-explorer.gif)

[Open animation](https://raw.githubusercontent.com/Dataset-explorer-tui-kit/.github/main/profile/assets/ait-explorer.gif) · [Repository](https://github.com/Dataset-explorer-tui-kit/ait-explorer)

These are existing recordings of the actual apps, not mockups. The previews are
public here; opening the private repositories still requires access.
If GitHub pauses an animation, use **Open animation** to view the GIF directly.

Start with the **[main README](https://github.com/Dataset-explorer-tui-kit/dataset-explorer-kit#readme)**
for an overview of the kit and its applications.

These repositories are currently private; their links require access.

A database stays optional in the kit. `dutch-news-explorer` shows the deliberate
exception: when its in-memory CSV path measured about 1.8 GB, it derived a
read-only DuckDB snapshot outside Git, keeps the unchanged CSV for exact source
lines, and pages records with bounded memory. The in-memory CSV fallback remains
available explicitly.
