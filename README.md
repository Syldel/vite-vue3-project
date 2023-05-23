## Starterkit

### Gitlab Template

[Create a repo from this template on Gitlab](https://gitlab.com/atecna-frontend/formations/starterkit/export).

```bash
cd your-project-name
yarn install # If you don't have yarn installed, run: npm install -g yarn
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the title in `index.html`
- [ ] Remove tests in test directory and/or write your own

And, enjoy :)

## Usage

### Development

Just run and visit http://localhost:5173/

```bash
yarn dev
```

### Build

To build the App, run

```bash
yarn build
```

And you will see the generated file in `dist` that ready to be served.

### Page

Deploy manually your pages on pipeline succeed, then visit (replace with your repository path): https://atecna-frontend.gitlab.io/formations/starterkit

## Wiki

[Wiki](https://gitlab.com/atecna-frontend/formations/starterkit/-/wikis/home)

## Figma

- 🔧 Wireframe + User flow : [Voir le Fig Jam](https://www.figma.com/file/FSpJMub3WPbZILzmDPanfo/Atelier-Wireframe---Formation-front-end?node-id=0%3A1)
- 🎉 UI kit (Logo/Styles/Icons/Typographie/Buttons/Components) : [Voir l'UI Kit](https://www.figma.com/file/uj1V4siWQmwfGuNuFDHvnb/Library---Formation?node-id=20%3A4107)
- 🎨 Maquettes Def (Ecrans de l'application) : [Voir les Maquettes](https://www.figma.com/file/RnuECqTTyGvtItflD3TKVk/%5BWEB-SPORTIVE%5D-Front-end-starter?node-id=56%3A281)
- 🎮 Prototype : [Voir le Prototype](https://www.figma.com/proto/RnuECqTTyGvtItflD3TKVk/%5BWEB-SPORTIVE%5D-Front-end-starter?page-id=56%3A248&node-id=201%3A1767&viewport=279%2C-3022%2C0.25&scaling=scale-down&starting-point-node-id=201%3A1767)

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
