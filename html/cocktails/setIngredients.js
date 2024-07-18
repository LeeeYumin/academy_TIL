import fetchDrinks from "./fetchDrinks.js";

const BASE_URL = 'http://www.thecocktaildb.com/api/json/v1/1/';
const searchIngredientByName = `${BASE_URL}search.php?i=`;
const searchByIngredient = `${BASE_URL}filter.php?i=`;

const $modal = document.querySelector('.modal-overlay');
const $close = document.querySelector('.close-btn');
const $ingredients = document.querySelector('.ingredients');

export function setIngredients() {
    $ingredients.addEventListener('click', (event) => {
        fetchDrinks(`${searchByIngredient}${event.target.textContent}`);
        fetchDrinks(`${searchIngredientByName}${event.target.textContent}`);
        //fetchDrinks(`${url}${event.target.textContent}`);

        // const $similar = document.querySelector('.similar-cocktails');
        // $similar.appendChild(document.createTextNode(event.target.textContent));
        
        $modal.classList.add('open-modal');
        
    })
    
    $close.addEventListener('click', (event) => {
        $modal.classList.remove('open-modal');
    });
}

