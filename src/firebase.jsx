// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBbqyilRUS2wc9HXQsAiaEeIKo4Q5w7jt8",
  authDomain: "get-feedback-781ae.firebaseapp.com",
  projectId: "get-feedback-781ae",
  storageBucket: "get-feedback-781ae.firebasestorage.app",
  messagingSenderId: "50037107467",
  appId: "1:50037107467:web:ed12d602274321ad28900e",
  measurementId: "G-CBVKJSZV5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result)
    }).catch((error ) => {
        console.log(error.code)
    })
}

