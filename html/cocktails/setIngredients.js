import fetchDrinks from "./fetchDrinks.js";

const BASE_URL = 'http://www.thecocktaildb.com/api/json/v1/1/';
const searchIngredientByName = `${BASE_URL}search.php?i=`;
const searchByIngredient = `${BASE_URL}filter.php?i=`;
//const url = 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?i='

const $ingredients = document.querySelector('.ingredients');
export function setIngredients() {
    $ingredients.addEventListener('click', (event) => {
        fetchDrinks(`${searchIngredientByName}${event.target.textContent}`);
        fetchDrinks(`${searchByIngredient}${event.target.textContent}`);
        //fetchDrinks(`${url}${event.target.textContent}`);
        
        // const $similar = document.querySelector('.similar-cocktails');
        // $similar.appendChild(document.createTextNode(event.target.textContent));
    })
}
