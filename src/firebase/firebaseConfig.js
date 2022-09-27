// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOnbXN0U2Un2AuhIRg5Zjg8y0pFFJxhCQ",
  authDomain: "tienda-padel-70677.firebaseapp.com",
  projectId: "tienda-padel-70677",
  storageBucket: "tienda-padel-70677.appspot.com",
  messagingSenderId: "1057436706703",
  appId: "1:1057436706703:web:1b086e5d68475bdc184dfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);