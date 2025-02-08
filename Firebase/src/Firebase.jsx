import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyB0aKiBDyX3Hgx4sGvyvoMP-oaRZwXLDh8",
    authDomain: "learn-firebase-a17c0.firebaseapp.com",
    projectId: "learn-firebase-a17c0",
    storageBucket: "learn-firebase-a17c0.appspot.com",
    messagingSenderId: "788998033694",
    appId: "1:788998033694:web:01f9e6894d988ac92b390f"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);   