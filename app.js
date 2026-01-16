import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

 const firebaseConfig = {
  apiKey: "TU_API_KEY",                       // de tu proyecto Firebase
  authDomain: "likes-web-1992b.firebaseapp.com", // tu dominio Firebase Auth
  projectId: "likes-web-1992b",               // Project ID
  storageBucket: "TU_BUCKET",                 // ej: likes-web-1992b.appspot.com
  messagingSenderId: "TU_MESSAGING_ID",       // de Firebase
  appId: "TU_APP_ID"                          // de Firebase
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
