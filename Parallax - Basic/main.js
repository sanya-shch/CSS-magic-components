const layers = [],
    layerElements = document.getElementsByClassName('layer');
let _scrollY = window.scrollY;

function init() {
    for (let i = 0; i < layerElements.length; i += 1) {
        const el = layerElements[i];
        const offset = layerElements[i].dataset.offset;
        layers.push({el: el, y: 0, offset: offset});
    }

    window.addEventListener('scroll', handle_scroll);
    // requestAnimationFrame(animate);
}

function handle_scroll(e) {
    _scrollY = window.scrollY;
    animateTween(); // *********
}


function animateTween() {
  for (let i = 0; i < layers.length; i += 1) {
    const oldY = layers[i].y;
    layers[i].y = _scrollY * layers[i].offset;
    gsap.to(layers[i].el, 0.5, {
      y: layers[i].y,
      overwrite: 'all'
    });
  }
}


// function animate() {
//     for (let i = 0; i < layers.length; i += 1) {
//         const oldY = layers[i].y;
//         layers[i].y = _scrollY * layers[i].offset;
//
//         if (oldY !== layers[i].y) {
//             layers[i].el.style.transform = 'translateY(' + layers[i].y + 'px)';
//         }
//     }
//
//     requestAnimationFrame(animate);
// }

init();
