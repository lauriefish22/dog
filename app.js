import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

let dogsData = [];

// on load
// fetch all dogs

window.addEventListener('load', async () => {
    const dogs = await getDogs();
    dogsData = dogs;

    displayDogs();
});

// render and append all dog cards to the container

function displayDogs() {
    dogListContainer.textContent = '';
    for (let dog of dogsData) {
        const dogEl = renderDogCard(dog);
        dogListContainer.append(dogEl);
    }
}
