import { auth, db } from './app.js';
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

auth.onAuthStateChanged(async (user) => {
  if (!user) {
    // Si no hay usuario, redirige al login
    window.location.href = 'index.html';
    return;
  }

  const docRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    document.getElementById('perfil-nombre').textContent = data.nombre;
    document.getElementById('perfil-telefono').textContent = data.telefono;
  } else {
    document.getElementById('perfil-nombre').textContent = "Usuario sin datos";
  }
});
