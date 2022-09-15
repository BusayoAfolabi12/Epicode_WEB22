const mobileBox = document.querySelector(".header");
const fetchdata = async function () {
  const res = await fetch("https://striveschool-api.herokuapp.com/books%22");
  const data = await res.json();
  const result = data;
  console.log(result);
  result.map((value) => {
    const mobile = document.createElement("div");
    mobile.innerHTML = `<p>${value.price}</p>
        <img src="${value.img} " />`
  ;
    mobileBox.appendChild(mobile);
  });
};

fetchdata();