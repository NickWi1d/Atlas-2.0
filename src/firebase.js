import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCW3OriEr2uJPQuTJhwMxcvWlFLHnaTTQk",
    authDomain: "atlas-7dd34.firebaseapp.com",
    projectId: "atlas-7dd34",
    storageBucket: "atlas-7dd34.appspot.com",
    messagingSenderId: "336018364512",
    appId: "1:336018364512:web:9f13c58e33dfbd89ae4b05"  
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp);

export const createUser = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

export const logInUser = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}
export const SignOut = async () => {
    return signOut(auth);
}

export { auth, db }