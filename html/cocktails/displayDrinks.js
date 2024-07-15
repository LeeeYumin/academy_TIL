function displayDrinks(data) {
    const $title = document.querySelector(".title");
    const $container = document.querySelector(".item-container");
    const { drinks } = data;
    $container.innerHTML = null;
    if (!drinks) {
        $title.textContent = "Sorry, no drinks matched your search";
        // $container.innerHTML = null;
    } else {
        $title.textContent = "";
        // $container.innerHTML = null;
        const isMainPage = document.querySelector(".search-form") ? true : false;
        drinks.forEach((drink) => createSingleItem(drink, $container, isMainPage));

    }
}

function createSingleItem(drink, $parent, isMainPage) {
    
    const $item = document.createElement("article");
    $item.setAttribute("class", "cocktail");
    
    const $img = document.createElement("img");
    $img.setAttribute("src", drink.strDrinkThumb);
    $item.appendChild($img);
    
    const $name = document.createElement("p");
    $name.setAttribute("class", "name");
    $name.textContent = drink.strDrink;
    $item.appendChild($name);

    if (isMainPage) {
        $item.addEventListener('click', (event) => {
            window.location.href = "./drink.html";
        })
    } else {
        detailsOfItem(drink, $item);
    }

    $parent.appendChild($item);
}

function detailsOfItem(drink, $item) {
    const {strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 } = drink;
    const ingredients = [ strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 ]

    const $desc = document.createElement("p");
    $desc.classList.add("desc");
    $desc.textContent = strInstructions;

    const $ingredients = document.createElement("ul")
    $ingredients.classList.add("ingredients");
    ingredients.map((ing) => {
        const $li = document.createElement("li");
        $li.textContent = ing;
        $ingredients.appendChild($li);
    })

    $item.appendChild($desc);
    $item.appendChild($ingredients);
}

export default displayDrinks;