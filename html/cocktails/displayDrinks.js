import { setIngredients } from "./setIngredients.js";

const INGREDIENT_INFO = "search.php";
const DRINK_INFO = "lookup.php";
const SIMILAR_INFO = "filter.php";

function displayDrinks(dataset) {
    const { lastPath, searchKey, data } = dataset;
    const { drinks, ingredients } = data;
    if (searchKey === 's') {
        const $title = document.querySelector(".title");
        const $container = document.querySelector(".item-container");
        
        $container.innerHTML = null;
        if (!drinks) {
            $title.textContent = "Sorry, no drinks matched your search";
        } else {
            $title.textContent = "";
            drinks.forEach((drink) => createSingleItem(drink, $container));
        }
    } else if (searchKey === 'i') {
        if (lastPath === DRINK_INFO) {
            createSinglePageItem(drinks[0]);
            setIngredients();
        } else if (lastPath === SIMILAR_INFO) {
            const $similar = document.querySelector('.similar-cocktails');
            $similar.innerHTML = null;

            const $name = document.querySelector(".drink-name");
            drinks.forEach((drink) => {
                if (drink.strDrink === $name.textContent) return;
                createSingleItem(drink, $similar)
            });
        } else if (lastPath === INGREDIENT_INFO) {
            createSingleIngredientItem(ingredients[0])
            console.log(data);
        }
    } else {
        console.error(`알 수 없는 요청입니다. ${lastPath}, ${searchKey}`);
    }
}

function createSingleIngredientItem({ strIngredient: name, strDescription: desc}) {
    // const { strIngredient: name, strDescription: desc} = ingredient;

    const $img = document.querySelector(".ingredient-img");
    $img.setAttribute("src", `https://www.thecocktaildb.com/images/ingredients/${name}-Medium.png`);
    
    const $name = document.querySelector(".ingredient-name");
    $name.textContent = name;

    const $desc = document.querySelector(".ingredient-desc");
    $desc.textContent = desc;
}

function createSinglePageItem(drink) {
    const { strDrinkThumb: thumb, strDrink: name, strInstructions: desc} = drink;
    const { strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 } = drink;
    const ingredients = [ strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 ];

    const $img = document.querySelector(".drink-img");
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