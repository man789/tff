let bandNames = document.querySelectorAll('.band-name');
let boxImg = document.querySelector('.box-img');
let bandsImg = document.querySelectorAll('.bands-img');
let navBg = document.querySelector('.nav-bg');
let genre = document.querySelectorAll('.genre');
let bandTyped = document.querySelectorAll('.band-typed');

let a = 0;
let bandTab = [];
let nameBox = '';

function nameOver(param) {

    nameBox += bandNames[param].innerHTML;

    bandsImg[param].style.opacity = "1";
    bandNames[param].style.transition = ".3s";
    bandNames[param].style.paddingLeft = "10px";
    
    typed();
}

function nameOut(param) {

    nameBox = '';

    bandsImg[param].style.opacity = "0";
    bandNames[param].style.paddingLeft = "0px";
}

function typed() {

    bandTyped[0].innerHTML = '';
    bandTab = nameBox.split('');

    n = 0;

    let timer = setInterval(() => {
        if (n < bandTab.length) {
            bandTyped[0].innerHTML += bandTab[n];
            n++;
        } else {
            clearInterval(timer);
        }
    }, 200);
}

// Single Band

let sbBtn = document.querySelectorAll('.sb-btn-info');
let sbTxt = document.querySelectorAll('.sb-txt');

function active(x) {
        if (sbBtn[x].classList.contains('sb-active')) {
            
        } else {
            sbBtn.forEach(element => {
                element.classList.remove('sb-active')
            });

            sbBtn[x].classList.add('sb-active')
        }

            sbTxt.forEach(element => {
                element.classList.remove('sb-show')
                element.classList.add('sb-hide')
            });

        
        if (sbBtn[x].classList.contains('sb-bio')) {
            sbTxt[0].classList.add('sb-show');
            sbTxt[0].classList.remove('sb-hide');
        } else if (sbBtn[x].classList.contains('sb-releases')) {
            sbTxt[1].classList.add('sb-show');
            sbTxt[1].classList.remove('sb-hide');
        } else if (sbBtn[x].classList.contains('sb-event')) {
            sbTxt[2].classList.add('sb-show');
            sbTxt[2].classList.remove('sb-hide');
        } else if (sbBtn[x].classList.contains('sb-members')) {
            sbTxt[3].classList.add('sb-show');
            sbTxt[3].classList.remove('sb-hide');
        } 
}