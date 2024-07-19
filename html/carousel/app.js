const $slideContainer = document.querySelector('.slider-container');
const $slideNodes = document.querySelectorAll('.slide');
const $prevBtn = document.querySelector('.prev-btn');
const $nextBtn = document.querySelector('.next-btn');

const bgColor = ['red', 'blue', 'coral', 'green'];

$slideNodes.forEach((node, index) => {
    node.style.background = bgColor[index];
    node.style.left = `${index * 100}%`;
})

const carousel = new Carousel();

function Carousel() {
    var index = 0;
    // $prevBtn.style.display = 'none';
    $prevBtn.disabled = true;

    this.nextIndex = function() {
        index++;
        displaySlide();
    }

    this.prevIndex = function() {
        index--;
        displaySlide();    
    }

    function displaySlide() {
        if (index === $slideNodes.length - 1) {
            // displayButton($nextBtn, 'none'); 
            disabledButton($nextBtn, true); 
        } else if (index === 0) {
            // displayButton($prevBtn, 'none');
            disabledButton($prevBtn, true);
        } else {
            // displayButton($nextBtn, 'block');
            // displayButton($prevBtn, 'block');
            disabledButton($nextBtn, false); 
            disabledButton($prevBtn, false);
        }
        slide();
    }

    function slide() {
        $slideNodes.forEach((node) => node.style.transform = `translateX(-${index*100}%)`);
    }

    function displayButton(btn, display) {
        btn.style.display = display;
    }

    function disabledButton(btn, disabled) {
        btn.disabled = disabled;
    }
}

$prevBtn.addEventListener('click', () => {
    carousel.prevIndex();
})

$nextBtn.addEventListener('click', () => {
    carousel.nextIndex();
})