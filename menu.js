const btnHome = document.getElementById('btn-home');
const btnServices = document.getElementById('btn-services');
const btnContact = document.getElementById('btn-contact');
const toggler = document.getElementById('toggler');

function uncheck () {
  toggler.checked = false;
}

btnHome.addEventListener("click", uncheck);
btnServices.addEventListener("click", uncheck);
btnContact.addEventListener("click", uncheck);