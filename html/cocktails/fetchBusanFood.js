import { hideLoading } from "./toggleLoading.js"
import displayStore from "./displayBusanFood.js"

export default function fetchOpenAPI(requestUrl) {
    fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => displayStore(data.getFoodKr.item))
    .finally(hideLoading())
}