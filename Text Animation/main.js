const text = document.querySelector('.textAnim');
const strText = text.textContent;
const arrText = strText.split('');

text.textContent = '';

for(let i = 0, len = arrText.length; i < len; i++){
    text.innerHTML += '<span>' + arrText[i] + '</span>';
}




let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === arrText.length){
        clearInterval(timer);
        timer = null;
        //return;
    }
}