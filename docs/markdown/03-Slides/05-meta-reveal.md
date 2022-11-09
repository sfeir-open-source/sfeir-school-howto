<!-- .slide: class="transition bg-white" -->

# Les méta datas déjà présents dans Reveal

##==##

# Features disponibles dans Reveal

RevealJS propose déjà tout un ensemble de features que l'on peut exploiter pour nos formations. La documentation officielle ainsi que les samples sont disponible ici : https://revealjs.com/. Voici la liste des features pouvant nous servir

- [Auto-animate](https://revealjs.com/auto-animate/) : Animation automatique entre 2 slides d'un élément commun
- [Backgrounds](https://revealjs.com/backgrounds/) : Gestion avancée de fond de slides (images, gif, couleurs, vidéos)
- [Layouts](https://revealjs.com/layout/) : Gestion de quelques layouts tels qu'un système de stack
- [Fragments](https://revealjs.com/fragments/) : Gestion d'un affichage progressif pouvant être animé
- [Events](https://revealjs.com/events/) : Exposition d'une API d'événement permettant de déclancher des animations ou actions à certains moments précis de la présentation
- [Export Pdf](https://revealjs.com/pdf-export/) : Possibilité d'exporter ses slides en pdf
- Raccourcis claviers : Un certain de nombre de raccourcis sont disponible pouvant servir en présentation

##==##

<!-- .slide: class="with-code" -->

# Backgrounds

L'utilisation des images de fond peut très souvent servir dans nos formations pour des slides de transitions ou pour imager des slides en mode 'two-column'.

Pour spécifier un background sur un slide, il suffit simplement d'ajouter l'attribut : **`data-background`** suivi d'une couleur, d'une valeur css de background valide ou d'une image.

```markdown
<!-- .slide: data-background="grey" -->

ou

<!-- .slide: data-background="./assets/images/bg.png" -->
```

<!-- .element: class="big-code" -->

##==##

# Backgrounds dans un slide 2 colonnes

Il est possible de définir simplement quel est le background d'un slide en mode 2 colonne. Il suffit d'utiliser la meta **`data-background`** sur le slide correspondant au côté gauche ou droite du slide pour retrouver l'image, couleur sur le bon slide.

##==##

# Les Fragments

C'est un élément essentiel du fonctionnement d'une présentation pour "guider" le regard des participants. Un fragment correspond donc à une zone du slide qui apparaitra de manière séquentielle.

Il suffit d'ajouter à la zone souhaitée la classe css **`fragment`** pour que la zone s'affiche de façon séquentielle.

Si l'on ajoute la méta data **`data-fragment-index`** on peut même choisir l'ordre d'affichage qui est par défaut dans l'ordre de lecture.

##==##

<!-- .slide: class="with-code" -->

# Utilisation d'événements

L'API de reveal propose d'écouter plusieurs choses assez facilement en récupérant l'objet Reveal.

```javascript
import { Reveal } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';
```

<!-- .element: class="big-code" -->

On peut ainsi écouter :

- Quand la présentation est chargée : **`Reveal.on('ready')`**
- Changement de slide : **`Reveal.on('slidechanged')`**
- Changement de fragment : **`Reveal.on('fragmentshown')`** et **`Reveal.on('fragmenthidden')`**
- Quand un état est franchi : **`Reveal.on('eventname')`** (plus de détail slide suivant)

##==##

<!-- .slide: class="with-code" -->

# Utilisation des évenements d'état

Sur un slide, nous avons la possibilité d'ajouter un "état" grace à l'attribut html **`data-state`**. Si un état est posé sur un slide, alors un événement portant son nom sera émis au moment d'arriver sur le slide.

```markdown
<!-- .slide: data-state="eventname"-->
```

<!-- .element: class="big-code" -->

Ici, à chaque fois que nous entrons sur ce slide, l'événement **`eventmane`** sera émis et pourra être intercepté par du javascript

```javascript
Reveal.on('eventname', (event)=>{...})
```

<!-- .element: class="big-code" -->

##==##

# Raccourcis claviers disponibles

Voici la liste des raccourcis disponible pouvant être utiles :

- **`ESC`** ou **`O`** : Permet de passer en mode 'overview' et survoller l'ensemble des slides
- **`S`** : Ouvre le mode speaker pour avoir les notes
- **`B`** ou **`V`** : Passe l'écran en noir. Utile pour capter l'auditoire
- **`SPACE`** ou **`→`** : Passe au slide suivant
- **`←`** / **`→`** / **`↑`** / **`↓`** : Navigue dans le sens de la flèche en fonction des slides
- **`⇤`** (début) : retourne au premier slide
- **`⇥`** (fin) : passe au dernier slide
