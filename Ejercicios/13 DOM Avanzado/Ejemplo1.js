'use strict';

const item1 = document.querySelector(`.item--1`);

//  En Chrome se comportan igual, pero en Firefox por ejemplo:
console.log(item1); // Devuelve una representación del elemento como HTML
console.dir(item1); // Devuelve una representación del elemento como objeto
