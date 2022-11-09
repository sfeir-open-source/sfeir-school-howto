<!-- .slide: class="transition bg-white" -->

# Structure et recommandations

##==##

# Emplacement

Les exercices pour rappel doivent être accessible dès la racine du repo. L'idéal est de mettre les exercices dans un répertoire nommé **`steps`**.

Cependant, lié aux contraintes de certains langage, il parrait parfois peu applicable de forcer ce nom de répertoire.

Si des exercices nécessites de mutualiser du code, il n'est pas interdit d'avoir des **'shared directories'** disponible dans notre repo

##==##

# Monobranche

Un des enjeu d'une formation est de pouvoir démarrer rapidement cette dernière et pouvoir suivre facilement cette dernière sans se perdre avec des problématiques de conflits de branches.

De plus, lors de la contribution, évolution d'une formation, il est plus simple de pouvoir faire les montées de versions en 1 commit plustôt que d'avoir à passer parmis tout un ensemble de branches.

Ainsi, la phylosophie souhaitée pour les schools est le repo mono branche ou **`main`** est la branche principale et de référence pour une formation.

##==##

<!-- .slide: class="two-column with-code" -->

# Structure d'un exercice

A chaque exercice, on tachera de respecter les codes suivants pour facilier la contribution entre schools et aussi aider les participants :

1. Il y a un répertoire par type d'exercice
1. Dans le répertoire d'un exercice, il y a un fichier README qui reprend l'intitulé de l'exercice à faire ainsi que tous les pointers d'API ayant été évoqués sur les slides concernés par l'exercice
1. Il y a un répertoire qui porte le même nom mais qui est suffixé par **`-solution`** et qui correspond à la solution de l'exercice

##--##

<br><br><br>

Ainsi on trouver des structures de ce type :

```yaml
-steps
|
`- 00-ex-fonctionnalite-xxx
| |
|  `- README
`- 00-ex-fonctionnalite-xxx-solution
```

<!-- .element: class="big-code"-->
