const scroll = document.querySelector('.curve');

window.addEventListener('scroll', function () {
    const value = 1 + window.scrollY / -500;
    scroll.style.transform = `scaleY(${value})`
});