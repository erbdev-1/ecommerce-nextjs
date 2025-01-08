// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7RHRVSikFZ9diojTrLU3YkMm3hDW8W9s",
  authDomain: "next-ecommerce-15a71.firebaseapp.com",
  projectId: "next-ecommerce-15a71",
  storageBucket: "next-ecommerce-15a71.firebasestorage.app",
  messagingSenderId: "634783167957",
  appId: "1:634783167957:web:b678b1d4c6ef5482bbb95c",
  measurementId: "G-YZKMK2PQN3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
