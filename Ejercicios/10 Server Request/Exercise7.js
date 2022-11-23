const createPromise = () =>
    fetch("https://dog.ceo/api/breeds/image/random").then((response) =>
        response.json()
    );

function getBreedImages() {
    // This wouldn't work because is executing the function 
    // once and duplicating it so it'll show me the same image
    const promises =  Array(10).fill(createPromise()); 
    Promise.all(promises).then((responses) => {
        const containerEl = document.querySelector('container');
        for (let i = 0; i < responses.length; i++) {
            const img = document.createElement('img');
            img.src = responses[i].message;
            containerEl.appendChild(img);
        }
    });
}

function cleanImgs() {
    const dogImages = document.querySelectorAll('img')
    for (const dogImage of dogImages) {
        dogImage.remove()
    }
}

const btn = document.querySelector(".js-btn");
btn.addEventListener("click", () => {
    cleanImgs();
    getBreedImages()
});
