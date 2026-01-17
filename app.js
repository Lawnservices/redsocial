// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
// import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
// import { getStorage } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

// // 🔹 Configuración real de tu proyecto Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyBdgyKF9kdRS-CnkJadRopwu1GJup1ey2k",
//   authDomain: "likes-web-1992b.firebaseapp.com",
//   projectId: "likes-web-1992b",
//   storageBucket: "likes-web-1992b.firebasestorage.app",
//   messagingSenderId: "736088589267",
//   appId: "1:736088589267:web:8ab8d81dfb82ef0487e526"
// };

// // 🔹 Inicializar Firebase
// const app = initializeApp(firebaseConfig);

// // 🔹 Exportar servicios
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "likes-web-1992b.firebaseapp.com",
  projectId: "likes-web-1992b",
  storageBucket: "likes-web-1992b.appspot.com",
  messagingSenderId: "TU_MESSAGING_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
