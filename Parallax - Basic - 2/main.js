const canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    _canvasW = canvas.width,
    _canvasH = canvas.height,
    _winCenter = window.innerHeight / 2,  // onresize
    layers = [
        {url: 'images/2-layer1.png', offset: -0.2, x: 40, y: 70},
        {url: 'images/2-layer2.png', offset: -0.3, x: 100, y: 100},
        {url: 'images/2-layer3.png', offset: -0.4, x: 130, y: 140},
        {url: 'images/2-light.png', offset: 2, x: 150, y: 140},
        {url: 'images/2-mask.png', offset: 0, x: 0, y: 40}
    ];

let loaded = 0,
    _canvasRect = canvas.getBoundingClientRect(); // onresize

function init() {
    for (let i = 0; i < layers.length; i += 1) {
        const img = new Image();
        img.src = layers[i].url;
        img.onload = handle_img_load;
        layers[i].img = img;
    }

    window.addEventListener('scroll', handle_scroll);
}

function handle_img_load() {
    loaded += 1;

    if (loaded === layers.length) {
        animate();
    }
}

function handle_scroll() {
    _canvasRect = canvas.getBoundingClientRect();
}

function animate() {
    ctx.clearRect(0, 0, _canvasW, _canvasH);

    ctx.fillStyle = '#1B323D';
    ctx.globalCompositeOperation = "source-over";
    ctx.fillRect(0, 0, _canvasW, _canvasH);

    for (let i = 0; i < layers.length; i += 1) {

        const _elCenter = _canvasRect.top + (_canvasH / 2);  // center of layer from document top
        const _scrollFromMiddle = _elCenter - _winCenter;  // distance between element center and viewport center
        const _y = layers[i].y + (_scrollFromMiddle * layers[i].offset); // multiply by offset and add base y    // const _y = layers[i].y;

        if (i === layers.length - 1) {
            ctx.globalCompositeOperation = "destination-in";
        }

        ctx.drawImage(layers[i].img, layers[i].x, _y);
    }

    requestAnimationFrame(animate);
}

init();
