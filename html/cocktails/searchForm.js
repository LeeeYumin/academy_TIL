//검색창도 모듈로 만들어봄

import fetchDrinks from "./fetchDrinks.js";

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/searchD.php?s=';

const $searchForm = document.querySelector(".search-form");
const $input = document.querySelector('[name="name"]'); // 속성값은 [ ] 로

$searchForm.addEventListener('keyup', (event) => {
    event.preventDefault();
    const value = $input.value;
    console.log(value)
    if (!value) {
        return;
    }
    fetchDrinks(`${baseURL}${value}`);
})

$searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
})