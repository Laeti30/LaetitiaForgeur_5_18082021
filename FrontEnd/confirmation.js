// On récupère l'orderID et le montant total stockés dans le localStorage
let orderIdData = localStorage.getItem("orderID");
let totalAmount = localStorage.getItem("totalAmount");

// Création et remplissage des champs HTML de la page de confirmation
function confirmDisplay() {
  let confirmBox = document.createElement("div");
  document.querySelector("main").appendChild(confirmBox);
  confirmBox.classList.add("confirmContainer");

  let thank = document.createElement("h2");
  confirmBox.appendChild(thank);
  thank.innerHTML = "Merci pour votre commande !";
  thank.classList.add("thank");

  let orderId = document.createElement("p");
  confirmBox.appendChild(orderId);
  orderId.innerText = "Votre numéro de commande est : ";
  orderId.classList.add("confirmOrder");

  let orderIdContent = document.createElement("span");
  orderId.appendChild(orderIdContent);
  orderIdContent.innerText = orderIdData;

  let total = document.createElement("p");
  confirmBox.appendChild(total);
  total.innerText = "Le total de votre commande est de ";
  total.classList.add("confirmOrder");

  let totalContent = document.createElement("span");
  total.appendChild(totalContent);
  totalContent.innerText = totalAmount;

  // On vide le localStorage
  localStorage.clear();
}

confirmDisplay();
