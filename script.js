/* circle selectors */ 
const circleButton = document.querySelectorAll('.circle');

circleButton.forEach(elem => elem.addEventListener('click', () => {
    
    circleButton.forEach(elem => elem.classList.remove('circle-active'));
    
    if(!elem.classList.contains('circle-active')) {
        elem.classList.add('circle-active');
    }
        
}));

circleButton.forEach(elem => elem.onmouseover = function halfOpacity() {
    if (!elem.classList.contains('circle-active')){
        elem.style.opacity = '0.5';
    }
});

circleButton.forEach(elem => elem.onmouseleave = function fullOpacity() {
    elem.style.opacity = '1';
});

/* nav-bar to fixed position */
const navBar = document.getElementById('nav-bar');
const navOffset = navBar.offsetTop;
const body = document.getElementById('body');

window.onscroll = function () {sticky()};

function sticky() {
    if(window.pageYOffset > navOffset) {
        navBar.classList.add('sticky-position');
        body.classList.add('padding-adjust');
    }else {
        navBar.classList.remove('sticky-position');
        body.classList.remove('padding-adjust');
    }
}

/* button animation */ 
const button = document.getElementById('button');
const buttonAnim = document.getElementById('button-anim');

button.onmouseover = function anim() {
    if (!buttonAnim.classList.contains('button-anim-start')){
        buttonAnim.classList.toggle('button-anim-start')
    }
    buttonAnim.style.animationPlayState = "running";
    buttonAnim.style.animationFillMode = 'forwards'
}

button.onmouseleave = function disableAnim() {
    buttonAnim.classList.toggle('button-anim-start');
}

/* category button */
const category = document.getElementById('category-selector');

category.onmouseover = function categoryAnim() {
    if (!category.classList.contains('category-anim')){
        category.classList.toggle('category-anim');
    }
}

category.onmouseleave = function categoryAnimDisable() {
    category.classList.toggle('category-anim');
}

console.log(category);