// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFZYWfdByPYe05GpaUMfd6OUeSZK1oVAk",
  authDomain: "whatsapp-2-dd851.firebaseapp.com",
  projectId: "whatsapp-2-dd851",
  storageBucket: "whatsapp-2-dd851.appspot.com",
  messagingSenderId: "10452591064",
  appId: "1:10452591064:web:7a1b1538402fa7893612ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
