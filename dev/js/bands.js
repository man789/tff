let bandNames = document.querySelectorAll('.band-name');
let boxImg = document.querySelector('.box-img');
let genre = document.querySelectorAll('.genre');
let bandsImg = document.querySelectorAll('.bands-img');
let navLogo = document.getElementById('logo-nav');
let navBg = document.querySelector('.nav-bg');

let a = 0;

function nameOver(param) {
    a = param;
    bandsImg[a].style.opacity = "1";
    bandNames[a].style.transition = ".3s"
    bandNames[a].style.paddingLeft = "10px"
    genre[0].style.opacity = "0"
}

function nameOut(param) {
    a = param;
    bandsImg[a].style.opacity = "0";
    bandNames[a].style.paddingLeft = "0px"
    setTimeout(() => {
        
        genre[0].style.opacity = "1"
    }, 500);
}

// Menu qui réduit onScroll
window.addEventListener('scroll', function () {
    let scroll = window.scrollY
    if (scroll != 0) {
        navLogo.style.opacity = "0"
        navLogo.style.width = "0%"
    } else {
        setTimeout(() => {
            navLogo.style.opacity = "1"
            
        }, 300);
        navLogo.style.width = "30%"
    }
})

