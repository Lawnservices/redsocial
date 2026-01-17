import { auth, db } from './app.js';
import { RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// 1️⃣ Configurar reCAPTCHA correctamente
window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha', {
  size: 'invisible'
});

// 2️⃣ Capturar botones
const enviarBtn = document.getElementById('enviar');
const verificarBtn = document.getElementById('verificar');

enviarBtn.addEventListener('click', () => {
  const telefono = document.getElementById('telefono').value.trim();
  const nombre = document.getElementById('nombre').value.trim();

  if (!telefono || !nombre) {
    alert("Debes ingresar nombre y teléfono");
    return;
  }

  const appVerifier = window.recaptchaVerifier;

  signInWithPhoneNumber(auth, telefono, appVerifier)
    .then(confirmationResult => {
      window.confirmationResult = confirmationResult;
      window.userNombre = nombre;
      alert("Código enviado! Usa 123456 si es número de prueba.");
    })
    .catch(error => {
      console.error(error);
      alert("Error al enviar código. Revisa el formato del teléfono.");
    });
});

verificarBtn.addEventListener('click', () => {
  const code = document.getElementById('codigo').value.trim();

  if (!window.confirmationResult) {
    alert("Primero debes enviar el código.");
    return;
  }

  window.confirmationResult.confirm(code)
    .then(async (result) => {
      const user = result.user;

      await setDoc(doc(db, 'users', user.uid), {
        nombre: window.userNombre || "Sin nombre",
        telefono: user.phoneNumber
      });

      alert("Usuario autenticado y guardado en Firestore!");
      window.location.href = 'perfil.html';
    })
    .catch(error => {
      console.error(error);
      alert("Código incorrecto");
    });
});
