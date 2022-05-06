
let navLogo = document.getElementById('logo-nav');

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