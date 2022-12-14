<!-- .slide: class="transition bg-white" -->

# Thèmes (univers)

##==##

<!-- .slide: class="flex-row" data-type-show="restit" -->

# Utilisation d'un thème (univers)

En plus de proposer un thème par défaut, cette librairie vous donne la possibilité de basculer dans un "univers" spécifique de SFEIR : SFEIR School (par défaut), SFEIR Institute ou communaitre (sans logo SFEIR). Voici trois version du même slide avec un paramétrage différent

![w-600](./assets/images/first-slide.png)
![w-600](./assets/images/first-slide-institute.png)
![w-600](./assets/images/first-slide-conf.png)

##==##

<!-- .slide: class="flex-row" data-type-show="prez" -->

# Utilisation d'un thème (univers)

![w-600](./assets/images/first-slide.png)
![w-600](./assets/images/first-slide-institute.png)
![w-600](./assets/images/first-slide-conf.png)

##==##

<!-- .slide: class="with-code" data-type-show="restit" -->

# Configuration du thème

Tout se passe au niveau du fichier `index.html`

```html
<body>
  <div class="reveal">
    <div class="slides" data-theme-slides="institute">...</div>
  </div>
</body>
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" data-type-show="prez" -->

# Configuration du thème

## `index.html`

```html[3|1-5]
<body>
  <div class="reveal">
    <div class="slides" data-theme-slides="institute">...</div>
  </div>
</body>
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: data-type-show="restit" -->

# Thèmes, valeurs possible

Voici les valeurs possibles de l'attribut html `data-theme-slides` :

- ![w-400](./assets/images/first-slide.png) : `school` ou rien car valeur par défaut
- ![w-400](./assets/images/first-slide-institute.png) : `institute`
- ![w-400](./assets/images/first-slide-conf.png) : `conf`

##==##

<!-- .slide: data-type-show="prez" -->

# Thèmes, valeurs possible

Voici les valeurs possibles de l'attribut html `data-theme-slides` :

- ![w-400](./assets/images/first-slide.png) : `school` ou rien car valeur par défaut
- ![w-400](./assets/images/first-slide-institute.png) : `institute`
- ![w-400](./assets/images/first-slide-conf.png) : `conf`
<!-- .element: class="list-fragment" -->

##==##

<!-- .slide: data-type-show="restit" -->

# Impact du thème (univers)

Voici ce qu'impacte le choix d'un thème

- La couleur primaire utilisée : verte pour les school et conf, bleu pour l'institute
- Changement du premier slide
- Si vous utilisez les fonds SFEIR (transition-bg-sfeir-1 to transition-bg-sfeir-3), la couleur de fond utilisée sera verte ou bleue
- Les traits dans les titres sur les slides de transition
- Le slide d'exercice
- La couleur des icons feather
- Le header des tableau

##==##

<!-- .slide: data-type-show="prez" -->

# Impact du thème (univers)

Voici ce qu'impacte le choix d'un thème

- 🟢 La couleur primaire utilisée
- 1️⃣ Premier slide
- 🌃 Fonds SFEIR (transition-bg-sfeir-1 to transition-bg-sfeir-3)
- 🖍 Traits des titres
- 🏋️ Le slide d'exercice
- 🔵 La couleur des icons feather
- 🧾 Le header des tableau

<!-- .element: class="list-fragment" -->

##==##

# Showcase

Afin de se rendre compte du thème en action, un showcase est disponible à l'url suivante : https://sfeir-school-theme.netlify.com/

Pour accéder à la version institute, il faut se rendre sur l'url : https://sfeir-school-theme.netlify.com/index-mode.html

Pour accéder à la version conf, il faut se rendre sur l'url : https://sfeir-school-theme.netlify.com/index-conf.html
