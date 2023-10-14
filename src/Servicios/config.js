// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const Servicios = {
  apiKey: "AIzaSyAYTsfMEzQ8KvLNC-6SWS6PmQiV2CcJt_k",
  authDomain: "coder-firebase-new-4cb93.firebaseapp.com",
  projectId: "coder-firebase-new-4cb93",
  storageBucket: "coder-firebase-new-4cb93.appspot.com",
  messagingSenderId: "913824062614",
  appId: "1:913824062614:web:7fc9726bbfbf3ab4f9b6b7"
};

// Initialize Firebase
const app = initializeApp(Servicios);

export const db = getFirestore(app)