const buttonElement = document.querySelector('.js-search-button');

const ulElement = document.querySelector('ul');

function showNames() {
    fetch("https://swapi.py4e.com/api/people/")
        .then((response) => response.json())
        .then((responsejson) => {
            const results = responsejson.results;
            for (let i = 0; i < results.length; i++) {
                const listElement = document.createElement('li');
                listElement.innerHTML = results[i].name;
                ulElement.appendChild(listElement);
            }
        })
}



buttonElement.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('here');
    showNames();
})