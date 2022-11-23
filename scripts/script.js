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

function updateImage(event) {
    let image = document.getElementById("shoppingCart")
    image.src = "image/263142.png";
    image.alt = "shopping cart"
    image.width = "300"; 
    image.height = "300";
    console.log(event);   
}

ClickButton.addEventListener("click", updateImage)


const buttonContainer = document.querySelector(".buttons")

function changeBGGreen(event) 
{
    if (event.target.tagName === "BUTTON")
    event.target.style.backgroundColor = "green";
}

function changeColor(event) {
    event.target.style.backgroundColor = event.target.textContent;
}

buttonContainer.addEventListener("mouseover", changeBGGreen)
buttonContainer.addEventListener("click", changeColor)

