export function addToLocalStrage(id, value) {
    const grocery = { id, value };
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
    return localStorage.getItem("list")
        ? JSON.parse(localStorage.getItem("list"))
        : [];
}

export function getItemFromLocalStorage(id) {
    const items = getLocalStorage();

    const filteredItems = items.filter((item) => item.id === id);
    return filteredItems[0]
}

export function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter((item) => item.id !== id);
    localStorage.setItem("list", JSON.stringify(items));
}

export function editLocalStorage(id, value) {
    let items = getLocalStorage();

    const newItems = items.map((item) => {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem("list", JSON.stringify(items));
}

export function removeAllItemFromLocalStorage(key) {
    localStorage.removeItem(key);
}