let params = new URL(document.location).searchParams;
let id = params.get("id");
let teddy = [];
let teddyAdded;

// Récupération des données du nounours
const fetchTeddy = async () => {
  await fetch(`http://localhost:3000/api/teddies/${id}`)
    .then((res) => res.json())
    .then((data) => (teddy = data))
    .catch((error) => console.log(err));

  // console.log(teddy);
};

// Affichage du nounours - Création des champs et ajout des données
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

  let teddyCustom = document.createElement("div");
  teddyCardBody.appendChild(teddyCustom);
  teddyCustom.classList.add("teddyCustom");

  let teddyQuantityLabel = document.createElement("label");
  teddyCustom.appendChild(teddyQuantityLabel);
  teddyQuantityLabel.for = "quantity";
  teddyQuantityLabel.innerText = "Quantité :";

  let teddyQuantityInput = document.createElement("input");
  teddyQuantityLabel.appendChild(teddyQuantityInput);
  teddyQuantityInput.type = "number";
  teddyQuantityInput.id = "quantity";
  teddyQuantityInput.value = "1";
  teddyQuantityInput.min = "1";
  teddyQuantityInput.classList.add("teddyQuantityInput");

  let teddyColorLabel = document.createElement("label");
  teddyCustom.appendChild(teddyColorLabel);
  teddyColorLabel.for = "color";
  teddyColorLabel.innerText = "Choisissez la couleur : ";

  let teddyColorSelect = document.createElement("select");
  teddyColorLabel.appendChild(teddyColorSelect);
  teddyColorSelect.id = "color";

  for (let i = 0; i < teddy.colors.length; i++) {
    let teddyColorOption = document.createElement("option");
    teddyColorSelect.appendChild(teddyColorOption);
    teddyColorOption.innerText = teddy.colors[i];
  }

  let teddyEmbroideryLabel = document.createElement("label");
  teddyCustom.appendChild(teddyEmbroideryLabel);
  teddyEmbroideryLabel.for = "embroidery";
  teddyEmbroideryLabel.innerText = "Saisissez le nom à broder : ";

  let teddyEmbroideryInput = document.createElement("input");
  teddyEmbroideryLabel.appendChild(teddyEmbroideryInput);
  teddyEmbroideryInput.type = "text";
  teddyEmbroideryInput.id = "embroidery";
  teddyEmbroideryInput.placeholder = "ex.: Lucas";
  teddyEmbroideryInput.classList.add("teddyEmbroideryInput");

  let confirmBox = document.createElement("p");
  teddyCardBody.appendChild(confirmBox);
  confirmBox.innerText = "Le produit a été ajouté au panier";
  confirmBox.classList.add("confirmBox");

  let btnContainer = document.createElement("div");
  teddyCard.appendChild(btnContainer);
  btnContainer.classList.add("btnContainer");

  let btn = document.createElement("a");
  btnContainer.appendChild(btn);
  btn.href = "index.html";
  btn.innerHTML = "Revenir à la liste des produits";

  let btnCart = document.createElement("a");
  btnContainer.appendChild(btnCart);
  btnCart.innerHTML = "Ajouter au panier";
  btnCart.href = "#";

  // Lors du clic sur le bouton "Ajouter au panier", on stocke dans le localStorage (saveData)
  btnCart.addEventListener("click", (e) => {
    e.preventDefault();
    teddyAdded = {
      name: teddyName.innerText,
      price: teddy.price,
      img: teddyImg.src,
      quantity: teddyQuantityInput.value,
      _id: teddy._id,
    };
    saveData();
  });
};

teddyDisplay();

// Stockage des données dans le localStorage
const saveData = async () => {
  await teddyDisplay;

  // On récupère les données du localStorage
  let teddiesStorage = JSON.parse(localStorage.getItem("teddy"));
  // s'il y a déjà des nounours dans le localStorage
  if (teddiesStorage !== null) {
    // on vérifie si ce nounours existe déjà.   Si oui, dans les données récupérées, on supprime l'ancien et on ajoute le nouveau (push(teddyAdded)) puis on envoie au localStorage
    for (let j in teddiesStorage) {
      if (teddiesStorage[j].name == teddyAdded.name) {
        teddiesStorage.splice(j, 1);
      }
    }
    teddiesStorage.push(teddyAdded);
    localStorage.teddy = JSON.stringify(teddiesStorage);
  }
  // si le localStorage est vide
  else {
    teddiesStorage = [];
    teddiesStorage.push(teddyAdded);
    localStorage.setItem("teddy", JSON.stringify(teddiesStorage));
  }

  // Affichage du message de confirmation de l'ajout au panier
  document.querySelector(".confirmBox").animate(
    [
      //keyframes
      { opacity: "0" },
      { opacity: "1" },
      { opacity: "1" },
      { opacity: "0" },
    ],
    {
      // timing options
      duration: 5000,
    }
  );
};
