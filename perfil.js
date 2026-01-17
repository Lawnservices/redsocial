// import { auth, db } from './app.js';
// import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// auth.onAuthStateChanged(async (user) => {
//   if (!user) {
//     // Si no hay usuario, redirige al login
//     window.location.href = 'index.html';
//     return;
//   }

//   const docRef = doc(db, "users", user.uid);
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     const data = docSnap.data();
//     document.getElementById('perfil-nombre').textContent = data.nombre;
//     document.getElementById('perfil-telefono').textContent = data.telefono;
//   } else {
//     document.getElementById('perfil-nombre').textContent = "Usuario sin datos";
//   }
// });
import { auth, db } from './app.js';
import { doc, getDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Verificar usuario logueado
auth.onAuthStateChanged(async (user) => {
  if (!user) {
    // Si no hay usuario, redirige al login
    window.location.href = 'index.html';
    return;
  }

  // Mostrar datos del usuario actual
  const docRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    document.getElementById('perfil-nombre').textContent = data.nombre;
    document.getElementById('perfil-telefono').textContent = data.telefono;
  }

  // Listar otros usuarios
  const usersCol = collection(db, "users");
  const usersSnap = await getDocs(usersCol);
  const lista = document.getElementById('lista-usuarios');
  lista.innerHTML = "";

  usersSnap.forEach((docu) => {
    if(docu.id !== user.uid){ // excluir al usuario actual
      const li = document.createElement('li');
      const u = docu.data();
      li.textContent = `${u.nombre} - ${u.telefono}`;
      lista.appendChild(li);
    }
  });
});

// Cerrar sesión
document.getElementById('cerrar-sesion').addEventListener('click', () => {
  auth.signOut().then(() => {
    window.location.href = 'index.html';
  });
});
