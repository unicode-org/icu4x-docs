# Starlight Starter Kit: Basics

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```
npm create astro@latest -- --template starlight
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/starlight/tree/main/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/starlight/tree/main/examples/basics)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/withastro/starlight&create_from_path=examples/basics)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwithastro%2Fstarlight%2Ftree%2Fmain%2Fexamples%2Fbasics&project-name=my-starlight-docs&repository-name=my-starlight-docs)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## ICU4X Docs Additional Setup

### Installing integration plugins for ICU4X customizations

The following commands must be run to install additional plugins, etc. that are needed for ICU4X customizations to the Starlight theme:

1. Install [Starlight Utils](https://starlight-utils.pages.dev/) to enable a top page bar for persistent quick [navigation links](https://starlight-utils.pages.dev/utilities/nav-links/):
    ```
    npm i @lorenzo_lewis/starlight-utils
    ```
1. Install [Starlight Links Validator](https://starlight-links-validator.vercel.app/) to enable automatic checking of internal links
    ```
    npm i starlight-links-validator@0.14.0
    ```

    Thereafter, production builds (ex: via `npm run build`) will automatically check the validity of internal links.

    Note: using version 0.14.0 gives you a report of which links are broken when running the production build. But later versions like 0.14.2 and 0.14.3 may not.

    Note: You may want/need to run `npm audit fix` to fix dependency problems in the npm installation.

    Note: if you configure the plugin to allow relative URLs, its behavior will then change to *ignore* the validation of relative links.
    In this way, it appears that the plugin is opinionated on not fully supporting relative links.

### Install MDX and plugins for AstroJS

To get the AstroJS [component Steps](https://starlight.astro.build/components/steps/) that does nice formatting of step-by-step instructions,
installation the AstroJS integration for either of its Markdown-extension formats,
[MDX](https://docs.astro.build/en/guides/integrations-guide/mdx/) or [Markdoc](https://docs.astro.build/en/guides/integrations-guide/markdoc/),
is required.

Since MDX looks most like Markdown, we will use that.

Both file formats require renaming the file extension from `.md` -- ex: to either `.mdoc` or `.mdx`.

#### Install MDX

To install MDX:

```
npm install @astrojs/mdx@<appropriate-version>
```

Judging by the [different versions listed for `@astrojs/mdx` listed on npm](https://www.npmjs.com/package/@astrojs/mdx/v/4.1.0?activeTab=versions),
and by inspecting the `package.json` for each version,
the version 3.x series of `@astrojs/mdx` is compatible with versions of Astro in the 4.x range,
whereas the version 4.x series of `@astrojsx/mdx` is compatible only with Astro 5.x and up.

So if you have Astro 4.15.3, then after finding an appropriate corresopnding version, the command would look like:

```
npm install @astrojs/mdx@3.1.9
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
