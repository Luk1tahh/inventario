// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtjgW1uRETIrcDG6l4qqW76XAqVEAcPns",
  authDomain: "inventario-892bb.firebaseapp.com",
  projectId: "inventario-892bb",
  storageBucket: "inventario-892bb.firebasestorage.app",
  messagingSenderId: "294302516622",
  appId: "1:294302516622:web:f8db14f88fce8d0a4f90df",
  measurementId: "G-91NJCV9XCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);