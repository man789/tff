let styleMusic = document.querySelectorAll(".style-music");
let styleMusicBtn = document.querySelectorAll(".style-music-btn");

styleMusicBtn.forEach(btn => {
    btn.onclick = () => {
        addInactive(btn);
    }
})

function addInactive(currentBtn) {
    for(let i=0; i<styleMusic.length; i++){
        styleMusic[i].classList.remove('inactive');
        if(currentBtn.value != styleMusic[i].id){
            styleMusic[i].classList.add('inactive');
        }
        if(currentBtn.value == 'all'){
            styleMusic[i].classList.remove('inactive'); 
        }
    }
}

