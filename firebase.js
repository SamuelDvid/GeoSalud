// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9jnT6Yrz_9t4ODYREEB7N3dIK-YsOn6o",
  authDomain: "prueba-f7a8f.firebaseapp.com",
  projectId: "prueba-f7a8f",
  storageBucket: "prueba-f7a8f.firebasestorage.app",
  messagingSenderId: "432561130224",
  appId: "1:432561130224:web:abdc0acdfaa586b1241035",
  measurementId: "G-M8VKD7B27V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const doc = getFirestore(app);

