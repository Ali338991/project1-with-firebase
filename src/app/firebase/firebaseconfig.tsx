// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCIj2nA4FBwSIznIJNKKwYubsOzTdc4y3A",
  authDomain: "fir-project-1-2944d.firebaseapp.com",
  projectId: "fir-project-1-2944d",
  storageBucket: "fir-project-1-2944d.appspot.com",
  messagingSenderId: "904576448411",
  appId: "1:904576448411:web:7b9a559481cd0fdffa533e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app);
export default app;