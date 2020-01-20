function toggle() {
    const blur = document.querySelector('.container');
    blur.classList.toggle('active');

    const popup = document.getElementById('popup');
    popup.classList.toggle('active')
}