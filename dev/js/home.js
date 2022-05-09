
// what's new typed

let word = document.querySelectorAll('.typed-word');

let letterTab = [];
let what = word[0].innerHTML

function typing() {

    word[0].innerHTML = '&zwnj;'
    letterTab = what.split('')

    let y = false;
    let n = 0;

    setInterval(() => {
        if (n < letterTab.length) {
            word[0].innerHTML += letterTab[n];
            n++;
        }

    }, 200);

    setTimeout(() => {
        typing()
    }, 4000);
}

window.onload = typing()

// parallax pour les cartes de la home

let homeCard = document.querySelectorAll('.home-card');

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;

    homeCard.forEach(element => {
        element.style.backgroundPositionY = offset * 0.5 + "px"
        element.style.backgroundPositionX = offset * 0.5 + "px"
    });
})

// intro

let logoIntro = document.querySelector('.logo-intro');
let introCC = document.querySelector('.intro')

window.onload = function intro() {
    logoIntro.style.opacity = 1

    setTimeout(() => {
        logoIntro.style.opacity = 0
    }, 3000);

    setTimeout(() => {
        introCC.style.display = 'none'
    }, 6000);
}