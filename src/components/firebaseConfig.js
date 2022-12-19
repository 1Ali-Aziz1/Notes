// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2LSP-qjsCfSYH3woobVZdC0SOO7LkWOw",
  authDomain: "notes-d2b77.firebaseapp.com",
  projectId: "notes-d2b77",
  storageBucket: "notes-d2b77.appspot.com",
  messagingSenderId: "458980256657",
  appId: "1:458980256657:web:9cbaeeb5396c88aa01c830",
  measurementId: "G-Z7WKTB7XMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()
// export const db = Firestore(app)
