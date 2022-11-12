function fetchRepos() {
    const orgname = document.querySelector(".js-input").value;

    fetch(`https://api.github.com/orgs/${orgname}`)
        .then((orgResponse) => orgResponse.json())
        .then((orgData) => {
            const reposURL = orgData.repos_url;
            
            fetch(reposURL)
                .then((repoResponse) => repoResponse.json())
                .then((repoData) => {
                    const reposNames = repoData.name;
                    console.log(reposNames);
                });

        });
    
        return orgRepos;
};

const btn = document.querySelector(".js-button");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    fetchRepos;
})