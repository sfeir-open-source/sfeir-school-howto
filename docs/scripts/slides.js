import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return ['00-school/00-TITLE.md', '00-school/speaker-jef.md'];
}

function conceptsSlides() {
  const directory = '01-Concepts';
  return [
    `${directory}/00-concepts.md`,
    `${directory}/01-opensource.md`,
    `${directory}/02-slides-as-lib.md`,
    `${directory}/03-publication.md`,
    `${directory}/04-themes.md`,
  ];
}

function sujetSlides() {
  const directory = '02-Sujet';
  return [`${directory}/00-sujet.md`, `${directory}/01-cocon-semantique.md`, `${directory}/02-modules.md`];
}

function creatingSlidesSlides() {
  const directory = '03-Slides';
  return [
    `${directory}/00-slides.md`,
    `${directory}/01-markdown.md`,
    `${directory}/02-bonnes-pratiques.md`,
    `${directory}/03-dessins.md`,
    `${directory}/04-meta-theme.md`,
    `${directory}/05-meta-reveal.md`,
  ];
}

function exercicesSlides() {
  const directory = '04-Exercices';
  return [`${directory}/00-exercices.md`, `${directory}/01-structure.md`];
}

function apresSlides() {
  const directory = '05-Apres';
  return [`${directory}/00-apres.md`, `${directory}/01-export.md`, `${directory}/02-maintenance.md`];
}

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...conceptsSlides(), //
    ...sujetSlides(), //
    ...creatingSlidesSlides(), //
    ...exercicesSlides(), //
    ...apresSlides(), //
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
