// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4UtUP0tMNLIogidDUgvpSa-9j3uABMSE",
  authDomain: "netflixgpt-5818d.firebaseapp.com",
  projectId: "netflixgpt-5818d",
  storageBucket: "netflixgpt-5818d.appspot.com",
  messagingSenderId: "155819930815",
  appId: "1:155819930815:web:e5f0671566721037e9420a",
  measurementId: "G-N05SQTTDWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();