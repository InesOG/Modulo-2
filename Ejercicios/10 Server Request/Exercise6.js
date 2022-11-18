/*function getRandomBreed() {

}

function getBreedList() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then((breedListResponse) => breedListResponse.json())
        .then((breedMessage) => breedMessage.message)
}*/



const dogsOl = document.getElementById("dogsList")

fetch('https://dog.ceo/api/breeds/list/all')
        .then((breedListResponse) => breedListResponse.json())
        .then((breedMessage) => { 
        const breedsmessage = breedMessage.message;
        const breedslist = []
        for (const [breed,variants] of Object.entries(breedsmessage)) {            
            let dog = document.createElement("li");
            
            if (variants.length === 0) {
                dog.innerText = `${breed}`;
                dogsOl.appendChild(dog);
            }; 

            for (const variant of variants) {
                dog.innerText = `${variant} ${breed}`;
                dogsOl.appendChild(dog); 
            };
          
        };
    })


fetch('https://dog.ceo/api/breeds/list/all')
    .then((breedListResponse) => breedListResponse.json())
    .then((breedMessage) => { 
    const breedsmessage = breedMessage.message;
    const breedslist = []
    for (const [breed,variants] of Object.entries(breedsmessage)) {            
        let dog = document.createElement("li");
        
        if (variants.length === 0) {
            breedslist.push(breed);
        }; 

        for (const variant of variants) {
            breedslist.push(`${variant} ${breed}`);
        };
      
    };

    const numberOfBreeds = breedslist.length;

    

})