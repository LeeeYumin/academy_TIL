//import fetchDrinks from "./fetchDrinks.js";

//const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a1';
//fetchDrinks(URL);


//0716 수정
import fetchDrinks from "./fetchDrinks.js";

const URL = 'http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const query = new URLSearchParams(window.location.search);
const id = query.get('id');
fetchDrinks(`${URL}${id}`);