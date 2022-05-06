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
// effet sur polaroid team members page about
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

//--------- Script Accordion Single Member page ---------//
let btn_acc = document.querySelectorAll(".accordion");
let content_acc = document.querySelectorAll(".accordion-member");

for (let i = 0; i < btn_acc.length; i++) {
    btn_acc[i].onclick = function () {
        for (let index = 0; index < content_acc.length; index++) {
            content_acc[index].classList.remove('accordion-active');
        }
        content_acc[i].classList.toggle('accordion-active');
    }
}
//--------- ------------------------------------ ---------//

let album = document.querySelector(".album");
window.addEventListener('scroll', function () {
    let vynil = document.querySelector(".vynil");
    if(window.scrollY +300 > album.offsetTop){
        vynil.classList.add("vynil-animated");
    }else {
        vynil.classList.remove("vynil-animated");
    }
})
