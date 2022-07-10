const h1 = document.querySelector("h1")

function randomNumber(x) {
let randomNumber = Math.floor(Math.random() * x)
return randomNumber 
}
let red = randomNumber(250)
let green = randomNumber(100)
let blue = randomNumber(110)

h1.style.color = `rgb(${red}, ${green}, ${blue})`


const html = document.querySelector("html")

let red2 = randomNumber(255)
let green2 = randomNumber(255)
let blue2 = randomNumber(255)

html.style.backgroundColor = `rgb(${red2}, ${green2}, ${blue2})`


