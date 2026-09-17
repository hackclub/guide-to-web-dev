# guide-to-web-dev

The Hack Club's Guide to Web Development:

There are different approaches on getting started with coding, so the purpose of this guide is to share the Hack Club way on how to learn to code.

I hope everyone who reads this guide finds it as helpful as it was for me writing it. 

> "Learning to code is uniquely like gaining a superpower: it converts you from a consumer to a creator. Suddenly, computers become a tool for creating."


Here's some useful links for other guides made by the Hack Club community:

- [Some Assembly Required](https://github.com/hackclub/some-assembly-required)
> An approachable introduction to assembly.

- Hack Club guide to Game Development
> (Work in progress, on the meanwhile, check out [Sprig](https://github.com/hackclub/sprig)).

## Reading the guide

This repo is a small site: a sidebar lists guides, the main panel renders the selected one from a plain Markdown file in `guide/`.

Browsers block `fetch()` of local files opened via `file://`, so serve the folder over HTTP instead of double-clicking `index.html`:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

(Any static file server works — `npx serve`, VS Code's Live Server, etc. GitHub Pages or any static host serves it correctly with no extra setup.)

## Adding a guide

1. Add a Markdown file to `guide/`, e.g. `guide/06-accessibility.md`.
2. Add one entry to `guide/manifest.json`:

   ```json
   { "section": "Going Further", "file": "06-accessibility.md", "title": "Accessibility" }
   ```

No build step — the sidebar groups entries by `section` in the order they appear in the manifest, and guide files can cross-link each other with `[text](#file.md)`.
