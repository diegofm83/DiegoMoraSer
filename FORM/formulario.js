const d = document;

const btnEnviar = d.getElementById('btn-enviar');
const usuario = d.getElementById('nombre');
const email = d.getElementById('email');
const edad = d.getElementById('edad');



function validar(e) {
  

  
  if (usuario.value === "") {
    alert("Por favor, escribe tu nombre.");
    usuario.focus();
    return false;
  }

  if (email.value === "@" || email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }
  if (edad.value === "") {
    alert("Por favor, escribe tu edad");
    edad.focus();
    return false;
  }

  if (edad.value < "18") {
    alert("Necesitamos que se contacte un adulto mayor");
    edad.focus();
    return false;
  }


}
btnSubmit = document.querySelector('[type="submit"]')
btnSubmit.addEventListener('click', validar);


