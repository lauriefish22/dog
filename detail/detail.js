import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');
let dogData = {};

window.addEventListener('load', async () => {
    const data = new URLSearchParams(window.location.search);
    const id = data.get('id');
    const dog = await getDog(id);
    dogData = dog;

    //renderDogDetail(dog);
    //dogDetailContainer.append(dog);
    displayDog(dogData);
});

function displayDog(dogData) {
    const dogDetailEl = renderDogDetail(dogData);
    dogDetailContainer.append(dogDetailEl);
}
// on load
// get the id from URL

// use the id to fetch the dog
// render and append this dog's details to the container
