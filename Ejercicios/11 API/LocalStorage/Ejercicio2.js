'use strict';

const inputlightEl = document.querySelector('#light');
const inputdarkEl = document.querySelector('#dark');
const bodyEl = document.querySelector('body');

const preSavedTheme = localStorage.getItem('theme');

if (preSavedTheme) {
  changeTheme(preSavedTheme);
  if (preSavedTheme === 'light') {
    inputlightEl.setAttribute('checked', true);
  } else if (preSavedTheme === 'dark') {
    inputdarkEl.setAttribute('checked', true);
  }
}

function changeTheme(theme) {
  bodyEl.setAttribute('class', `${theme}-background`);
  saveSelection(theme);
}

function saveSelection(theme) {
  localStorage.setItem('theme', theme);
}

inputdarkEl.addEventListener('click', () => {
  changeTheme('dark');
});

inputlightEl.addEventListener('click', () => {
  changeTheme('light');
});