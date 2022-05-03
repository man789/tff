<<<<<<< HEAD
let deathMetal = document.getElementById('deathmetal')
let punk = document.getElementById('punk');
let industriel = document.getElementById('industriel')
let allBtn = document.getElementById('all-btn')
let deathMetalBtn = document.getElementById('deathmetal-btn');
let punkBtn = document.getElementById('punk-btn');
let industrielBtn = document.getElementById('industriel-btn')

deathMetalBtn.onclick = () => {
    punk.classList.add('inactive');
    industriel.classList.add('inactive');
    deathMetal.classList.remove('inactive');
}
punkBtn.onclick = () => {
    deathMetal.classList.add('inactive');
    industriel.classList.add('inactive');
    punk.classList.remove('inactive');
}
industrielBtn.onclick = () => {
    punk.classList.add('inactive');
    deathMetal.classList.add('inactive');
    industriel.classList.remove('inactive')
}
allBtn.onclick = () => {
    deathMetal.classList.remove('inactive')
    punk.classList.remove('inactive');
    industriel.classList.remove('inactive')
}
=======
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
>>>>>>> origin/piero
