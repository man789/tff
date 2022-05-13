window.onload = scrollToTop();
// what's new typed

let word = document.querySelectorAll('.typed-word');

let letterTab = [];
let what = word[0].innerHTML

function typing() {

    word[0].innerHTML = '&zwnj;'
    letterTab = what.split('')

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
let introCC = document.querySelector('.intro');
let bodyHome = document.querySelector('.home');
let headerHome = document.querySelector('.header');
let bannerHome = document.querySelector('.blackbox');
    
    window.onload = function intro() {


            logoIntro.style.opacity = 1
            headerHome.style.transform = "translateY(-100%)";
        
            setTimeout(() => {
                logoIntro.style.opacity = 0
            }, 1500);
        
            setTimeout(() => {
                introCC.style.display = 'none';
                bodyHome.classList.remove('hide-scrollbar');
                bannerHome.style.opacity = 0;
            }, 3000);
        
            setTimeout(() => {
                headerHome.style.transform = "translateY(0%)";
                bannerHome.style.display = 'none';
            }, 3500);
            firstTime = false;
        }


function scrollToTop() {
    window.scrollTo(0, 0);
}