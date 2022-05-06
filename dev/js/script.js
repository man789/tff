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
    }
})


let album = document.querySelector(".album");
window.addEventListener('scroll', function () {
    let vynil = document.querySelector(".vynil");
    if(window.scrollY +300 > album.offsetTop){
        vynil.classList.add("vynil-animated");
    }else {
        vynil.classList.remove("vynil-animated");
    }
})
