"use-strict";

const teacher1 = document.querySelector('.teacher--isra');
const teacher2 = document.querySelector('.teacher--tuerto');
const teacher3 = document.querySelector('.teacher--nasi');

teacher1.addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('teacher--selected')
  
  if (event.currentTarget.classList.contains('teacher--selected')) {
    event.currentTarget.querySelector('.favorite').innerHTML = "Remove";
  } else {
    event.currentTarget.querySelector('.favorite').innerHTML = "Add"; 
  }
  
});

teacher2.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('teacher--selected')
  });

teacher3.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('teacher--selected')
  });