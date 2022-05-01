let bandNames = document.querySelectorAll('.band-name');
let boxImg = document.querySelector('.box-img');
let bandsBg = document.querySelector('.bands-bg');
let genre = document.querySelectorAll('.genre');
let navLogo = document.getElementById('logo-nav');

let a = 0;

function nameOver(param) {
    a = param;
    bandsBg.classList.add('band0' + a);
    bandNames[a].style.transition = ".3s"
    bandNames[a].style.paddingLeft = "10px"
    genre[0].style.opacity = "0"
    setTimeout(() => {
        
        bandsBg.style.opacity = 1;
    }, 500);
}

function nameOut(param) {
    a = param;
    bandsBg.classList.remove('band0' + a);
    bandNames[a].style.paddingLeft = "0px"
    bandsBg.style.opacity = 0;
    genre[0].style.opacity = "1"
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

