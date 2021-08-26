let orderIdData = localStorage.getItem("orderID");
let totalAmount = localStorage.getItem("totalAmount");
let contactData = JSON.parse(localStorage.getItem("contact"));

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

  let deliveryData = document.createElement("div");
  confirmBox.appendChild(deliveryData);
  deliveryData.classList.add("deliveryData");

  let deliveryTitle = document.createElement("h3");
  deliveryData.appendChild(deliveryTitle);
  deliveryTitle.innerText = "La commande sera livrée à l'adresse suivante :";

  let deliveryName = document.createElement("p");
  deliveryData.appendChild(deliveryName);
  deliveryName.innerText = contactData.lastName + " " + contactData.firstName;

  let deliveryAddress = document.createElement("p");
  deliveryData.appendChild(deliveryAddress);
  deliveryAddress.innerText = contactData.address;

  let deliveryCity = document.createElement("p");
  deliveryData.appendChild(deliveryCity);
  deliveryCity.innerText = contactData.city;

  // On vide le localStorage
  localStorage.clear();
}

confirmDisplay();
