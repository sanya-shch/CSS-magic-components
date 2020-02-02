document.addEventListener('mousemove', e => {
    gsap.to('.imgBx', {
        x: e.clientX,
        y: e.clientY,
        stagger: -0.1
    })
});