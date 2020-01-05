document.addEventListener('mousemove', textParallax);

function textParallax(e){
    this.querySelectorAll('.text').forEach(text => {
        let x = (window.innerWidth - e.pageX * 10) / 100;
        let y = (window.innerHeight - e.pageY * 10) / 100;

        text.style.transform = `translate(${x}px,${y}px)`;
    })
}