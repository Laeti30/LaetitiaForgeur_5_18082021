let params = new URL(document.location).searchParams;
let id = params.get("id");
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
  teddyQuantityInput.value = 1;
  teddyQuantityInput.min = 1;
  teddyQuantityInput.classList.add("teddyQuantityInput");

  let teddyColorLabel = document.createElement("label");
  teddyCustom.appendChild(teddyColorLabel);
  teddyColorLabel.for = "color";
  teddyColorLabel.innerText = "Choisissez la couleur : ";

  let teddyColorList = document.createElement("select");
  teddyColorLabel.appendChild(teddyColorList);
  teddyColorList.id = "color";

  let teddyColorOption1 = document.createElement("option");
  teddyColorList.appendChild(teddyColorOption1);
  // teddyColorOption1.value = "value1";
  teddyColorOption1.innerText = teddy.colors[0];
  let teddyColorOption2 = document.createElement("option");
  teddyColorList.appendChild(teddyColorOption2);
  //  teddyColorOption2.value = "beige";
  teddyColorOption2.innerText = teddy.colors[1];
  let teddyColorOption3 = document.createElement("option");
  teddyColorList.appendChild(teddyColorOption3);
  // teddyColorOption3.value = "marron";
  teddyColorOption3.innerText = teddy.colors[2];
  let teddyColorOption4 = document.createElement("option");
  teddyColorList.appendChild(teddyColorOption4);
  //teddyColorOption4.value = "noir";
  teddyColorOption4.innerText = teddy.colors[4];

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

  //--------------Local Storage -----------------//

  btnCart.addEventListener("click", () => {
    let teddyAdded = {
      name: teddyName.innerText,
      price: teddyPrice.innerText,
      img: teddyImg.src,
      id: teddy._id,
    };

    let teddiesStorage = JSON.parse(localStorage.getItem("teddy"));
    // s'il y a déjà des nounours dans le localStorage
    if (teddiesStorage == !null) {
      teddiesStorage.push(teddyAdded);
      localStorage.setItem("teddy", JSON.stringify(teddiesStorage));
      console.log("Pas vide");
    }
    // si le localStorage est vide
    else {
      teddiesStorage = [];
      teddiesStorage.push(teddyAdded);
      localStorage.setItem("teddy", JSON.stringify(teddiesStorage));
      console.log("vide");
    }
  });
};

teddyDisplay();
