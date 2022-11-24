function getEmoji() {
fetch("https://api.rand.fun/games/rockpaperscissorslizardspock")
    .then((response) => response.html())
    .then((data) => {
    document.querySelector(".js-result").innerHTML = data.result;
    })
    .catch((error) => console.log(`Error: ${error}`))
}
document.querySelector(".js-emoji").addEventListener("click", getEmoji);