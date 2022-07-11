
//.....TO CHANGE THE HEADER innerHtml.....//

const changeHeaderText = document.querySelector("h1.mainheader");
changeHeaderText.innerHTML = "Unique Smartphone Shop";

// .......OR THIS,IN CASE OF AN id='mainheader'.....//
// const changeHeaderText = document.getElementById("mainheader");
// changeHeaderText.innerHTML = "Unique Smartphone Shop";

function randomNumber(x) {
let randomNumber = Math.floor(Math.random() * x)
return randomNumber 
 }

//....OPEN THIS TO CHANGE HEADER_TEXT COLOR....// 
// let red = randomNumber(250)
// let green = randomNumber(100)
// let blue = randomNumber(110)
// mainheader.style.color = `rgb(${red}, ${green}, ${blue})`


//......TO CHANGE THE BACKGROUND COLOR......//
const html = document.querySelector("html")

let red2 = randomNumber(255)
let green2 = randomNumber(255)
let blue2 = randomNumber(255)
html.style.backgroundColor = `rgb(${red2}, ${green2}, ${blue2})`;

const changeAddress = document.querySelector("p.address");
changeAddress.innerHTML = "Am Dobben str. 2 23765, Hamburg. This is a fake address";




