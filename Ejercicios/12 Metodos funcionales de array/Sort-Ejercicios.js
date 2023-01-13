'use strict';

// Ej1. Ordenar los ganadores de la carrera del Ejercicio 3 de Reduce
//      mostrando solo los que son estudiantes:

const runners = [
  { name: 'Gregory Goyle', time: 56, student: true },
  { name: 'Nymphadora Tonks', time: 9, student: false },
  { name: 'Luna Lovegood', time: 45, student: true },
  { name: 'Cedric Diggory', time: 28, student: true },
  { name: 'Cho Chang', time: 35, student: true },
];

runners.sort((a, b) => a['time'] - b['time'])
  .filter((runner) => runner['student']);

