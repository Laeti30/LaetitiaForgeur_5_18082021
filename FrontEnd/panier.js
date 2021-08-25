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
  }
}

// -------------------  Affichage si le panier est vide -------------------- //
function emptyCart() {
  let emptyCart = document.createElement("h2");
  document.querySelector("main").appendChild(emptyCart);
  emptyCart.innerHTML = `Votre panier est vide.`;
}

// ------------------- Création du tableau de produits -------------------- //
function tableCreate() {
  let table = document.createElement("table");
  document.querySelector("main").appendChild(table);
  table.classList.add("table");
  table.classList.add("tableCart");
  table.classList.add("table-bordered");

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
    teddyDeleteImg.classList.add("fas");
    teddyDeleteImg.classList.add("fa-trash-alt");
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
let firstName = document.createElement("div");
formRow1.appendChild(firstName);
firstName.classList.add("col");
firstName.classList.add("formCol");
let firstNameLabel = document.createElement("label");
firstName.appendChild(firstNameLabel);
firstNameLabel.for = "firstName";
firstNameLabel.innerText = "Prénom";
let firstNameInput = document.createElement("input");
firstName.appendChild(firstNameInput);
firstNameInput.id = "firstName";
firstNameInput.type = "text";
firstNameInput.classList.add("form-control");
firstNameInput.required = true;
let lastName = document.createElement("div");
formRow1.appendChild(lastName);
lastName.classList.add("col");
lastName.classList.add("formCol");
let lastNameLabel = document.createElement("label");
lastName.appendChild(lastNameLabel);
lastNameLabel.for = "lastName";
lastNameLabel.innerText = "Nom de famille";
let lastNameInput = document.createElement("input");
lastName.appendChild(lastNameInput);
lastNameInput.id = "lastName";
lastNameInput.type = "text";
lastNameInput.classList.add("form-control");
lastNameInput.required = true;

// 2eme ligne du formulaire - Adresse
let formRow2 = document.createElement("div");
form.appendChild(formRow2);
formRow2.classList.add("row");
let address = document.createElement("div");
formRow2.appendChild(address);
address.classList.add("col");
address.classList.add("formCol");
let addressLabel = document.createElement("label");
address.appendChild(addressLabel);
addressLabel.for = "address";
addressLabel.innerText = "Adresse";
let addressInput = document.createElement("input");
address.appendChild(addressInput);
addressInput.id = "address";
addressInput.type = "text";
addressInput.placeholder = "Merci de saisir le numéro et la rue";
addressInput.classList.add("form-control");
addressInput.required = true;

// 3eme ligne du formulaire - Code postal & ville
let formRow3 = document.createElement("div");
form.appendChild(formRow3);
formRow3.classList.add("row");
let postalCode = document.createElement("div");
formRow3.appendChild(postalCode);
postalCode.classList.add("col");
postalCode.classList.add("formCol");
let postalCodeLabel = document.createElement("label");
postalCode.appendChild(postalCodeLabel);
postalCodeLabel.for = "postalCode";
postalCodeLabel.innerText = "Code postal";
let postalCodeInput = document.createElement("input");
postalCode.appendChild(postalCodeInput);
postalCodeInput.id = "postalCode";
postalCodeInput.type = "number";
postalCodeInput.required = true;
postalCodeInput.classList.add("form-control");
let city = document.createElement("div");
formRow3.appendChild(city);
city.classList.add("col");
city.classList.add("formCol");
let cityLabel = document.createElement("label");
city.appendChild(cityLabel);
cityLabel.for = "city";
cityLabel.innerText = "Ville";
let cityInput = document.createElement("input");
city.appendChild(cityInput);
cityInput.id = "city";
cityInput.type = "text";
cityInput.required = true;
cityInput.classList.add("form-control");

// 4eme ligne du formulaire - Numéro de téléphone & email
let formRow4 = document.createElement("div");
form.appendChild(formRow4);
formRow4.classList.add("row");
let phoneNumber = document.createElement("div");
formRow4.appendChild(phoneNumber);
phoneNumber.classList.add("col");
phoneNumber.classList.add("formCol");
let phoneNumberLabel = document.createElement("label");
phoneNumber.appendChild(phoneNumberLabel);
phoneNumberLabel.for = "phoneNumber";
phoneNumberLabel.innerText = "Numéro de téléphone";
let phoneNumberInput = document.createElement("input");
phoneNumber.appendChild(phoneNumberInput);
phoneNumberInput.id = "phoneNumber";
phoneNumberInput.type = "tel";
phoneNumberInput.placeholder = "0678546235";
phoneNumberInput.min = "10";
phoneNumberInput.required = true;
phoneNumberInput.classList.add("form-control");
let email = document.createElement("div");
formRow4.appendChild(email);
email.classList.add("col");
email.classList.add("formCol");
let emailLabel = document.createElement("label");
email.appendChild(emailLabel);
emailLabel.for = "email";
emailLabel.innerText = "Email";
let emailInput = document.createElement("input");
email.appendChild(emailInput);
emailInput.id = "email";
emailInput.type = "email";
emailInput.required = true;
emailInput.placeholder = "exemple@exemple.fr";
emailInput.classList.add("form-control");

// 5eme ligne du formulaire - Bouton Submit
let formRow5 = document.createElement("div");
form.appendChild(formRow5);
formRow5.classList.add("row");
let submitButton = document.createElement("button");
formRow5.appendChild(submitButton);
submitButton.type = "submit";
submitButton.value = "Submit";
submitButton.innerText = "Valider la commande";
submitButton.classList.add("btn");
submitButton.classList.add("btn-lg");
submitButton.classList.add("submitButton");
