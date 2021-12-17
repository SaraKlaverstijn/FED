console.log("hallo")

var hamburgerbutton = document.querySelector("#burger")
var nav = document.querySelector("nav")
var kruisbutton = document.querySelector("#kruis")

hamburgerbutton.addEventListener('click',active)
kruisbutton.addEventListener('click',weg)



function active(){
nav.classList.add('toonmenu')
}



function weg(){
nav.classList.remove('toonmenu')
}



var buttonElement = document.querySelector("#dark")
var darkElement = document.querySelector("#dark-mode")

buttonElement.addEventListener("click", myFunction)

function myFunction() {
    darkElement.classList.toggle("dark-mode")
}

