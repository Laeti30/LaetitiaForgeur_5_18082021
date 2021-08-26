// Récupération des données dans le LocalStorage
let teddiesCart = JSON.parse(localStorage.getItem("teddy"));

getLS();

// --------------- Vérification si panier vide ou non ------------------- //
function getLS() {
  // si le localStorage est vide
  if (teddiesCart == null || teddiesCart == 0) {
    emptyCart();
  }
  // s'il y a des produits dans le localStorage
  else {
    tableCreate();
    removeItem();
    removeItems();
    formCreation();
  }
}

// -------------------  Affichage si le panier est vide -------------------- //
function emptyCart() {
  let emptyCart = document.createElement("h2");
  document.querySelector("main").appendChild(emptyCart);
  emptyCart.innerHTML = `Votre panier est vide.`;

  let motivationText = document.createElement("p");
  document.querySelector("main").appendChild(motivationText);
  motivationText.classList.add("motivation");
  motivationText.innerText =
    "N'hésitez pas à vous rendre sur notre page d'accueil afin de le remplir !";
}

// ------------------- Création du tableau de produits -------------------- //
function tableCreate() {
  let table = document.createElement("table");
  document.querySelector("main").appendChild(table);
  table.classList.add("table", "tableCart", "table-bordered");

  let header = document.createElement("thead");
  table.appendChild(header);

  let trHead = document.createElement("tr");
  header.appendChild(trHead);

  let arrayTitle = ["Nom", " ", "Prix unitaire", "Quantité", "Prix total", " "];
  for (let i = 0; i < arrayTitle.length; i++) {
    let colTitle = document.createElement("th");
    trHead.appendChild(colTitle);
    colTitle.scope = "col";
    colTitle.innerText = arrayTitle[i];
  }

  let tbody = document.createElement("tbody");
  table.appendChild(tbody);
  // Créer une ligne par produit
  for (let i = 0; i < teddiesCart.length; i++) {
    let teddyRow = document.createElement("tr");
    tbody.appendChild(teddyRow);

    // Remplir chaque ligne avec les données du nounours
    let teddyName = document.createElement("td");
    teddyRow.appendChild(teddyName);
    teddyName.scope = "row";
    teddyName.innerText = teddiesCart[i].name;

    let teddyImgCell = document.createElement("td");
    teddyRow.appendChild(teddyImgCell);
    let teddyImg = document.createElement("img");
    teddyImgCell.appendChild(teddyImg);
    teddyImg.src = teddiesCart[i].img;

    let teddyPrice = document.createElement("td");
    teddyRow.appendChild(teddyPrice);
    teddyPrice.innerHTML = (teddiesCart[i].price / 100).toFixed(2) + " €";

    let teddyQuantity = document.createElement("td");
    teddyRow.appendChild(teddyQuantity);
    teddyQuantity.innerHTML = teddiesCart[i].quantity;

    let teddyTotalPrice = document.createElement("td");
    teddyRow.appendChild(teddyTotalPrice);
    let teddyQuantityNumber = parseInt(teddiesCart[i].quantity);
    teddyTotalPrice.innerHTML =
      ((teddiesCart[i].price * teddyQuantityNumber) / 100).toFixed(2) + " €";

    let teddyDelete = document.createElement("td");
    teddyRow.appendChild(teddyDelete);
    let teddyDeleteImg = document.createElement("i");
    teddyDelete.appendChild(teddyDeleteImg);
    teddyDeleteImg.classList.add("fas", "fa-trash-alt");
  }

  // Calcul du montant total
  let totalAmountText = document.createElement("p");
  document.querySelector("main").appendChild(totalAmountText);
  totalAmountText.classList.add("totalAmount");

  // Création du bouton reset
  let resetButton = document.createElement("span");
  document.querySelector("main").appendChild(resetButton);
  resetButton.classList.add("reset");
  resetButton.innerHTML = "Vider le panier";
}

// ------------------- Supprimer un produit -------------------- //
function removeItem() {
  // Récupération de tous les îcones de suppression créées
  let btnDelete = document.querySelectorAll(".fa-trash-alt");
  for (let j = 0; j < btnDelete.length; j++) {
    btnDelete[j].addEventListener("click", (e) => {
      e.preventDefault();
      if ((teddiesCart[j] = btnDelete[j])) {
        teddiesCart.splice(j, 1);
      }
      localStorage.teddy = JSON.stringify(teddiesCart);
      // Rechargement de la page
      window.location.href = "panier.html";
    });
  }
}

// ---------------------- Vider le panier ------------------------- //
function removeItems() {
  document.querySelector(".reset").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "panier.html";
  });
}

//----------------- Calculer le montant total ----------------- //

const totalAmountCount = async () => {
  await tableCreate;
  // Récupération de tous les montants dans un tableau
  let arrayAmount = [];
  for (k = 0; k < teddiesCart.length; k++) {
    let amountByQuantity = teddiesCart[k].price * teddiesCart[k].quantity;
    arrayAmount.push(amountByQuantity);
  }
  // Addition de tous les montants du tableau
  const reducer = (a, b) => a + b;
  let totalAmount = (arrayAmount.reduce(reducer) / 100).toFixed(2);

  document.querySelector(
    ".totalAmount"
  ).innerHTML = `Montant total : ${totalAmount} €`;
};

totalAmountCount();

//----------------- Création du formulaire ----------------- //
function formCreation() {
  let formTitle = document.createElement("h2");
  document.querySelector("main").appendChild(formTitle);
  formTitle.innerText = "Vos coordonnées";
  formTitle.classList.add("formTitle");

  let form = document.createElement("form");
  document.querySelector("main").appendChild(form);

  // 1er ligne du formulaire - Nom & prénom
  let formRow1 = document.createElement("div");
  form.appendChild(formRow1);
  formRow1.classList.add("row");
  // Prénom
  let firstNameBox = document.createElement("div");
  formRow1.appendChild(firstNameBox);
  firstNameBox.classList.add("col", "formCol");
  let firstNameLabel = document.createElement("label");
  firstNameBox.appendChild(firstNameLabel);
  firstNameLabel.for = "firstName";
  firstNameLabel.innerText = "Prénom";
  let firstNameInput = document.createElement("input");
  firstNameBox.appendChild(firstNameInput);
  firstNameInput.id = "firstName";
  firstNameInput.type = "text";
  firstNameInput.classList.add("form-control");
  firstNameInput.required = true;
  // Nom de famille
  let lastNameBox = document.createElement("div");
  formRow1.appendChild(lastNameBox);
  lastNameBox.classList.add("col", "formCol");
  let lastNameLabel = document.createElement("label");
  lastNameBox.appendChild(lastNameLabel);
  lastNameLabel.for = "lastName";
  lastNameLabel.innerText = "Nom de famille";
  let lastNameInput = document.createElement("input");
  lastNameBox.appendChild(lastNameInput);
  lastNameInput.id = "lastName";
  lastNameInput.type = "text";
  lastNameInput.classList.add("form-control");
  lastNameInput.required = true;

  // 2eme ligne du formulaire - Adresse
  let formRow2 = document.createElement("div");
  form.appendChild(formRow2);
  formRow2.classList.add("row");
  // Adresse
  let addressBox = document.createElement("div");
  formRow2.appendChild(addressBox);
  addressBox.classList.add("col", "formCol");
  let addressLabel = document.createElement("label");
  addressBox.appendChild(addressLabel);
  addressLabel.for = "address";
  addressLabel.innerText = "Adresse";
  let addressInput = document.createElement("input");
  addressBox.appendChild(addressInput);
  addressInput.id = "address";
  addressInput.type = "text";
  addressInput.placeholder = "Merci de saisir le numéro et la rue";
  addressInput.classList.add("form-control");
  addressInput.required = true;

  // 3eme ligne du formulaire - Code postal & ville
  let formRow3 = document.createElement("div");
  form.appendChild(formRow3);
  formRow3.classList.add("row");
  // Code postal
  let postalCodeBox = document.createElement("div");
  formRow3.appendChild(postalCodeBox);
  postalCodeBox.classList.add("col", "formCol");
  let postalCodeLabel = document.createElement("label");
  postalCodeBox.appendChild(postalCodeLabel);
  postalCodeLabel.for = "postalCode";
  postalCodeLabel.innerText = "Code postal";
  let postalCodeInput = document.createElement("input");
  postalCodeBox.appendChild(postalCodeInput);
  postalCodeInput.id = "postalCode";
  postalCodeInput.type = "text";
  postalCodeInput.required = true;
  postalCodeInput.classList.add("form-control");
  let postalCodeWarning = document.createElement("span");
  postalCodeBox.appendChild(postalCodeWarning);
  postalCodeWarning.id = "postalCodeWarning";
  postalCodeWarning.classList.add("form-text");
  // Ville
  let cityBox = document.createElement("div");
  formRow3.appendChild(cityBox);
  cityBox.classList.add("col", "formCol");
  let cityLabel = document.createElement("label");
  cityBox.appendChild(cityLabel);
  cityLabel.for = "city";
  cityLabel.innerText = "Ville";
  let cityInput = document.createElement("input");
  cityBox.appendChild(cityInput);
  cityInput.id = "city";
  cityInput.type = "text";
  cityInput.required = true;
  cityInput.classList.add("form-control");
  let cityWarning = document.createElement("span");
  cityBox.appendChild(cityWarning);
  cityWarning.id = "cityWarning";
  cityWarning.classList.add("form-text");

  // 4eme ligne du formulaire - Numéro de téléphone & email
  let formRow4 = document.createElement("div");
  form.appendChild(formRow4);
  formRow4.classList.add("row");
  // Numéro de téléphone
  let phoneNumberBox = document.createElement("div");
  formRow4.appendChild(phoneNumberBox);
  phoneNumberBox.classList.add("col", "formCol");
  let phoneNumberLabel = document.createElement("label");
  phoneNumberBox.appendChild(phoneNumberLabel);
  phoneNumberLabel.for = "phoneNumber";
  phoneNumberLabel.innerText = "Numéro de téléphone";
  let phoneNumberInput = document.createElement("input");
  phoneNumberBox.appendChild(phoneNumberInput);
  phoneNumberInput.id = "phoneNumber";
  phoneNumberInput.type = "tel";
  phoneNumberInput.placeholder = "0678546235";
  phoneNumberInput.required = true;
  phoneNumberInput.classList.add("form-control");
  let phoneNumberWarning = document.createElement("span");
  phoneNumberBox.appendChild(phoneNumberWarning);
  phoneNumberWarning.id = "phoneNumberWarning";
  phoneNumberWarning.classList.add("form-text");
  // Email
  let emailBox = document.createElement("div");
  formRow4.appendChild(emailBox);
  emailBox.classList.add("col", "formCol");
  let emailLabel = document.createElement("label");
  emailBox.appendChild(emailLabel);
  emailLabel.for = "email";
  emailLabel.innerText = "Email";
  let emailInput = document.createElement("input");
  emailBox.appendChild(emailInput);
  emailInput.id = "email";
  emailInput.type = "email";
  emailInput.required = true;
  emailInput.placeholder = "exemple@exemple.fr";
  emailInput.classList.add("form-control");
  let emailWarning = document.createElement("span");
  emailBox.appendChild(emailWarning);
  emailWarning.id = "emailWarning";
  emailWarning.classList.add("form-text");

  // 5eme ligne du formulaire - Bouton Submit
  let formRow5 = document.createElement("div");
  form.appendChild(formRow5);
  formRow5.classList.add("row");
  // Bouton de confirmation de commande
  let submitButton = document.createElement("input");
  formRow5.appendChild(submitButton);
  submitButton.type = "Submit";
  submitButton.value = "Valider la commande";
  submitButton.classList.add("submitButton");
}

//----------------- Vérification des données du formulaire et stockage des données ----------------- //
let email, phone, postCode, city;
// Création d'une fonction pour l'affichage des erreurs
const errorDisplay = (tag, message, valid) => {
  const span = document.getElementById(tag + "Warning");
  if (!valid) {
    span.classList.add("warning");
    span.textContent = message;
  } else {
    span.classList.remove("warning");
    span.textContent = message;
  }
};

// Vérification et stockage de l'email
function emailChecker() {
  document.getElementById("email").addEventListener("input", (e) => {
    if (!e.target.value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
      errorDisplay("email", "L'email n'est pas valide");
      email = null;
    } else {
      errorDisplay("email", "", true);
      email = e.target.value;
    }
  });
}

// Vérification et stockage du numéro de téléphone
function phoneChecker() {
  document.getElementById("phoneNumber").addEventListener("input", (e) => {
    if (!e.target.value.match(/^0[1-8][0-9]{8}$/)) {
      errorDisplay("phoneNumber", "Le numéro n'est pas valide");
      phone = null;
    } else {
      errorDisplay("phoneNumber", "", true);
      phone = e.target.value;
    }
  });
}

// Vérification et stockage du code postal
function postalCodeChecker() {
  document.getElementById("postalCode").addEventListener("input", (e) => {
    if (
      !e.target.value.match(
        /^((0[1-9])|([1-8][0-9])|(9[0-8])|(2A)|(2B))[0-9]{3}$/
      )
    ) {
      errorDisplay("postalCode", "Le code postal n'est pas valide");
      postCode = null;
    } else {
      errorDisplay("postalCode", "", true);
      postCode = e.target.value;
    }
  });
}

// Vérification et stockage de la ville
function cityChecker() {
  document.getElementById("city").addEventListener("input", (e) => {
    if (!e.target.value.match(/^[a-z- ]+$/i)) {
      errorDisplay("city", "La ville n'est pas valide");
      city = null;
    } else {
      errorDisplay("city", "", true);
      city = e.target.value;
    }
  });
}

// Lancement de fonctions de vérification
const formChecker = async () => {
  await formCreation;
  emailChecker();
  phoneChecker();
  postalCodeChecker();
  cityChecker();
};

formChecker();

// ---------------- Envoi de la commande -------------------- //

const cartConfirmation = async () => {
  await formChecker;
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    // Récupération du prix total
    let totalPrice = document.querySelector(".totalAmount").innerText;
    totalPrice = totalPrice.split(": ");

    // Création des constantes pour envoi au backend
    let totalCart = [];
    for (m = 0; m < teddiesCart.length; m++) {
      totalCart.push(teddiesCart[m]._id);
    }

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let address = document.getElementById("address").value;

    // Création de l'objet pour envoi au backend
    const order = {
      contact: {
        firstName: firstName,
        lastName: lastName,
        address: address,
        city: city,
        email: email,
      },
      products: totalCart,
    };

    // Remise à zéro des valeurs des inputs
    document
      .querySelectorAll(
        'input[type="text"], input[type="tel"], input[type="email"]'
      )
      .forEach((input) => (input.value = ""));

    // Création des options de la requête fetch
    const init = {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Envoi des données au backend
    fetch("http://localhost:3000/api/teddies/order", init)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // On supprime le panier du localStorage
        localStorage.clear();
        // On ajoute l'orderId au localStorage
        localStorage.setItem("orderID", data.orderId);
        // On ajoute les données de contact dans le localStorage
        localStorage.setItem("contact", JSON.stringify(data.contact));
        // On ajoute le montant total dans le localSotrage
        localStorage.setItem("totalAmount", totalPrice[1]);
        // Redirection vers la page de confirmation
        document.location.href = "confirmation.html";
      })
      .catch((error) => console.log(error));
  });
};

cartConfirmation();
