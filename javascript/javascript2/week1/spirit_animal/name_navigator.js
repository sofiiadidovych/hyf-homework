// Create an input element
const inputField = document.createElement('input');
inputField.setAttribute('type','text');
inputField.setAttribute('name','username');
inputField.setAttribute('placeholder','Enter your name');
inputField.setAttribute('id','my-input');
const spiritAnimalNavigator = document.getElementById('spirit-animal-navigator');
spiritAnimalNavigator.appendChild(inputField);

// Create a button
const myButton = document.createElement('button');
myButton.setAttribute('id','my-butn');
myButton.innerText = 'Let`s go!';
spiritAnimalNavigator.appendChild(myButton);

// Create a tag to display the spirit animal info
const info = document.createElement('p');
spiritAnimalNavigator.appendChild(info);

// Array of spirit animals
const spiritAnimals = [
    'The Crying Graphorns', 'The Fullmoon Fwooper',
    'The Shiny Niffler', 'The Occamy Hatchling',
    'The House Elves', 'The Pretty Murtlap',
    'The Flying Billywig', 'The Swooping Evil',
    'The Rainbow Thunderbird','Giant Dung Beetles']; // inspired by "Fantastic Beasts"

function getTheSpiritAnimal() {
    const userName = document.getElementById('my-input').value.trim();

    if (userName === '') {
        info.innerText = 'Tell me your name, and I will tell you your spirit animal'
    } else {
        const randomNumber = Math.floor(Math.random() * spiritAnimals.length);
        info.innerText = `${userName} - ${spiritAnimals[randomNumber]}`
    }
}

myButton.addEventListener('click', getTheSpiritAnimal);