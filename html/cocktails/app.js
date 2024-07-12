const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

// async function fetchDrinks() {
//     const response = await fetch(URL);
//     const data = await response.json();
//     console.log(data);
// }

function fetchDrinks() {
    fetch(URL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data.drinks[0]);
            // const $container = document.querySelector('.item-container')
            // const $img = document.createElement('img');
            // $img.setAttribute('src', data.drinks[0].strDrinkThumb);
            // $container.appendChild($img);
            return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${data.drinks[0].idDrink}`);
        })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
        })
        .catch(error => console.error(error));

    console.log('finish');
    // const data = response.json();
    // console.log(data);
}

fetchDrinks();
