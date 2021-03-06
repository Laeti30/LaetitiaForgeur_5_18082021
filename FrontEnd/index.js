let teddies = [];

// Récupération des produits disponibles à la vente
const fetchTeddies = async () => {
  await fetch("http://localhost:3000/api/teddies")
    .then((res) => res.json())
    .then((data) => (teddies = data))
    .catch((error) => console.log(error));

  // console.log(teddies);
};

// Affichage des produits
const teddiesDisplay = async () => {
  await fetchTeddies();

  // On parcoure le tableau et pour chaque produit du tableau, on crée des champs HTML et on y place les données
  for (teddy in teddies) {
    let teddyCard = document.createElement("div");
    document.querySelector(".products").appendChild(teddyCard);
    teddyCard.classList.add("teddyCard");

    let teddyLink = document.createElement("a");
    teddyCard.appendChild(teddyLink);
    teddyLink.href = `produit.html?id=${teddies[teddy]._id}`;

    let teddyImg = document.createElement("img");
    teddyLink.appendChild(teddyImg);
    teddyImg.src = teddies[teddy].imageUrl;
    teddyImg.classList.add("teddyCardImg");

    let teddyCardBody = document.createElement("div");
    teddyLink.appendChild(teddyCardBody);

    let teddyName = document.createElement("h3");
    teddyCardBody.appendChild(teddyName);
    teddyName.innerHTML = teddies[teddy].name;

    let teddyPrice = document.createElement("p");
    teddyCardBody.appendChild(teddyPrice);
    teddyPrice.innerHTML = (teddies[teddy].price / 100).toFixed(2) + " €";
  }
};

teddiesDisplay();
