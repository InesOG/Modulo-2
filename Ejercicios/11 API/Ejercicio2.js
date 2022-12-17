const buttonElement = document.querySelector('.js-search-button');

const ulElement = document.querySelector('ul');

function showNames() {
    ulElement.innerHTML = '' // clears the names displayed before
    fetch("https://swapi.py4e.com/api/people/")
        .then((response) => response.json())
        .then((responsejson) => {
            const searchName = document.querySelector('#name-input').value;
            const results = responsejson.results;
            for (let i = 0; i < results.length; i++) {
                const name = results[i].name;
                if (name.toUpperCase().indexOf(searchName.toUpperCase()) != -1) {
                    const listElement = document.createElement('li');
                    listElement.innerHTML = name;
                    ulElement.appendChild(listElement);
                }
            }
        })
}


// Show all the pages

async function showNamesPagination() {
    ulElement.innerHTML = ''; // clears the names displayed before
    const initialURL = "https://swapi.py4e.com/api/people/"; 
    let nextURL = await fetchResults(initialURL);
    console.log(nextURL);
    while (nextURL) {
        nextURL = await fetchResults(nextURL);
    } 
}


async function fetchResults(url) {
    return fetch(url)
    .then((response) => response.json())
    .then((responsejson) => {
        const searchName = document.querySelector('#name-input').value;
        const results = responsejson.results;
        for (let i = 0; i < results.length; i++) {
            const name = results[i].name;
            if (name.toUpperCase().indexOf(searchName.toUpperCase()) != -1) {
                const listElement = document.createElement('li');
                listElement.innerHTML = name;
                ulElement.appendChild(listElement);
            }
        }
        // console.log(responsejson.next);
        return responsejson.next
    })
}


buttonElement.addEventListener('click', (event) => {
    event.preventDefault();
    // showNames();
    showNamesPagination();
})