// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbRBaf-OkvjWYCiZF1sypsgDERXqasBu0",
  authDomain: "podcast-936f0.firebaseapp.com",
  projectId: "podcast-936f0",
  storageBucket: "podcast-936f0.appspot.com",
  messagingSenderId: "116747109797",
  appId: "1:116747109797:web:6e79ed608e07acc9b5144c",
  measurementId: "G-1S5MZP5FEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;