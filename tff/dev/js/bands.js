let bandNames = document.querySelectorAll('.band-names');
let boxImg = document.querySelector('.box-img');
let bandsBg = document.querySelector('.bands-bg');
let genre = document.querySelectorAll('.genre');

a = 0;

bandNames[a].addEventListener('mouseover', function () {
    bandsBg.classList.add('band0' + a);
    bandsBg.style.opacity = 1;
})

bandNames[a].addEventListener('mouseout', function () {
    bandsBg.classList.remove('band0' + a);
    bandsBg.style.opacity = 0;
})

function nextName(param) {
    a = param;
    console.log(a);
}