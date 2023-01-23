import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

let dogsData = [];

// on load
// fetch all dogs

window.addEventListener('load', async () => {
    const dogs = await getDogs();
    dogsData = dogs;
});

// render and append all dog cards to the container
for (let dog of dogsData) {
    const dogEl = renderDogCard(dog);
}
