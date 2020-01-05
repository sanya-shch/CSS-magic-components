const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');

const colorArr = [
    'coral',
    'cornflowerblue',
    'forestgreen'
];

const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        // console.log(entry);
        const className = entry.target.className;
        const active = document.querySelector(`[data-page=${className}]`);
        const index = entry.target.getAttribute('data-index');
        const coords = active.getBoundingClientRect();
        if(entry.isIntersecting){
            bubble.style.setProperty('left', `${coords.left}px`);
            bubble.style.setProperty('top', `${coords.top}px`);
            bubble.style.setProperty('height', `${coords.height}px`);
            bubble.style.setProperty('width', `${coords.width}px`);
            bubble.style.setProperty('background-color', `${colorArr[index]}`);
        }
    })
}

sections.forEach(section => {
    observer.observe(section);
});
