"use strict";

/* 
*****************************************************
  Ejercicio Capitulo 2.2:
  Mostrar el formulario para agregar gatos y agregar 
  la informacion de cada gato directamente desde js
*****************************************************

// Unhide the Form 
const newForm = document.querySelector('.js-new-form');

newForm.classList.remove("collapsed");



// Agregar el código del li desde HTMl 
// Repetir este proceso por cada gatito 

const dataList = document.querySelector('.js-list');

const kittenOne = `<li class="card">
<article>
<img
    class="card_img"
    src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg"
    alt="gatito"
/>
<h3 class="card_title">Anastacio</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
    Ruiseño, juguetón, le guta estar tranquilo y que nadie le
    moleste. Es una maravilla acariciarle!
</p>
</article>
</li>`;

const kittenTwo = `<li class="card">
<img
  class="card_img"
  src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg"
  alt="gatito"
/>
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
  Ruiseño, juguetón y cariñoso le guta estar tranquilo y que nadie le moleste.
  Es una maravilla acariciarle!
</p>
</li>`;

const kittenThree = `<li class="card">
<img
  class="card_img"
  src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"
  alt="gatito"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
  Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
  Es una maravilla acariciarle!
</p>
</li>`;

dataList.innerHTML = `${kittenOne} ${kittenTwo} ${kittenThree}`;*/



/*
***************************************
  Ejercicio Capitulo 2.3 Condicionales:
  Agregar la funcionalidad del filtro por descripcion.
***************************************


const input_search_desc = document.querySelector('.js_in_search_desc');

input_search_desc.value = 'cariñoso';

const descrSearchText = input_search_desc.value;


const cardsContainer = document.querySelector('.js-list');


const [kitten1, kitten2, kitten3] = cardsContainer.querySelectorAll('.card');

const kitten1_description = kitten1.querySelector('.card_description').innerHTML;
const kitten2_description = kitten2.querySelector('.card_description').innerHTML;
const kitten3_description = kitten3.querySelector('.card_description').innerHTML;



if( !kitten1_description.includes(descrSearchText) ) {
  kitten1.remove();
  }
  
if( !kitten2_description.includes(descrSearchText) ) {
  kitten2.remove();
  }
  
if( !kitten3_description.includes(descrSearchText) ) {
  kitten3.remove();
  }


************************************************************
 Comprobar si el formulario nuevo se muestra. Si se muestra, 
 ocultarlo, y si no, mostrarlo
************************************************************


const newFormElement = document.querySelector('.js-new-form');

if (newFormElement.classList.contains('collapsed')) {
  newFormElement.classList.remove('collapsed');
} else {
  newFormElement.classList.add('collapsed');
}



************************************************************
 Comprobar si se ha especificado raza para kitten1 y si no,
 mostrar "No se ha especificado la raza"
************************************************************


const cardsContainer = document.querySelector('.js-list');


const kitten1 = cardsContainer.querySelectorAll('.card')[0];

const kitten1_race = kitten1.querySelector('.card_race').innerHTML;

let html = '';

if (kitten1_race === "") {
  html = `No se ha especificado la raza`;
} else {
  html = kitten1_race;
}

kitten1.querySelector('.card_race').innerHTML = html;

console.log(html);


***************************************
  Ejercicio Capitulo 4 Eventos:
***************************************
*/

// 1.Mostrar/ocultar formulario.

const plusIcon = document.querySelector('.fa-plus-circle');
const newForm = document.querySelector('.js-new-form');

plusIcon.addEventListener('click', () => {
  newForm.classList.toggle('collapsed');
})

// 2.Validar formulario nuevo gatito

const addCatbutton = document.querySelector('.js-btn-add');

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');


addCatbutton.addEventListener('click', (event) => {
  
  event.preventDefault(); // This is to avoid the form window to close after clicking on Add

  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = "Fill the mandatory fields";
  } else {
    labelMessageError.innerHTML = '';
  }
});

// 3.Validar formulario busqueda

const buttonBuscar = document.querySelector('.buscar-btn');

buttonBuscar.addEventListener('click', (event) => {
  event.preventDefault();

  const valorDesc = document.querySelector('.js_in_search_desc').innerHTML;
  const valorRaza = document.querySelector('.js-in-search-raza').innerHTML;

  if (valorDesc === '' || valorRaza === '') {
    const errorMessage = document.querySelector('.js-search-error');
    errorMessage.innerHTML = "No has rellenado ambos campos para la busqueda";
  };
});

// 4.Cancelar formulario limpiando los inputs

const cancelButton = document.querySelector('.button-cancel');

const inputRaza = document.querySelector('.js-input-raza');

cancelButton.addEventListener('click', (event) => {
  event.preventDefault();

  inputDesc.value = '';
  inputPhoto.value = '';
  inputName.value = '';
  inputRaza.value = '';
  
  newForm.classList.add('collapsed');
})