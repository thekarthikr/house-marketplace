
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBltdjUVEhfwe82WtQgCo2EOe_-CH2t9Qc",
  authDomain: "house-marketplace-b7d3d.firebaseapp.com",
  projectId: "house-marketplace-b7d3d",
  storageBucket: "house-marketplace-b7d3d.appspot.com",
  messagingSenderId: "221998447055",
  appId: "1:221998447055:web:8ce80590b2d2f4bc3b3aba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()