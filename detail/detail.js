import { getDog, getDogs } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');
let dogData = {};

window.addEventListener('load', async () => {
    const dog = await getDog(id);
    dogData = dog;

    getDog(id);
    renderDogDetail(dog);
    dogDetailContainer.append(dog);
});

// on load
// get the id from URL
const data = new URLSearchParams(window.location.search);
const id = data.get('id');

// use the id to fetch the dog
// render and append this dog's details to the container
