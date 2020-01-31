document.addEventListener('mousemove', (e) => {
    const body = document.querySelector('body');
    const bubbles = document.createElement('span');

    const x = e.offsetX;
    const y = e.offsetY;

    bubbles.style.left = x+'px';
    bubbles.style.top = y+'px';

    const size = Math.random() * 100;

    bubbles.style.width = size+'px';
    bubbles.style.height = size+'px';

    body.appendChild(bubbles);

    setTimeout(() => {
        bubbles.remove()
    }, 4000)
});