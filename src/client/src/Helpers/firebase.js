/* eslint-disable import/no-anonymous-default-export */
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB8eUKe7sCBZKJ2KXnYYHh5SnDopDVavb8",
  authDomain: "justpublished-37ad8.firebaseapp.com",
  projectId: "justpublished-37ad8",
  storageBucket: "justpublished-37ad8.appspot.com",
  messagingSenderId: "681738226523",
  appId: "1:681738226523:web:6655d9c4e003c8a026287e",
  measurementId: "G-W8X81C8W7G",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const googleSignIn = () => {
  return signInWithPopup(auth, provider);
};

export { createUser, signIn, googleSignIn };
