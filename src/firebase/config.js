// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQIJFprUc6ran9ThTUt1VRb9hGmy-QXD4",
  authDomain: "chat-d74bb.firebaseapp.com",
  projectId: "chat-d74bb",
  storageBucket: "chat-d74bb.firebasestorage.app",
  messagingSenderId: "502260988403",
  appId: "1:502260988403:web:cc5c7cbe7ee813d1e3ba86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);

export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);