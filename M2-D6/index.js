//.....TO CHANGE THE HEADER innerHtml.....//

const changeHeaderText = document.querySelector("h1.mainheader");
changeHeaderText.innerHTML = "Unique Smartphone Shop";

// .......OR THIS,IN CASE OF AN id='mainheader'.....//
// const changeHeaderText = document.getElementById("mainheader");
// changeHeaderText.innerHTML = "Unique Smartphone Shop";

function randomNumber(x) {
  let randomNumber = Math.floor(Math.random() * x);
  return randomNumber;
}

//....OPEN BELOW TO CHANGE HEADER_TEXT COLOR....//
// let red = randomNumber(250)
// let green = randomNumber(100)
// let blue = randomNumber(110)
// mainheader.style.color = `rgb(${red}, ${green}, ${blue})`

//......TO CHANGE THE BACKGROUND COLOR......//
const body = document.querySelector("body");

let red2 = randomNumber(250);
let green2 = randomNumber(245);
let blue2 = randomNumber(235);
body.style.backgroundColor = `rgb(${red2}, ${green2}, ${blue2})`;

const changeAddress = document.querySelector("p.address");
changeAddress.innerHTML =
  "Am Dobben str. 2 23765, Hamburg. This is a fake address";

  
const phoneLinks = document.querySelectorAll("a.amazon_links")


for (let i = 0; i < phoneLinks.length; i++){
    let linkColor = phoneLinks[i]
    linkColor.style.color = "red";
}

