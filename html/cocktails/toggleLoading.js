const $loading = document.querySelector(".loading");


function showLoading () {
    $loading.classList.remove('hide-loading');
}

function hideLoading () {
    $loading.classList.add('hide-loading');
}

export {showLoading, hideLoading};