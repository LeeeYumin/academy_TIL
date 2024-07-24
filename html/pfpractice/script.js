// const roleNode = document.querySelectorAll('.port-container strong');
// const roleSet = new Set();
// roleNode.forEach((role) => roleSet.add(role.textContent));

// Typing
function initRole() {
    const roleNode = document.querySelectorAll('.port-container strong');
    const roleSet = new Set();
    roleNode.forEach((role) => roleSet.add(role.textContent));
    return Array.from(roleSet);
}

const $span = document.querySelector('.main h3 span');
const roleArr = initRole();
let index = 0;
let currentRole = roleArr[index].split("")

function writeTxt() {
    $span.textContent += currentRole.shift();
    if (currentRole.length > 0) {
        setTimeout(writeTxt, Math.floor(Math.random() * 100));
    } else {
        currentRole = $span.textContent.split("");
        setTimeout(deleteTxt, 3000);
    }
}

function deleteTxt() {
    currentRole.pop();
    $span.textContent = currentRole.join("");
    if (currentRole.length > 0) {
        setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    } else {
        index = (index + 1) % roleArr.length;
        currentRole = roleArr[index].split("");
        writeTxt();
    }
}

writeTxt();


// ScrollTo
function getTargetId(target) {
    if (target.nodeName === 'H1'){
        return '.main';
    }
    return `#${target.textContent.trim().toLowerCase()}`;
}

const $header = document.querySelector('header');
$header.addEventListener('click', (event) => {
    if (['LI','H1'].includes(event.target.nodeName)){
        const browserScrollY = window.pageYOffset;
        const targetId = getTargetId(event.target);
        const $target = document.querySelector(targetId);
        const targetScrollY = $target.getBoundingClientRect().top + browserScrollY;
        window.scrollTo({top:targetScrollY, behavior: 'smooth'});
    }
})

// Header
window.addEventListener('scroll', function() {
    this.requestAnimationFrame(scrollCheck);
});

function scrollCheck() {
    let browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if (browserScrollY > 0) {
        $header.classList.add('active');
    } else {
        $header.classList.remove('active');
    }
}
