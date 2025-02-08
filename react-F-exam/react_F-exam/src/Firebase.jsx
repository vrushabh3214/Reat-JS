// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
    apiKey: "AIzaSyBHCAtgYy9ufaD-0Us2EfOQNMHpct0FmHQ",
    authDomain: "authentication-a20dd.firebaseapp.com",
    projectId: "authentication-a20dd",
    storageBucket: "authentication-a20dd.appspot.com",
    messagingSenderId: "100557161902",
    appId: "1:100557161902:web:136f918bee8ff14f11f43f"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);   // step 1 