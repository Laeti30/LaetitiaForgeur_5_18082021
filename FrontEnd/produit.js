let params = new URL(document.location).searchParams;
let id = params.get("id");
console.log(id);
let teddy = [];

const fetchTeddy = async () => {
  await fetch(`http://localhost:3000/api/teddies/${id}`)
    .then((res) => res.json())
    .then((data) => (teddy = data));

  console.log(teddy);
};

const teddyDisplay = async () => {
  await fetchTeddy();

  let teddyCard = document.createElement("div");
  document.querySelector("main").appendChild(teddyCard);
  teddyCard.classList.add("teddyProduct");

  let teddyImg = document.createElement("img");
  teddyCard.appendChild(teddyImg);
  teddyImg.src = teddy.imageUrl;
  teddyImg.classList.add("teddyProductImg");

  let teddyCardBody = document.createElement("div");
  teddyCard.appendChild(teddyCardBody);
  teddyCardBody.classList.add("teddyCardBody");

  let teddyName = document.createElement("h3");
  teddyCardBody.appendChild(teddyName);
  teddyName.innerText = teddy.name;

  let teddyDescription = document.createElement("p");
  teddyCardBody.appendChild(teddyDescription);
  teddyDescription.innerText = teddy.description;

  let teddyPrice = document.createElement("p");
  teddyCardBody.appendChild(teddyPrice);
  teddyPrice.innerText = (teddy.price / 100).toFixed(2) + " €";

  let teddyQuantityLabel = document.createElement("label");
  teddyCardBody.appendChild(teddyQuantityLabel);
  teddyQuantityLabel.for = "quantity";
  teddyQuantityLabel.innerText = "Quantité";

  let teddyQuantityInput = document.createElement("input");
  teddyCardBody.appendChild(teddyQuantityInput);
  teddyQuantityInput.type = "number";
  teddyQuantityInput.id = "quantity";
};

teddyDisplay();
