# Vue3 project

## Checklist

J'ai expérimenté sur ce projet les choses suivantes :

- [X] vue-router
- [X] @antfu/eslint-config
- [X] @vueuse/core
- [X] vee-validate
- [X] yup
- [X] @vue/test-utils
- [X] unplugin-auto-import
- [X] unplugin-vue-components
- [X] API Composition
- [X] Teleport
- [X] Transition
- [X] Slots


## Install

```bash
cd vite-vue3-project
npm install
```

## Usage

### Development

Just run and visit http://localhost:5173/

```bash
npm run dev
```

### Build

To build the App, run

```bash
npm run build
```

And you will see the generated file in `dist` that ready to be served.

## Déploiement sur GitHub Pages

Ce guide explique les étapes à suivre pour configurer le déploiement automatique de ton projet sur GitHub Pages.

### GitHub Pages Build and deployment

1. Va dans les **Settings** de ton repository sur GitHub.
2. Dans le menu de gauche, descends jusqu'à la section **Pages**.
3. Dans la section **Source**, sélectionne la branche **`gh-pages`** comme source.
4. Choisis le dossier **`/ (root)`**.
5. Clique sur **Save**.

### 🌐 Définir VITE_BASE_PATH sur GitHub

Pour que le chemin des assets fonctionne en production sur GitHub Pages :

1. Aller dans **Settings > Secrets and variables > Actions**.
2. Onglet **Variables** → **New repository variable**.
3. Nom : `VITE_BASE_PATH`.
4. Valeur : `/vite-vue3-project/`.

Ensuite, dans le fichier `.github/workflows/deploy.yml`, ajouter la variable au moment du build :

```yaml
- name: Build the app
  run: npm run build
  env:
    VITE_BASE_PATH: ${{ vars.VITE_BASE_PATH }}
```

### 🔐 Autoriser GitHub Actions à déployer avec `GITHUB_TOKEN`

Pour que l'action GitHub puisse **pousser vers la branche `gh-pages`**, il faut autoriser le `GITHUB_TOKEN` à écrire dans le dépôt.

✅ Étapes à suivre

1. Ouvrir le dépôt sur **GitHub**.
2. Aller dans **Settings** → **Actions** → **General**.
3. Faire défiler jusqu’à la section **"Workflow permissions"**.
4. Sélectionner **"Read and write permissions"**.
5. Cliquer sur **Save**.

---

### 💡 Pourquoi c’est nécessaire ?

Par défaut, GitHub donne au `GITHUB_TOKEN` seulement les permissions en lecture.  
Mais pour **déployer sur GitHub Pages**, l'action a besoin de **pousser le contenu du dossier `/build`** dans la branche `gh-pages`.

Cette autorisation permet au bot `github-actions[bot]` de :

- Créer ou mettre à jour la branche `gh-pages`.
- Déployer automatiquement à chaque push sur `main`.

---

### 📦 Exemple d'utilisation

```yaml
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./build
```

### Notes

- **Vérifie que le fichier `vite.config.ts` est bien configuré pour un déploiement sur GitHub Pages** (en ajoutant la ligne `base: '/<ton-repository>/'`).
- Assure-toi que le workflow GitHub Actions fonctionne correctement en poussant sur la branche `main` et en vérifiant que les fichiers sont correctement déployés sur la branche `gh-pages`.

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
