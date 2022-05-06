// effet JS pour les cartes de la home



// what's new typed

let word = document.querySelectorAll('.typed-word');

let letterTab = [];
let what = word[0].innerHTML

function typing() {

    word[0].innerHTML = '&zwnj;'
    letterTab = what.split('')

    let y = false;
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