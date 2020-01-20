const scroll = document.querySelector('.skewed');

window.addEventListener('scroll', function () {
    const value = -10 + window.scrollY / 60;
    scroll.style.transform = `skewY(${value}deg)`
});