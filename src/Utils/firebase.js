// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKSKQykelrdEsFGd_apPjYGZfN_WpHH68",
  authDomain: "netflixgpt-2ba1e.firebaseapp.com",
  projectId: "netflixgpt-2ba1e",
  storageBucket: "netflixgpt-2ba1e.appspot.com",
  messagingSenderId: "287465694164",
  appId: "1:287465694164:web:5096fd5b84073c3dcb2c41",
  measurementId: "G-WT9PLK9ZXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);