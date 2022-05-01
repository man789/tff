let bandNames = document.querySelectorAll('.band-name');
let boxImg = document.querySelector('.box-img');
let bandsBg = document.querySelector('.bands-bg');
let genre = document.querySelectorAll('.genre');

let a = 0;

function nameOver(param) {
    a = param;
    bandsBg.classList.add('band0' + a);
    bandNames[a].style.transition = ".3s"
    bandNames[a].style.paddingLeft = "10px"
    bandsBg.style.opacity = 1;
}

function nameOut(param) {
    a = param;
    bandsBg.classList.remove('band0' + a);
    bandNames[a].style.paddingLeft = "0px"
    bandsBg.style.opacity = 0;
}