let teddies = [];

const fetchTeddies = async () => {
  await fetch("http://localhost:3000/api/teddies")
    .then((res) => res.json())
    .then((data) => (teddies = data));

  console.log(teddies);
};

const teddiesDisplay = async () => {
  await fetchTeddies();

  for (teddy in teddies) {
    let teddyCard = document.createElement("div");
    document.querySelector(".products").appendChild(teddyCard);
    // teddyCard.classList.add("card");
    teddyCard.classList.add("teddyCard");

    let teddyLink = document.createElement("a");
    teddyCard.appendChild(teddyLink);
    teddyLink.classList.add("stretched-link");

    let teddyImg = document.createElement("img");
    teddyLink.appendChild(teddyImg);
    teddyImg.src = teddies[teddy].imageUrl;
    teddyImg.classList.add("teddyCardImg");

    let teddyCardBody = document.createElement("div");
    teddyLink.appendChild(teddyCardBody);
    // teddyCardBody.classList.add("card-body");

    let teddyName = document.createElement("h3");
    teddyCardBody.appendChild(teddyName);
    // teddyName.classList.add("card-title");
    teddyName.innerHTML = teddies[teddy].name;

    let teddyPrice = document.createElement("p");
    teddyCardBody.appendChild(teddyPrice);
    // teddyPrice.classList.add("card-text");
    teddyPrice.innerHTML = teddies[teddy].price / 100 + " €";
  }

  //   document.body.innerHTML = teddies.map(
  //     (teddy) =>
  //       `
  //       <h3>${teddy.name}</h3>
  //       `
  //   );
};

teddiesDisplay();
