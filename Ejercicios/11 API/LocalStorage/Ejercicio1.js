const pElement = document.querySelector('p');
const inputElement = document.querySelector("#input-name");
const buttonElement = document.querySelector(".js-save");


function loadName() {
    const name = localStorage.getItem("name");
    pElement.innerHTML = name;
    inputElement.value = name;
}

function checkIfNameSaved() {
    return (localStorage.getItem("name")?true:false);
}


// Checks if name is saved and if so, loads it
if (localStorage.getItem("name")) { loadName() }; 


function printName() {
    const name = document.querySelector("#input-name").value;
    pElement.innerHTML = name;
}

function saveName() {
    const name = document.querySelector("#input-name").value;
    localStorage.setItem("name", name);
}

inputElement.addEventListener('keyup', printName);
buttonElement.addEventListener('click', (event) => {
    event.preventDefault();
    saveName();
});