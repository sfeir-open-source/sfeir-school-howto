<!-- .slide: class="transition bg-white" -->

# Thèmes

##==##

<!-- .slide: class="flex-row" -->

# Utilisation d'un thème (univers)

En plus de proposer un thème par défaut, cette librairie vous donne la possibilité de basculer dans un "univers" spécifique de SFEIR : SFEIR School (par défaut), SFEIR Institute ou communaitre (sans logo SFEIR). Voici trois version du même slide avec un paramétrage différent

![w-600](./assets/images/first-slide.png)
![w-600](./assets/images/first-slide-institute.png)
![w-600](./assets/images/first-slide-conf.png)

##==##

<!-- .slide: class="with-code" -->

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

# Thèmes, valeurs possible

Voici les valeurs possibles de l'attribut html `data-theme-slides` :

- ![w-400](./assets/images/first-slide.png) : `school` ou rien car valeur par défaut
- ![w-400](./assets/images/first-slide-institute.png) : `institute`
- ![w-400](./assets/images/first-slide-conf.png) : `conf`

##==##

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

# Showcase

Afin de se rendre compte du thème en action, un showcase est disponible à l'url suivante : https://sfeir-school-theme.netlify.com/

Pour accéder à la version institute, il faut se rendre sur l'url : https://sfeir-school-theme.netlify.com/index-mode.html

Pour accéder à la version conf, il faut se rendre sur l'url : https://sfeir-school-theme.netlify.com/index-conf.html
