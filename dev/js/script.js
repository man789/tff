let navLogo = document.getElementById('logo-nav');
let header = document.querySelector('.header');

// Menu qui réduit onScroll
window.addEventListener('scroll', function () {
    let scroll = window.scrollY
    if (scroll != 0) {
        navLogo.style.opacity = "0"
        header.style.height = "7%"
    } else {
        header.style.height = "12%"
        setTimeout(() => {
            navLogo.style.opacity = "1"
        }, 300);
    }
})

header.addEventListener('mouseenter', function () {
    let scroll = window.scrollY
    if (scroll != 0) {
        header.style.height = "12%"
        setTimeout(() => {
            navLogo.style.opacity = "1"
        }, 300);
    }
})

header.addEventListener('mouseleave', function () {
    let scroll = window.scrollY
    if (scroll != 0) {
        navLogo.style.opacity = "0"
        header.style.height = "7%"

        setTimeout(() => {
            navLogo.style.opacity = "0"
        }, 301);
    }
})


// Burger menu 

let burger = document.querySelector('.burger');
let burgerSpans = document.querySelectorAll('.burger-span');
let burgerCross = document.querySelectorAll('.burger-cross');
let menuBurger = document.querySelector('.menu-burger');
let burgerBg = document.querySelector('.burger-bg');
let burgerInit = true;
let burgerClicked = false;


burger.addEventListener('click', function () {

    burgerClicked = true;

    if (burgerInit == true) {

        burgerSpans[0].style.transform = 'translate(120%)';
        burgerSpans[3].style.transform = 'translate(-120%)';

        menuBurger.style.transform = 'translate(0%)';
    
        setTimeout(() => {
            burgerCross[0].style.transform = 'rotate(45deg)';
            burgerCross[1].style.transform = 'rotate(-45deg)';
            
            menuBurger.style.opacity = 1;
            burgerBg.style.opacity = .9;
        }, 300);

        burgerInit = false;
    } else {
        burgerCross[0].style.transform = 'rotate(0deg)';
        burgerCross[1].style.transform = 'rotate(0deg)';

        menuBurger.style.opacity = 0;
        burgerBg.style.opacity = 0;

        setTimeout(() => {
            burgerSpans[0].style.transform = 'translate(0%)';
            burgerSpans[3].style.transform = 'translate(0%)';

            menuBurger.style.transform = 'translate(-100%)';
            burgerClicked = false;
        }, 300);

        burgerInit = true;
    }

})

burger.addEventListener('mouseenter', function () {

    if (burgerClicked == false) {
        
        burgerSpans[0].style.transform = 'translate(50%)';
        burgerSpans[3].style.transform = 'translate(-50%)';
    }
})

burger.addEventListener('mouseleave', function () {
    if (burgerClicked == false) {
    
        burgerSpans[0].style.transform = 'translate(0%)';
        burgerSpans[3].style.transform = 'translate(0%)';
    }
})