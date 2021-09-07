
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCjBnDyHVhXDM5mjj_mLK5jzEcI1RmYvkc",
  authDomain: "lite-share.firebaseapp.com",
  projectId: "lite-share",
  storageBucket: "lite-share.appspot.com",
  messagingSenderId: "233498128577",
  appId: "1:233498128577:web:71542bc99b27cc1d45e440",
  measurementId: "G-7QJJXEJZJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);