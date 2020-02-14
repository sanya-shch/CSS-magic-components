document.addEventListener('mousemove', (e) => {
  const body = document.querySelector('body');
  const span = document.createElement('span');

  const x = e.offsetX;
  const y = e.offsetY;

  span.style.left = x + 'px';
  span.style.top = y + 'px';

  const size = Math.random() * 100;

  span.style.width = size + 20 + 'px';
  span.style.height = size + 20 + 'px';

  body.appendChild(span);

  setTimeout(() => {
    span.remove()
  }, 2000)
});