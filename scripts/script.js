const ClickBtn = document.querySelector('.clickme');
const log = console.log;

// log(ClickBtn);

function clickHandler() {
    alert('You Clicked');
}

ClickBtn.addEventListener("click", clickHandler);

