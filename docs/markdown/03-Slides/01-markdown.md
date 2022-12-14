<!-- .slide: class="transition bg-white" -->

# Le markdown

##==##

# Markdown - la base de nos slides

Tous les slides sont écrits en markdown et respectent les spécifications markdown suivantes :

- [Markdown langage](https://spec-md.com/)
- [CommonMark Spec](https://spec.commonmark.org/0.30/)
- [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)

##==##

<!-- .slide: data-type-show="restit" -->

# Séparateurs de slides

Dans revealJS, nous pouvons naviguer verticalement et horizontalement. Dans le cadre de nos slides conçus avec le thème SFEIR, nous allons utiliser uniquement la navigation horizontale.

La navigation verticale ne servira que dans le cadre d'un hack nous permettant de créer des slides sur 2 colonnes.

- Séparateur de slides horizontaux : **\#\#==\#\#**
- Séparateur de slides verticaux : **\#\#--\#\#**

##==##

<!-- .slide: data-type-show="prez" -->

# Séparateurs de slides

⚠️ RevealJS = navigation ↕️ ou ↔️.
**Nous** = ↔️

- Séparateur ↔️ : **\#\#==\#\#**
- Séparateur ↕️ : **\#\#--\#\#**

##==##

<!-- .slide: data-type-show="restit" -->

# Juste du markdown ?

Oui, les slides ne se font qu'avec du markdown afin d'éviter un tooling trop compliqué.

Cependant, on enrichit énormément nos slides grace à des méta-datas ajoutées par ReavealJS. Ceci sera détaillé plus tard.

De plus, le markdown nous laisse la possibilité de mettre du HTML pur en fonction du besoin si vous êtes à l'aise avec l'écriture HTML.

##==##

<!-- .slide: data-type-show="prez" -->

# Juste du markdown ?

Oui !

Cependant, on enrichit avec des méta-datas.

<!-- .element: class="fragment" -->

De plus, markdown compatible avec le HTML

<!-- .element: class="fragment" -->

##==##

<!-- .slide: class="two-column with-code" -->

# Enrichissement du markdown

Il est important de comprendre comment finit du code généré pour comprendre comment l'enrichir

```md
# texte

du texte

encore du texte
```

<!-- .element: class="big-code"-->

##--##

#

<br>

Est converti de la manière suivante :
<br><br><br>

```html
<h1>texte</h1>

<p>du texte</p>

<p>encore du texte</p>
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="with-code" -->

# Enrichissement du markdown

L'enrichissement s'effectue en utilisant des commentaires html `<!-- -->` qui sont non rendus graphiquement.

RevealJS propose ainsi 2 approches pour enrichir les slides ou éléments d'un slide :

```html
<!-- .slide: -->
Pour enrichir l'élément HTML correspondant au slide

<!-- .element: -->
Pour enrichir l'élément HTML préfixé par le commentaire
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="two-column with-code" -->

# Enrichissement du markdown

Tout ce qui suffixe le `.slide:` ou `.element:` sera automatiquement ajouté à l'élément html correspondant
<br>

<!-- prettier-ignore -->
```md
<!-- .slide: class="with-code" -->
# Title
<!-- .element: class="center" 
  data-attribute="test"-->

Du contenu rouge
<!-- .element: style="color:red" -->
```

<!-- .element: class="big-code" -->

##--##

<br><br><br>

Donne ainsi converti

<br>
<br>

<!-- prettier-ignore -->
```html
<section class="with-code">
  <h1 class="center"
  data-attribute="test">Title</h1>

  <p style="color:red">Du contenu rouge</p>
</section>
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="with-code" -->

# Enrichissement du markdown - Notes speakers

Il est possible d'ajouter des notes que seul la personne qui présente peut voir dans le mode présentation.

Pour cela, il faut simplement utiliser le mot clé **`Notes:`** et tout ce qui sera à la ligne dessous n'apparaîtra pas dans le slide. Les notes peuvent être elles mêmes du markdown.

```markdown
# Un slide

du texte

^Notes:
Des notes speakers invisible par l'auditoire
```

<!-- .element: class="big-code" -->

##==##

# Enrichissement du markdown - et à propos de prettier

Prettier étant installé par défaut avec le template, la mise en forme automatique peut parfois casser une mise en forme spécifique.

Pour éviter cela, il suffit de pré-fixer la zone à ne pas formater par `<!-- prettier-ignore -->`
