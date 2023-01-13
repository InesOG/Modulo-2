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


// Ej3. Queremos saber el ganador de los estudiantes, por lo que 
// tendremos que filtrar primero quiénes lo son.

const runnersV2 = [
  { name: 'Gregory Goyle', time: 56, student: true },
  { name: 'Nymphadora Tonks', time: 9, student: false },
  { name: 'Luna Lovegood', time: 45, student: true },
  { name: 'Cedric Diggory', time: 28, student: true },
  { name: 'Cho Chang', time: 35, student: true },
];

runnersV2.reduce((acc, runner) => {
  if (runner['student'] && (acc['time'] > runner['time'])) {
    return runner;
  } else {
    return acc;
  }
});