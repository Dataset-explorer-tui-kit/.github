# Organization diagrams

Two views of the kit, rendered with Pele:

- `kit-overview.mmd`: what you bring, what the kit provides, and what you get.
- `kit-workflow.mmd`: an illustrative book-search request, from setup to verified
  results and a Git commit explaining why notes need to be searchable.

Both show the longer-term goal in plain language: save lessons, compare examples,
and test better choices. DSPy is future work, not installed automation. The profile
text supplies the more detailed evaluation and safety requirements.

The profile uses `<picture>` to select explicit light/dark SVGs with
`prefers-color-scheme`. Each image has its own background and readable foregrounds;
the light SVG is the fallback. No JavaScript or runtime render service is needed.
The browser's color preference selects the image; a manually overridden GitHub
theme can differ from that preference.

## Reproduce

Use Node 20+ and an existing Pele installation. From this directory:

```sh
PELE_MODULE=/absolute/path/to/pele/dist/pele.js node render-diagrams.mjs
```

Alternatively, with `pele` installed in Node's package resolution path:

```sh
node render-diagrams.mjs
```

This generates the four `*-light.svg` / `*-dark.svg` files from the two sources.
The renderer resolves SVG paint variables for compatibility with raster tools.
For a visual check, rasterize each output with `rsvg-convert` and inspect the PNG.

Content was checked against the main kit README, `docs/PROJECT-WORKFLOW.md` and
`docs/RECIPE-SELECTION.md`. App-specific DuckDB and cover features are not presented
as universal upstream capabilities. Project checkpoints require the agent-managed
workflow; publishing is optional and never an automatic checkpoint side effect.
