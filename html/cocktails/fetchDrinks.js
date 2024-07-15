import displayDrinks from "./displayDrinks.js";
import { showLoading, hideLoading } from "./toggleLoading.js";

async function fetchDrinks(url) {
    /* Promise
    showLoading();
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            // hideLoading();
            displayDrinks(data);
        })
        .catch((error)=> console.log(error))
        .finally(() => hideLoading());

    console.log('finish');
    */
    try {
        showLoading();
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayDrinks(data);
    } catch (err) {
        console.error(err);
    } finally {
        hideLoading();
    }
}

export default fetchDrinks;