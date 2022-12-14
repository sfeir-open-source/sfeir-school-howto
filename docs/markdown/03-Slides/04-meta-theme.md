<!-- .slide: class="transition bg-white" -->

# Les méta datas qui enrichissent le thème

##==##

<!-- .slide: data-type-show="restit" -->

# Meta-datas

Ce thème comporte un grand nombre de méta-datas qui visent à simplifier l'écriture des slides en vue de rester concentrer sur le contenu et non sur la mise en forme.

Les métas datas seront toutes à introduire avec les commentaires
"`<!-- .slide: -->`" ou "`<!-- .element: -->`".

Dans la grande majorité des cas, ces meta-datas seront des classes css. Souvent des méta datas peuvent être combinées.

Ce chapitre ne traite que des méta-datas ajoutées en plus de celles proposées par RevealJS (prochain chapitre).

##==##

<!-- .slide: data-type-show="prez" -->

# Meta-datas

💡 : **simplifier** l'écriture des slides pour rester **concentrer sur le contenu**.

Les métas datas seront toutes à introduire avec les commentaires
"`<!-- .slide: -->`" ou "`<!-- .element: -->`".

<!-- .element: class="fragment" -->

Ces meta-datas seront des classes css etpeuvent être combinées.

<!-- .element: class="fragment" -->

##==##

# Liste des ajouts liés au thème SFEIR School

- Gestion des slides specifiques (premier slide, transition, ...)
- Gestion du code
- Gestion du layout sur 2 colonnes
- Helpers (centrage, alignement, micro ajustement graphiques)
- Gestion de slides de restitution
- Gestion d'icones Feather
- Gestion de listes à affichage séquentiel

Le mieux pour tout voir en action reste le [showcase](https://sfeir-school-theme.netlify.com/) qui montre tout en action

##==##

<!-- .slide: class="two-column with-code" -->

# Premier Slide

<!-- prettier-ignore -->
```md
<!-- .slide: class="first-slide" 
  sfeir-level="1"
  sfeir-techno="pwa" -->
# **Welcome to SFEIR School**
## **PWA 100**
```

<!-- .element: class="big-code" -->

- `sfeir-level` : définit le nombre d'étoiles (1-3)
- `sfeir-techno` : définit le mot clé dans le chevron school (doit être court)

##--##

<br><br><br>

![w-1000](./assets/images/first-slide.png)

##==##

<!-- .slide: class="two-column with-code" -->

# Speaker Slide

<!-- prettier-ignore -->
```md
<!-- .slide: class="speaker-slide" -->
# Hello ! @SFEIR
![speaker](./assets/images/jf.jpg)
![company](./assets/images/logo_sfeir_bleu_orange.png)
![badge first-badge](./assets/images/gde.png)
![badge second-badge](./assets/images/GDG-Logo-carre.png)
![badge third-badge](./assets/images/mts.png)
<h2> Jean-François<span> Garreau</span></h2>
### CTO front
<!-- .element: class="icon-rule icon-first" -->
### @jefbinomed
<!-- .element: class="icon-second" -->
### fake.email@sfeir.com
<!-- .element: class="icon-third" -->
```

- `icon-first` : définit la position dans le cadre
- `first-badge` : définit la place du badge

##--##

<br><br><br>

![w-1000](./assets/images/speaker-slide.png)

##==##

<!-- .slide: class="two-column with-code" -->

# Transition Slide

<!-- prettier-ignore -->
```md
<!-- .slide: class="transition" -->
# Transition
```

<!-- .element: class="big-code" -->

Il existe plusieurs variantes de transitions :

- Couleur de fond qui change
- Image de fond qui change
- Image de fond customisable
- Position du titre dans le slide

##--##
<br><br><br>

![w-1000](./assets/images/transition-green.png)

##==##

<!-- .slide: class="two-column with-code" -->

# Quote Slide

<!-- prettier-ignore -->
```md
<!-- .slide: class="quote-slide" -->
## A dedicate Quote slide
<blockquote>
<cite>
  To Quote or not to quote...
</cite>
</blockquote>
```

<!-- .element: class="big-code" -->

On peut aussi ajouter un crédit en bas de page avec l'annotation suivante :

```md
Jean-Michel Citation

<!-- .element: class="credits"-->
```

##--##
<br><br><br>

![w-1000](./assets/images/quote-slide.png)

##==##

<!-- .slide: class="two-column with-code" -->

# Blur Slide

<!-- prettier-ignore -->
```md
<!-- .slide: class="bg-blur" -->

<br>

... Du texte
```

<!-- .element: class="big-code" -->

Ce slide permet de centrer le texte dans la zone floutée à droite et d'y mettre ce que l'on veut

##--##
<br><br><br>

![w-1000](./assets/images/blur-slide.png)

##==##

<!-- .slide: class="two-column with-code" -->

# Two column Slide

<!-- prettier-ignore -->
```markdown
<!-- .slide: class="two-column" -->
## -- ##  
<!-- .slide: class="text-dark" 
  data-background="var(--black)" -->
## Slide 2
-   Item 2
-   Item 3
```

<!-- .element: class="big-code" -->

Le principe est simple, il faut utiliser le concept de slides verticaux pour gérer chacun des 2 slides qui seront mis côte à côte. Utilisez le séparateur **\#\#--\#\#**

##--##
<br><br><br>

![w-1000](./assets/images/two-col-bg-right.png)

Chaque slide peut utiliser ses propres meta de slides (comme les backgrounds)

##==##

<!-- .slide: class="two-column with-code" -->

# Exercice Slide

<!-- prettier-ignore -->
```markdown
<!-- .slide: class="exercice" -->
# Exercice Title
## Lab
<br>
1. First step
2. Second step
3. Third step
<br>
Additionnal Advice
### Step: push-1
```

Le choix des titres est important !

- Titre de niveau 1 = intitulé de l'exercice
- Titre de niveau 2 = mot clé utilisé qui sera dans la zone colorée
- Titre de niveau 3 = pointeur vers l'exercice en bas de page

##--##
<br><br><br>

![w-1000](./assets/images/exercice-slide.png)

##==##

# Code slides

Souvent nous avons besoin d'afficher du code. Il existe donc plusieurs customisations pour l'affichage du code :

- Choix de la couleur de fond du slide (par défaut blanc) **`with-code-dark`**
- Choix de la couleur de fond de la zone de code (par défaut blanc) **`with-code-bg-dark`**
- Choix de la font (par défaut monospace) : **`inconsolata`**, **`consolas`**
- Choix d'une font externe (nécessite du css spécifique)
- Possibilité de surlignage **`[1-2,5]`**
- Possibilité de surlignage progressif **`[1-2|5]`**
- Possibilité de mettre le code plus gros **`big-code`**
- Possibilité d'étirer la zone de code pour prendre plus de place **`full-height`**
<!-- .element: class="list-fragment" -->

Toutes ces combinaisons sont détaillées dans le README

<!-- .element: class="fragment" -->

##==##

<!-- .slide: class="with-code two-column" -->

# Code slide - exemple

<!-- prettier-ignore -->
````markdown
<!-- .slide: class="with-code" -->

## Some Code (with highlight)

```xml [1,7-11]
<?xml version="1.0" encoding="utf-8"?>

<LinearLayout xmlns:android="SCHEMAS"
    android:orientation="vertical"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    >
<TextView
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:text="@string/hello"
        />
</LinearLayout>
```
````

<!-- .element: class="full-height" -->

##--##
<br><br><br>

![w-1000](./assets/images/slide-with-code-highlight.png)

##==##

# Utilisation des Helpers

Plusieurs helpers ont été créés afin de faciliter la manipulation des éléments graphiques ou textuels

- Possibilité de fixer une width ou height entre 50 et 1000px par tranche de 50px : **`w-xx`** ou **`h-xx`**
- Possibilité de fixer une width ou height maximum 50 et 1000px par tranche de 50px : **`wm-xx`** ou **`hm-xx`**
- Possiblité de faire prendre à une image toute la place : **`full-height`** ou **`full-width`**
- Possibilité de centrer un texte ou une image sur sa ligne : **`center`**
- Possibilité de centrer une image au centre du slide : **`full-center`**
- Profiter d'un affichage type flexbox (distribution horizontale) : **`flex-row`**
- Jouer sur les marging top et bottom par tranche de 10px entre 10 et 1000px pour du positionnement en 'pixel perfect' : **`mt-XX`** ou **`mb-XX`**
<!-- .element: class="list-fragment" -->

##==##

<!-- .slide: class="with-code" -->

# Utilisation d'icônes de la librairie feather icons

L'idée est de faire comme si l'on manipulait une image et l'on met le code 'sfeir-icons' dans la partie **`alt`** suivi de son code dans la librairie feather icons dans la zone réservée à l'url de l'image normalement.

```md
![sfeir-icons](github)
```

<!-- .element: class="big-code" -->

Il est à noter que l'on peut changer la couleur et la taille d'une icone via des customs propeties (variables css)

- `--icon-size` : permet de surcharger la taille
- `--icon-color` : permet de surcharger la couleur (qui par défaut suit le thème)

##==##

<!-- .slide: class="two-column with-code" -->

# Utilisation d'icônes de la librairie feather icons

<!-- prettier-ignore -->
```markdown
## Use Feathers icons

Using markdown image

![sfeir-icons](github) basic icon

![sfeir-icons small](github) small icon

![sfeir-icons big](github) big icon

![sfeir-icons](github)<!-- .element:
  style="--icon-size:96px;
  --icon-color:orange;" --> custom icon and custom color

Using html

<i data-feather="github" ></i> basic icon

Complete list of icons : https://feathericons.com/
```

<!-- .element: class="full-height" -->

##--##
<br><br><br>

![w-1000](./assets/images/feather-icons.png)

##==##

# Possibilité de préparer 2 types de supports

On peut facilement prévoir 2 types de supports au sein des mêmes fichiers markdown grace à l'utilisation de la meta **`data-type-show`** à placer sur le slide.

Le principe est simple, par défaut si une slide ne possède pas cet attribut, c'est qu'elle doit tout le temps être affichée. Si une slide possède ce attribut, alors, dans le html, la méta correspondante doit être strictement la même.

Ici :

<!-- prettier-ignore -->
```md
<!-- .slide: data-type-show="prez" -->
## A slide for prez only
A few words !
```

et dans mon html

```html[3]
<body>
  <div class="reveal">
    <div class="slides" data-type-show="prez">...</div>
  </div>
</body>
```
