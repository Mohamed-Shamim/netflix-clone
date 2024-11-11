// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { addDoc, collection, getFirestore, } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDdo97HX5B0QcH8V-YH0HIPVJyN9subS5I",
  authDomain: "nefli-39f1e.firebaseapp.com",
  projectId: "nefli-39f1e",
  storageBucket: "nefli-39f1e.appspot.com",
  messagingSenderId: "60406923656",
  appId: "1:60406923656:web:b313eeca1811f22ae8ba3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth(app)
const db = getFirestore(app)


const signup = async (name, email, password) => {

  try {
    const res = await createUserWithEmailAndPassword(auth, name, email, password)
    const user = res.user
    await addDoc(collection(db,"user"),{ uid: user.uid, auth, name, email, authProvider : "local" } )
  } catch (err) {
    console.log(err, "Failed to signup");
    alert(err.message);
  }

}


const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res.user, "Logged in");
  } catch (err) {
    console.log(err, "Failed to login");
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup ,logout }; // Export the functions for use in other parts of your application.
