'use strict';

// Ej1. Calcular la media:

const times = [56, 9, 45, 28, 35];

times.reduce((acc, num) => acc + num)/times.length;


// Ej2. Calcula el ganador de la carrera:

const runners = [
  { name: 'Gregory Goyle', time: 56 },
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
];


runners.reduce((acc, runner) => {
  if (acc['time'] > runner['time']) {
    return runner;
  } else {
    return acc;
  }});

