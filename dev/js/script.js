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

let pola = document.querySelectorAll('.pola');

for(let i=0; i<pola.length; i++){

    window.addEventListener('scroll', function () {
        let scroll = window.scrollY;
        let newOffsetTop = pola[i].offsetTop - 300;
        let secondOffsettop = pola[i].offsetTop - 305;
        if (scroll > newOffsetTop){
            pola[i].classList.add('active-pola')
        }
        if (scroll < secondOffsettop){
            pola[i].classList.remove('active-pola')
        }
    })
} 
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
    }
})
