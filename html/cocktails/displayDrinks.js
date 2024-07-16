import { setIngredients } from "./setIngredients.js";

function displayDrinks(data) {
    const currentPage = window.location.pathname.split('/').slice(-1)[0];
    const { drinks } = data;
    if (currentPage === 'index.html') {
        const $title = document.querySelector(".title");
        const $container = document.querySelector(".item-container");
        
        $container.innerHTML = null;
        if (!drinks) {
            $title.textContent = "Sorry, no drinks matched your search";
        } else {
            $title.textContent = "";
            drinks.forEach((drink) => createSingleItem(drink, $container));
        }
    } else if (currentPage === 'drink.html') {
        if (drinks.length === 1) {
            createSinglePageItem(drinks[0]);
            setIngredients();
        } else {
            const $similar = document.querySelector('.similar-cocktails');
            $similar.innerHTML = null;

            const $name = document.querySelector(".drink-name");
            drinks.forEach((drink) => {
                if (drink.strDrink === $name.textContent) return;
                createSingleItem(drink, $similar)
            });
        }
    }
}

function createSinglePageItem(drink) {
    const { strDrinkThumb: thumb, strDrink: name, strInstructions: desc} = drink;
    const { strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 } = drink;
    const ingredients = [ strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 ];

    const $img = document.querySelector("article img");
    $img.setAttribute("src", thumb);
    
    const $name = document.querySelector(".drink-name");
    $name.textContent = name;

    const $desc = document.querySelector(".desc");
    $desc.textContent = desc;
    
    const $ingredients = document.querySelector("ul")
    ingredients.map((ing) => {
        const $li = document.createElement("li");
        const $i = document.createElement("i");
        $i.setAttribute("class", "far fa-check-square");
        $li.appendChild($i);
        $li.textContent = ing;
        $ingredients.appendChild($li);
    })

    const $button = document.querySelector("button");
    $button.addEventListener('click', (event) => {
        window.location.href = "./index.html";
    });
}

function createSingleItem(drink, $parent) {
    const { idDrink: id, strDrinkThumb: thumb, strDrink: name } = drink;
    const $item = document.createElement("article");
    $item.setAttribute("class", "cocktail");
    
    const $img = document.createElement("img");
    $img.setAttribute("src", thumb);
    $item.appendChild($img);
    
    const $name = document.createElement("p");
    $name.setAttribute("class", "name");
    $name.textContent = name;
    $item.appendChild($name);

    $item.addEventListener('click', (event) => {
        window.location.href = `./drink.html?id=${id}`;
    })

    $parent.appendChild($item);
}

export default displayDrinks;