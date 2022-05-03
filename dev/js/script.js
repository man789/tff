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