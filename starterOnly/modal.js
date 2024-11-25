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
  const firstname = document.getElementById("firstname").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const quantity = document.getElementById("quantity").value;
  const location = document.querySelector('input[name="location"]:checked');
  const checkbox1 = document.getElementById("checkbox1").checked;

  // Vérification des champs
  if (firstname.length < 2) {
    alert("Veuillez saisir un prénom valide (au moins 2 caractères).");
    return false;
  }
  if (lastname.length < 2) {
    alert("Veuillez saisir un nom valide (au moins 2 caractères).");
    return false;
  }
  if (!validateEmail(email)) {
    alert("Veuillez saisir une adresse e-mail valide.");
    return false;
  }
  if (isNaN(quantity) || quantity === "" || quantity < 0) {
    alert("Veuillez indiquer un nombre valide de tournois.");
    return false;
  }
  if (!location) {
    alert("Veuillez sélectionner un tournoi.");
    return false;
  }
  if (!checkbox1) {
    alert("Vous devez accepter les conditions d'utilisation.");
    return false;
  }

  // Si tout est valide
  return true;
}

// Fonction pour valider l'adresse e-mail
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
