import { auth, db } from './app.js';
import { RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// 1️⃣ Configurar reCAPTCHA
window.recaptchaVerifier = new RecaptchaVerifier('recaptcha', {
  'size': 'invisible'
}, auth);

// 2️⃣ Capturar botones y campos
const enviarBtn = document.getElementById('enviar');
const verificarBtn = document.getElementById('verificar');

enviarBtn.addEventListener('click', () => {
  const telefono = document.getElementById('telefono').value;
  const nombre = document.getElementById('nombre').value;

  const appVerifier = window.recaptchaVerifier;

  signInWithPhoneNumber(auth, telefono, appVerifier)
    .then(confirmationResult => {
      window.confirmationResult = confirmationResult;
      alert("Código enviado! Usa 123456 si es número de prueba.");
      window.userNombre = nombre; // guardamos para usar luego
    })
    .catch(error => {
      console.error(error);
      alert("Error al enviar código");
    });
});

verificarBtn.addEventListener('click', () => {
  const code = document.getElementById('codigo').value;
  window.confirmationResult.confirm(code)
    .then(async (result) => {
      const user = result.user;

      // Guardar usuario en Firestore
      await setDoc(doc(db, 'users', user.uid), {
        nombre: window.userNombre,
        telefono: user.phoneNumber
      });

      alert("Usuario autenticado y guardado en Firestore!");
    })
    .catch(error => {
      console.error(error);
      alert("Código incorrecto");
    });
});
