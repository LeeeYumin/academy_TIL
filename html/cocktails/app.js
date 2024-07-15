//import displayDrinks from "./displayDrinks.js"; //displayDrinks 말고 display 로 해도 상관무.

// async function fetchDrinks() {
//     const response = await fetch(URL);
//     const data = await response.json();
//     console.log(data);
// }

//비교
/*
function fetchDrinks() {
    fetch(URL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data.drinks[0]);
            displayDrinks(data); //import 이름이랑 같게
            // const $container = document.querySelector('.item-container')
            // const $img = document.createElement('img');
            // $img.setAttribute('src', data.drinks[0].strDrinkThumb);
            // $container.appendChild($img);
            // return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${data.drinks[0].idDrink}`);
        })
        // .then((res) => {
        //     return res.json()
        // })
        // .then((data) => {
        //     console.log(data);
        // })
        .catch(error => console.error(error));

    console.log('finish');
    // const data = response.json();
    // console.log(data);
}
fetchDrinks(); //fetch
*/

/*
async function fetchDrinkss() {
    const response = await fetch(URL);
    const data = await response.json();
    console.log (data);
    console.log ('finish');   
}

fetchDrinkss(); //async await
*/

import fetchDrinks from "./fetchDrinks.js";
import './searchForm.js';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

fetchDrinks(URL);