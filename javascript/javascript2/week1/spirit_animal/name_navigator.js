// Array of spirit animals
const spiritAnimals = [
    'The Crying Graphorns', 'The Fullmoon Fwooper',
    'The Shiny Niffler', 'The Occamy Hatchling',
    'The House Elves', 'The Pretty Murtlap',
    'The Flying Billywig', 'The Swooping Evil',
    'The Rainbow Thunderbird','Giant Dung Beetles']; // inspired by "Fantastic Beasts"

function getTheSpiritAnimal() {
    const userName = inputField.value.trim();
    const info = document.querySelector('#info_paragraph');
    if (userName === '') {
        info.innerText = 'Tell me your name, and I will tell you your spirit animal'
    } else {
        const randomNumber = Math.floor(Math.random() * spiritAnimals.length);
        info.innerText = `${userName} - ${spiritAnimals[randomNumber]}`
    }
}

// Option #1: The button is clicked
const animalButton = document.querySelector('#get_animal_name_button');
animalButton.addEventListener('click', function() {
    if (document.querySelector('#button_click_option').checked) {
        getTheSpiritAnimal();
    }
});

// Option #2: Hover over inputfield
const inputField = document.querySelector('#input_field');
inputField.addEventListener('mouseover', function() {
    if (document.querySelector('#inputfield_hover_option').checked) {
        getTheSpiritAnimal();
    }
});

// Option #3: When text is entered to the inputfield
inputField.addEventListener('input', function() {
    if (document.querySelector('#text_written_option').checked) {
        getTheSpiritAnimal();
    }
})