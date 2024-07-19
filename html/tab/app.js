import contents from './contents.js';

//console.log(contents.history);

const $tabBtns = document.querySelectorAll('.tab-btns button');
const $articles = document.querySelectorAll('.content-container article');
const $tabs = document.querySelector('.tab-btns');

contents.map((item, index) => {
    $tabBtns[index].textContent = item.subject;
    $articles[index].firstChild.textContent = item.content;
});

//ACTIVE 한 거만 보이게
$tabs.addEventListener('click', (event) => {
    const category = event.target.textContent;
    $tabBtns.forEach((tab) => {
        if (tab === event.target) {
            event.target.classList.add('active');
        } else {
            tab.classList.remove('active');
        }

    })
    $articles.forEach((article) => {
        if (article.classList.contains(category)) {
            article.classList.add('active');
        } else {
            article.classList.remove('active');
        }
    });
    

})
