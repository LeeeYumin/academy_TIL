import fetchDrinks from "./fetchDrinks.js";

const url = 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?i='
const $ingredients = document.querySelector('.ingredients');
export function setIngredients() {
    $ingredients.addEventListener('click', (event) => {
        fetchDrinks(`${url}${event.target.textContent}`);
        // const $similar = document.querySelector('.similar-cocktails');
        // $similar.appendChild(document.createTextNode(event.target.textContent));
    })
}
