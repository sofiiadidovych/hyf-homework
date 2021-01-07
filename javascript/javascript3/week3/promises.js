const promise1 = fetch('https://api.github.com/search/repositories?q=user:JyothiNandyala');
const promise2 = fetch('https://api.github.com/search/repositories?q=user:ccshah298');
const promise3 = fetch('https://api.github.com/search/repositories?q=user:Enqira');

const repo = document.querySelector('#repo');

Promise.all([promise1, promise2, promise3])
    .then(responses => {
        const json = responses.map(response => response.json());
        return Promise.all(json)
    })
    .then(data => {
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            const owner = document.createElement('ul');
            owner.innerText = `Owner: ${data[i].items[0].owner.login}`;
            repo.appendChild(owner)

            for (let j = 0; j < data[i].items.length; j++) {
                const repoNames = document.createElement('li');
                repoNames.innerText = `Repo name: ${data[i].items[j].full_name}`;
                repo.appendChild(repoNames);
                const repoUrl = document.createElement('li');
                repoUrl.innerText = `Repo url: ${data[i].items[j].url}`;
                repo.appendChild(repoUrl);
            }
        }
    })