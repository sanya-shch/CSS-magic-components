const svg = document.getElementById('scrollPath'),
    path = document.getElementById('scrollLine'),
    light = document.getElementById('light'),
    bg = document.getElementById('scrollBg'),
    _points = path.getAttribute('points').split(/[ ,]+/),
    _duration = 1;

let _rectH = svg.clientHeight,
    _winCenter = window.innerHeight / 2,
    _tween,
    _rect;

function init() {
    const _values = [];

    _winCenter = window.innerHeight / 2;
    _rectH = svg.clientHeight;

    _rect = bg.getBoundingClientRect();

    for (let i = 0; i < _points.length -2; i += 2) {
        const _x = parseFloat(_points[i]) + _rect.left;
        const _y = parseFloat(_points[i + 1]);

        _values.push({
            x: _x - (light.width / 2),
            y: _y - (light.height / 2)
        });
    }

    TweenMax.set('#light', {x: _values[0].x, y: _values[0].y});
    _tween = new TweenMax(
        '#light',
        _duration,
        {
            bezier: {
                type: "thru",
                curviness: 0,
                values: _values
            },
            paused: true
        }
    );

    window.addEventListener('scroll', handle_scroll);
    animate();
}

function handle_scroll() {
    _rect = bg.getBoundingClientRect();
}

function animate() {
    const _elCenter = _rect.top + (_rectH / 2);  //center of layer from document top
    const _scrollFromMiddle =  - (_elCenter - _winCenter);
    let _time = (_scrollFromMiddle) / 1000;

    _time -= _duration / 2;

    _tween.time(_time);

    requestAnimationFrame(animate);
}

init();
