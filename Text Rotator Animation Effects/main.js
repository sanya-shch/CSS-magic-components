const text = document.getElementById('text');
const word = text.getElementsByTagName('span');

let i = 0;

setInterval(() => {
    word[i].style.display = 'none';
    i = (i + 1) % word.length;
    word[i].style.display = 'initial';
}, 800);
