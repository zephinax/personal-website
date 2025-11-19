A minimal portfolio, component registry, and blog to showcase my work as a Design Engineer.

Check out the live site: [zephinax.com](https://zephinax.com)

### Stack

- Next.js 16
- Tailwind CSS v4
- shadcn/ui

### Featured

- Clean & modern design
- Light/Dark themes
- vCard integration
- SEO optimized ([JSON-LD schema](https://json-ld.org), sitemap, robots)
- AI-ready with [/llms.txt](https://llmstxt.org)
- Spam-protected email
- Installable as PWA

### Blog

- Supports MDX & Markdown
- Raw `.mdx` endpoints for AI readability
- Syntax highlighting for clear code presentation
- Dynamic OG images for rich link previews
- RSS feed for easy content distribution

### Registry

Easily build and distribute reusable components, hooks, and pages using a custom registry powered by the [shadcn CLI](https://ui.shadcn.com/docs/cli).

Each entry is well-documented and includes:

- Live preview & code snippets
- Beautiful, readable code blocks
- One-click command blocks (pnpm, npm, yarn, bun)

#### Component Registry Overview

The registry powers the reusable UI catalogue that feeds the shadcn-style CLI experience. It lets you preview and install the same polished components showcased on the site without copying code manually.

**Includes**
- Component source folders under `src/registry/[component-name]/` (React 19 + Tailwind v4 ready)
- Hooks, blocks, libraries, and examples referenced in `registry-components.ts`, `registry-hook.ts`, `registry-blocks.ts`, `registry-lib.ts`, and `registry-examples.ts`
- Demo files inside `src/registry/examples/` so every entry ships with a live preview
- Auto-generated output in `src/__registry__/` and `public/r/*.json` (never edit by hand)

**How it works**
1. Author or update component source files in `src/registry/`.
2. Declare each entry in the corresponding registry index file with its metadata, dependencies, and assets.
3. Run `pnpm registry:internal:build` followed by `pnpm registry:build` to regenerate the auto-generated output.
4. Consumers (including this site) load those generated assets to render previews or install entries through the shadcn CLI.

**Customizing for your brand**
- Set `REGISTRY_NAMESPACE` and `REGISTRY_NAMESPACE_URL` in `.env` (e.g., `@zephinax`, `https://zephinax.com/r/{name}.json`).
- Replace or add component folders and update the registry index files with your entries.
- Refresh demos in `src/registry/examples/` to show your copy and assets.
- Rerun the registry build commands so the generated JSON and React stubs reflect your namespace.

## Development

Please refer to the [Development Guide](./DEVELOPMENT.md) for more details.

## License

Licensed under the [MIT license](./LICENSE).

You're free to use my code! Just make sure to <ins>remove all my personal information</ins> before publishing your website. It's awesome to see my code being useful to someone!

## Star History

[![Star History](https://starchart.cc/ncdai/chanhdai.com.svg?variant=adaptive&line=%23d37f2c)](https://starchart.cc/ncdai/chanhdai.com)

## Acknowledgments

- [React](https://react.dev)
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Motion](https://motion.dev)
- [shadcn/ui](https://ui.shadcn.com)
- [Aceternity UI](https://ui.aceternity.com)
- [Kibo UI](https://www.kibo-ui.com)
- [Lucide](https://lucide.dev)
- [Fumadocs](https://fumadocs.dev)
- And many other open-source libraries used in `package.json`
