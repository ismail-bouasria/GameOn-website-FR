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

// Sélect elements
const modalForm = document.getElementById("modal-form");
 const submitButton = document.querySelector(".btn-submit");
const modalConfirmation = document.getElementById("modal-confirmation");
const closeModalForm = document.getElementById("close-modal-form");
const closeModalConfirmation = document.getElementById("close-modal-confirmation");

// Fonction for validate form
function validate() {
  let isValid = true;
  

  // init error message
  document.querySelectorAll('.error-message').forEach(el => el.textContent = "");

  const firstname = document.getElementById("firstname").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const birthdate = document.getElementById("birthdate").value;
  const quantity = document.getElementById("quantity").value;
  const location = document.querySelector('input[name="location"]:checked');
  const checkbox1 = document.getElementById("checkbox1").checked;

  // Validation firstname
  if (firstname.length < 2) {
    document.getElementById("error-firstname").textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    isValid = false;
  }

  // Validation lastname
  if (lastname.length < 2) {
    document.getElementById("error-lastname").textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    isValid = false;
  }

  // Validation e-mail
  if (!validateEmail(email)) {
    document.getElementById("error-email").textContent = "Veuillez entrer une adresse e-mail valide.";
    isValid = false;
  }

  // Validation birth date
  if (!birthdate) {
    document.getElementById("error-birthdate").textContent = "Vous devez entrer votre date de naissance.";
    isValid = false;
  } else {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // Vérifier si l'âge est inférieur à 16 ans
    if (age < 16 || (age === 16 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))) {
      document.getElementById("error-birthdate").textContent = "Vous devez avoir au moins 16 ans.";
      isValid = false;
    }

    // Vérifier si la date est dans le futur
    if (birthDate > today) {
      document.getElementById("error-birthdate").textContent = "La date de naissance ne peut pas être dans le futur.";
      isValid = false;
    }
  }

  // Validation quantity
  if (isNaN(quantity) || quantity === "" || quantity < 0) {
    document.getElementById("error-quantity").textContent = "Veuillez indiquer un nombre valide de tournois.";
    isValid = false;
  }

  // Validation location
  if (!location) {
    document.getElementById("error-location").textContent = "Vous devez choisir une option.";
    isValid = false;
  }

  // Validation checkbox
  if (!checkbox1) {
    document.getElementById("error-checkbox1").textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
    isValid = false;
  }

  // if form is valid
  if (isValid) {
    e.preventDefault

    modalForm.style.display = "none"; // Fermer la première modal
  
    
    modalConfirmation.style.display = ""; // Ouvrir la deuxième modal
  }

  return false; // Empêche le rechargement de la page
}

// Validation of the e-mail
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

 // Gestion de la soumission du formulaire
 form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validate()) {
    // Fermer la modal de formulaire
    modalForm.style.display = "none";

    // Ouvrir la modal de confirmation
    modalConfirmation.style.display = "flex";
  }
});

// close modal
closeModalForm.addEventListener("click", () => {
  modalForm.style.display = "none";
});

closeModalConfirmation.addEventListener("click", () => {
  modalConfirmation.style.display = "none";
});
