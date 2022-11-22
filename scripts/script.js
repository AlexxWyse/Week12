const ClickButton = document.querySelector('.clickme');

// console.log(ClickButton);

function clickHandler() 
{
    alert("You Clicked")
    ClickButton.removeEventListener("click", clickHandler)
}

ClickButton.addEventListener("click", clickHandler, {once:true});

function changeBGcolor() {
    // document.body.style.backgroundColor = "pink";
    document.body.classList.add("color")
}

ClickButton.addEventListener("click", changeBGcolor)

function buttonPress() {
    if (ClickButton.textContent == "Click me!") {
        ClickButton.textContent = "Clicked!"
    } else { 
        ClickButton.textContent = "Click me!" 
    }
}

ClickButton.addEventListener("click", buttonPress)