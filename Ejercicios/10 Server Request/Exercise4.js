'use strict';

function fetchRepos() {
  const orgname = document.querySelector('.js-input').value;

  fetch(`https://api.github.com/orgs/${orgname}`)
    .then((orgResponse) => orgResponse.json())
    .then((orgData) => {
      const reposURL = orgData.repos_url;
      fetch(reposURL)
        .then((repoResponse) => {
          return repoResponse.json();
        })
        .then((repoData) => {
          const ulElement = document.querySelector('.js-reposList');
          for (const repository of repoData) {
            ulElement.innerHTML += `<li>${repository.name}</li>`;
          }
        });

    });
}

const btn = document.querySelector('.js-button');

btn.addEventListener('click', (event) => {
  event.preventDefault();
  fetchRepos();
});