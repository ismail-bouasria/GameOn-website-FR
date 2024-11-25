function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeCross = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// close modal event 
closeCross.addEventListener("click",closeModal);

// Script submit

function validate() {
  let isValid = true;

  // Réinitialisation des messages d'erreur
  document.querySelectorAll('.error-message').forEach(el => el.textContent = "");

  const firstname = document.getElementById("firstname").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const birthdate = document.getElementById("birthdate").value;
  const quantity = document.getElementById("quantity").value;
  const location = document.querySelector('input[name="location"]:checked');
  const checkbox1 = document.getElementById("checkbox1").checked;

  // Validation prénom
  if (firstname.length < 2) {
    document.getElementById("error-firstname").textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    isValid = false;
  }

  // Validation nom
  if (lastname.length < 2) {
    document.getElementById("error-lastname").textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    isValid = false;
  }

  // Validation e-mail
  if (!validateEmail(email)) {
    document.getElementById("error-email").textContent = "Veuillez entrer une adresse e-mail valide.";
    isValid = false;
  }

  // Validation date de naissance
  if (!birthdate) {
    document.getElementById("error-birthdate").textContent = "Vous devez entrer votre date de naissance.";
    isValid = false;
  }

  // Validation quantité
  if (isNaN(quantity) || quantity === "" || quantity < 0) {
    document.getElementById("error-quantity").textContent = "Veuillez indiquer un nombre valide de tournois.";
    isValid = false;
  }

  // Validation location
  if (!location) {
    document.getElementById("error-location").textContent = "Vous devez choisir une option.";
    isValid = false;
  }

  // Validation case à cocher
  if (!checkbox1) {
    document.getElementById("error-checkbox1").textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
    isValid = false;
  }

  return isValid;
}

// Fonction pour valider l'adresse e-mail
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

