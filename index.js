// menu button js 
let menuButton = document.querySelector('.menu-btn');
let menu = document.querySelector('.pages');
let button = false;
menuButton.addEventListener('click', () => {
    if (button == false) {
        menuButton.style.rotate = '-90deg';
        menu.style.display = 'block';
        button = true;
    } else {
        menuButton.style.rotate = '0deg';
        menu.style.display = 'none';
        button = false;
    }

})

