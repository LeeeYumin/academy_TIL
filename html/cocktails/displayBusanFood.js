export default function displayStore(items) {
    const $container = document.querySelector(".item-container");
    items.forEach((item) => createSingleItem(item, $container));
}

function createSingleItem(item, $parent) {
    const { UC_SEQ: id, MAIN_IMG_THUMB: thumb, MAIN_TITLE: name } = item;
    const $item = document.createElement("article");
    $item.setAttribute("class", "cocktail");
    
    if (thumb !== null) {
        const $img = document.createElement("img");
        $img.setAttribute("src", thumb);
        $item.appendChild($img);
    }
    
    const $name = document.createElement("p");
    $name.setAttribute("class", "name");
    $name.textContent = name;
    $item.appendChild($name);

    // $item.addEventListener('click', (event) => {
    //     window.location.href = `./drink.html?id=${id}`;
    // })

    $parent.appendChild($item);
}