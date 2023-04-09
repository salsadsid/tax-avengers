// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSFFywRVNwlWIbKOrdxo5zZ8H-CYHlPxY",
  authDomain: "tax-avengers.firebaseapp.com",
  projectId: "tax-avengers",
  storageBucket: "tax-avengers.appspot.com",
  messagingSenderId: "641932960168",
  appId: "1:641932960168:web:49e4d4897d8973d97dfd9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
