// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVZY7cmOU0eeA3_gHjOfSAsdOmfuBfSas",
  authDomain: "omarshtern.firebaseapp.com",
  projectId: "omarshtern",
  storageBucket: "omarshtern.appspot.com",
  messagingSenderId: "911499809378",
  appId: "1:911499809378:web:167a25e0cab745e0e6f73b",
  measurementId: "G-04HLWQCM27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);