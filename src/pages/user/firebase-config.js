// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCOwc62cDmKYjOXkcAKPKTfBghni3iBWE",
  authDomain: "aw-watch.firebaseapp.com",
  projectId: "aw-watch",
  storageBucket: "aw-watch.appspot.com",
  messagingSenderId: "130876695593",
  appId: "1:130876695593:web:520c61adca175704e72838",
  measurementId: "G-1Y087C916W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);