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