// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPTAYcC-bamDhXWm9yOJsING4hgshPNmE",
  authDomain: "crypto-labs-4e338.firebaseapp.com",
  projectId: "crypto-labs-4e338",
  storageBucket: "crypto-labs-4e338.appspot.com",
  messagingSenderId: "1053814716048",
  appId: "1:1053814716048:web:60ebb30357a4b11d87ca15",
  measurementId: "G-RR019RZ6VR",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
