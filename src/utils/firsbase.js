// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDavQZeWXqH8mibPcqrGSLxkKY9a7sSpwg",
  authDomain: "netflixgpt-bb63e.firebaseapp.com",
  projectId: "netflixgpt-bb63e",
  storageBucket: "netflixgpt-bb63e.appspot.com",
  messagingSenderId: "113219200897",
  appId: "1:113219200897:web:41aa501d25b907ab8dea80",
  measurementId: "G-QFVR2978J8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()