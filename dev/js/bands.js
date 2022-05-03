let bandNames = document.querySelectorAll('.band-name');
let boxImg = document.querySelector('.box-img');
let bandsImg = document.querySelectorAll('.bands-img');
let navBg = document.querySelector('.nav-bg');
let genre = document.querySelectorAll('.genre');
let bandTyped = document.querySelectorAll('.band-typed')

let a = 0;

let bandTab = []

function nameOver(param) {
    a = param;
    bandsImg[a].style.opacity = "1";
    bandNames[a].style.transition = ".3s";
    bandNames[a].style.paddingLeft = "10px";

    typed();
}

function nameOut(param) {
    a = param;
    bandsImg[a].style.opacity = "0";
    bandNames[a].style.paddingLeft = "0px";

    bandTab = []
    bandTyped[0].innerHTML = ''

}


function typed() {
    bandTab = bandNames[a].innerHTML.split('');
    let n = 0
    setInterval(() => {
        if (n < bandTab.length) {
            bandTyped[0].innerHTML += bandTab[n];
            n++;
        }
    }, 200);
}