// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCtW332YJF-IMlqqqT9ut8EWUl2h4aTW3c",
  authDomain: "ico-dexo-d3c6e.firebaseapp.com",
  projectId: "ico-dexo-d3c6e",
  storageBucket: "ico-dexo-d3c6e.appspot.com",
  messagingSenderId: "735829606943",
  appId: "1:735829606943:web:f4c3a2caccdc6add320b2a",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const msg = getMessaging(app);
