// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvNnmJXZAh5WoDDwuLXqrH8ZquVMYMhM4",
  authDomain: "notification-app-6f320.firebaseapp.com",
  projectId: "notification-app-6f320",
  storageBucket: "notification-app-6f320.appspot.com",
  messagingSenderId: "714447760429",
  appId: "1:714447760429:web:1048b0a218f04a3c0fdca4",
  measurementId: "G-0VLMPP0F81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);