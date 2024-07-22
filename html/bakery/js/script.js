const $loading = document.querySelector('#loading');
const $screen = document.querySelector('#loading-screen');
const $text = document.querySelector('#loading p');

window.addEventListener('load', (event) => {
    $loading.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden'
        },
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    $screen.animate(
        {
            translate: ['0 100vh', '0 0', '0 -100vh']
        },
        {
            duration: 2000,
            delay: 800,
            easing: 'ease',
            fill:'forwards'
        }
    );
    $text.animate(
    [
        {
            opacity: 1,
            offset: 0.8
        },
        {
            opacity: 0,
            offset: 1
        }
    ],
        {
            duration:1200,
            easing: 'ease',
            fill: 'forwards'
        }
    )
})

const animateFade = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
                {
                    opacity: [0, 1],
                    filter: ['blur(.4rem)', 'blur(0)'],
                    translate: ['0 4rem', 0]
                },
                {
                    duration: 2000,
                    easing: 'ease',
                    fill: 'forwards'
                }
            )
            obs.unobserve(entry.target);
        }
    })
}

const fadeObserver = new IntersectionObserver(animateFade);

const fadeinNodes = document.querySelectorAll('.fadein');
fadeinNodes.forEach((node) => {
    //스크롤이 되어서 페이지에 화면이 보여질때 opacity 변경.
    fadeObserver.observe(node);
})

//이미지 가져오기
const $mainImg = document.querySelector('.gallery-image');
const $thumbImgs = document.querySelectorAll('.gallery-thumbnails');

$thumbImgs.addEventListener('mouseover', (event) => {
    //event 가 발생된 태그
    if (event.target.nodeName === 'IMG') {
        $mainImg.src = event.target.src;
        $mainImg.animate({opacity : [0,1]}, 300)
        
    }
})  

//메뉴 버튼 클릭 시 오픈
const $menuOpen = Document.querySelector('#menu-open');
const $menuPanel = Document.querySelector('#menu-panel');
const $menuItems = Document.querySelector('#menu-panel li');
const $menuClose = Document.querySelector('#menu-close');

const menuOption = {
    duration : 1400,
    easing : 'ease',
    fill : 'forward'
}

$menuOpen.addEventListener('click', (event) => {
    $menuPanel.animate({translate : ['100vw', 0]}, menuOption);
    $menuItems.forEach((menuItem, index) => {
        $menuItems.animate(
            {
                opacity : [0, 1],
                translate : ['2rem', 0]
            },
            {
                duration : 2400,
                delay : 300*index,
                easing : 'ease',
                fill : 'forward'
            }
        )
    })
})

//메뉴 닫기
$muenuClose.addEventListener('click', (event) => {
        $menuPanel.animate({translate : [0, '100vw']}, menuOption);
        $menuItems.forEach((menuItem) => {
            menuItem.animate({opacity: [1, 0]}, menuOption);
        })
})