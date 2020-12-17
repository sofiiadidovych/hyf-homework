// @ts-check

const giphyInputField = document.querySelector('#giphy_input_field');
const searchButton = document.querySelector('#giphy_pick_button');
const numberOfGifs = document.querySelector('#number_of_gifs')
const imageContainer = document.querySelector('.image_container');

searchButton.addEventListener('click', () => {
    if (!giphyInputField.value) {
        alert('what are you looking for?');
        return;
    }

    // Check if user has specified number of gifs requested
    const userLimit = parseInt(numberOfGifs.value);
    const limit = userLimit > 0 ? userLimit : 25;

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=68zOvHNVPxaAz5sALi2RikbsiJ45rhOT&q=${giphyInputField.value}&limit=${limit}&lang=en`)
        .then(response => response.json())
        .then(gifs => {
            // Remove all current gifs
            imageContainer.innerHTML = '';
            console.log(gifs);
            gifs.data.forEach(gif => {
                const image = document.createElement('img');
                image.setAttribute('src', `${gif.images.fixed_width.url}`);
                imageContainer.appendChild(image);
            })
        })
})
