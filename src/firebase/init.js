// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvEW0vLSsZci4y-ZGZbiqG133NXLP8SoU",
  authDomain: "int305fb004-app.firebaseapp.com",
  projectId: "int305fb004-app",
  storageBucket: "int305fb004-app.appspot.com",
  messagingSenderId: "535643364215",
  appId: "1:535643364215:web:9f59908c5b86d7214bdf72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db