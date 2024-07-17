const $alert = document.querySelector(".alert")

export function alertMessage(message) {
    $alert.textContent = message;
    setTimeout(() => $alert.textContent = '', 1000);
}