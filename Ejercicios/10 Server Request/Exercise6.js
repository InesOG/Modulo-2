/*function getRandomBreed() {

}

function getBreedList() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then((breedListResponse) => breedListResponse.json())
        .then((breedMessage) => breedMessage.message)
}



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
*/

function getRandomBreedAndImage() {
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
            const bodyElement = document.querySelector('body');

            fetch(`https://api.rand.fun/number/integer?max=${numberOfBreeds}`)
                .then((rndResponse) => rndResponse.json())
                .then((rndResult) => {
                    const rndNumber = rndResult.result;
                    console.log(rndNumber);
                    const breed = breedslist[rndNumber]
                    console.log(breed);         

                    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
                        .then((imgRespone) => imgRespone.json())
                        .then((imgMessage) => {
                            let dogImage;
                            if (document.querySelector('img')) {
                                dogImage = document.querySelector('img');                             
                            } else {
                                dogImage = document.createElement('img');      
                            }
                            dogImage.src = imgMessage.message;
                            dogImage.alt = `A ${breed} image`;
                            bodyElement.appendChild(dogImage);
                        });
                })
            })
        }


const buttonElement = document.querySelector('.js-button-breed');

buttonElement.addEventListener('click', (event) => {
    event.preventDefault();
    getRandomBreedAndImage();
})