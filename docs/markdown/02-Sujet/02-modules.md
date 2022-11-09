<!-- .slide: class="transition bg-white" -->

# Modules everywhere!

##==##

# Les modules la base d'une formation

Pour une formation l'unité de savoir est le module.

- A un module correspond un enjeu majeur lié à la techno / méthodo
- A un module peut correspondre plusieurs sous parties
- Une formation pourra être customisée pour un client sur le découpage module est bon

##==##

# Comment faire son découpage en modules ?

Pour faire son découpage, on va naturellement s'appuyer sur le cocon sémantique et la mindmap

- Le regroupement d'idées forment des chapitres
- Les chapitres peuvent devenir un module
- Les idées au sein d'un chaptire constituent les sous parties du module
- Il conviendra ensuite de respecter une nomenclature préfixée par des chiffres pour faciliter la lecture et la contribution en commançant systématiquement par **`00-`**

##==##

<!-- .slide: class="two-column with-code" -->

# Exemple de structure en module

Voici la structure de cette formation

1. Une intro sur la formation (school)
1. Présentation des concepts
   1. Intro
   1. Présentation de la phylosophie open source
   1. Concepts des slides as code
   1. ...
1. Comment structurer son sujet
   1. Intro
   1. Présentation du concept de cocon sémantique
   1. Explications de l'importance des modules

##--##

<br><br><br>

<!-- prettier-ignore -->
```yaml
docs/markdown/
  00-school/
    00-title.md
  01-Concepts/
    00-concepts.md
    01-opensource.md
    02-slides-as-code.md
    ...
  02-Sujet/
    00-sujet.md
    01-cocon-semantique.md
    02-modules.md
```

<!-- .element: class="big-code full-height"-->
