<!-- .slide: class="transition bg-white" -->

# Librairie SFEIR School Theme

##==##

<!-- .slide: data-type-show="restit" -->

# Utilisation de la libraire

Les slides sont basés sur le moteur de présentation :

![center h-400](./assets/images/revealjs-logo.png)

(framework html/JS/CSS/markdown de gestion de slides)

##==##

<!-- .slide: data-type-show="prez" -->

# Utilisation de la libraire

![center h-700](./assets/images/revealjs-logo.png)

##==##

<!-- .slide: data-type-show="restit" -->

# Sous le capot

Le thème sfeir school thème apparait comme unique point d'entrée pour nos slides mais utilise en réalité les briques suivantes :

- RevealJS (Moteur de slide)
- LitHTML (Rendu dynamique des sections de slides)
- HighlightJS (Librairie de coloration syntaxique)
- Feather-icons (Librairie graphiques d'icones comparable à fontAwesome)

##==##

<!-- .slide: data-type-show="prez" class="flex-row" -->

# Sous le capot

![center h-400](./assets/images/revealjs-logo.png)
![center h-400](./assets/images/logo-lit.png)
![center h-400](./assets/images/highlightjs-logo.png)
![center h-400](./assets/images/feather-logo.png)

##==##

<!-- .slide: class="transition" -->

# Utilisation & Installation - From Scratch

## A passer si on utilise le template

##==##

<!-- .slide: class="with-code" data-type-show="prez" -->

# Utilisation

Possibilité d'être utilisé en dehors from scratch

```sh
# run
$npm install sfeir-school-theme
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="with-code" data-type-show="restit" -->

# Utilisation - Installation

Pour utiliser le thème en dehors du template sfeir school préparamétré, il faut juste dépendre du package `sfeir-school-theme`

```sh
# run
$npm install sfeir-school-theme
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="with-code" data-type-show="restit"  -->

# Utilisation - Préparation

Il est conseillé de mettre le bundle du sfeir-school-theme dans un répertoire `web_modules` à la racine des slides. Voici un exemple basé sur le paquet `shelljs` que l'on peut déclancher sur l'étape `prepare`.

prepare-script.js

```js
const shelljs = require('shelljs');

shelljs.rm('-rf', './web_modules');
shelljs.mkdir('-p', './web_modules/sfeir-school-theme');
shelljs.cp('-rf', './node_modules/sfeir-school-theme/*', './web_modules/sfeir-school-theme');
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" data-type-show="restit" -->

# Utilisation - Configuration du package.json

Voici un possible paramétrage du package.json

```js
"scripts": {
    "sass": "sass ./scss/slides.scss:./css/slides.css --source-map --watch",
    "sass-once": "sass ./scss/slides.scss:./css/slides.css --source-map",
    "test": "echo \"Error: no test specified\" && exit 1",
    "serve": "live-server --port=4242 --open=\"./index.html\" --watch=\"markdown,scripts/\"",
    "start": "parallelshell \"npm run serve\" \"npm run sass\"",
    "prepare": "node ./scripts/dont-touch/prepare-script.js"
  },
  "dependencies": {
    "sfeir-school-theme": "^3.0.0"
  },
  "devDependencies": {
    "chokidar-cli": "^3.0.0",
    "live-server": "^1.1.0",
    "parallelshell": "3.0.1",
    "sass": "^1.51.0",
    "shelljs": "^0.8.5"
  }
```

<!-- .element: class="full-height" -->

##==##

<!-- .slide: class="with-code" data-type-show="restit"  -->

# Utilisation - Index.html

```html
...
<head>
  ...
  <!-- SFEIR Theme includes -->
  <script type="module" src="./scripts/slides.js"></script>
  <link rel="stylesheet" type="text/css" href="./web_modules/sfeir-school-theme/sfeir-school-theme.css" id="theme" />
</head>
<body>
  <div class="reveal">
    <!-- Any section element inside of this container is displayed as a slide -->
    <div class="slides" data-type-show="prez"></div>
  </div>
</body>
...
```

##==##

<!-- .slide: class="with-code" data-type-show="restit" -->

# Utilisation - slide.js

Ce fichier permet de générer les slides dynamiquement les bonnes briques html nécessaire à l'initialisation du template

```js
import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';
function formation() {
  return [
    ...['00-school/00-TITLE.md'], //
  ].map((slidePath) => {
    return { path: slidePath };
  });
}
SfeirThemeInitializer.init(formation);
```

##==##

<!-- .slide: class="with-code" data-type-show="prez" -->

# Utilisation - slide.js

Choix des markdown

<!-- prettier-ignore -->
```js[1-2|4|3-7|8]
import { SfeirThemeInitializer } 
  from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';
function formation() {
  return [ ...['00-school/00-TITLE.md'], ].map((slidePath) => {
    return { path: slidePath };
  });
}
SfeirThemeInitializer.init(formation);
```

<!-- .element: class="big-code max-height" -->

##==##

<!-- .slide: class="transition" -->

# Utilisation - Après installation

##==##

<!-- .slide: class="with-code" data-type-show="restit" -->

# Utilisation pour un dev front

Pour utiliser le thème, il suffit d'avoir un node > 16 et de lancer depuis la ligne de commande :

```sh
$npm start
```

<!-- .element: class="big-code" -->

Il suffit ensuite de naviguer sur l'url suivante : http://localhost:4242. Le livereload sera branché automatiquement et les slides se recharcheront à chaque changement effectué dans les markdowns.

##==##

<!-- .slide: class="with-code" data-type-show="prez"-->

# Utilisation pour un dev front

**Node > 16 !**

```sh
$npm start
```

<!-- .element: class="big-code" -->

http://localhost:4242

<!-- .element: class="fragment" -->

Notes:
Il suffit ensuite de naviguer sur l'url suivante : http://localhost:4242. Le livereload sera branché automatiquement et les slides se recharcheront à chaque changement effectué dans les markdowns.

##==##

<!-- .slide: class="with-code" data-type-show="restit" -->

# Utilisation pour un dev qui n'a pas node

Pour utiliser le thème, il suffit d'avoir docker sur sa machine et de démarrer le service docker grâce à l'image docker mise à disposition

```sh
$ docker run
```

<!-- .element: class="big-code" -->

Il suffit ensuite de naviguer sur l'url suivante : http://localhost:5000

##==##

<!-- .slide: class="with-code" data-type-show="prez" -->

# Utilisation pour un dev qui n'a pas node

Utiliser docker 🐳

```sh
$ docker run
```

<!-- .element: class="big-code" -->

http://localhost:5000

<!-- .element: class="fragment" -->

##==##

<!-- .slide: data-type-show="restit" -->

# Mise à jour

À partir de maintenant, la mise à jour du thème sera grandement simplifiée car il suffira juste de changer la version de la dépendance node dans son package.json et de relancer une installation de dépendances.

La dernière version sera téléchargée et le script de préparation changera le script et le css dans le répertoire `web_modules`.

##==##

<!-- .slide: data-type-show="prez" -->

# Mise à jour

1. Mettre à jour son **package.json**.
1. Relancer une **installation** de dépendances.
1. Mise à jour du répertoire **`web_modules`**.
<!-- .element: class="list-fragment" -->
