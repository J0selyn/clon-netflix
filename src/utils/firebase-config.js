import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZB6EFdN4Q1BuN7Ekc7C8aVGdzaULKdVY",
  authDomain: "react-netflix-clone-8ff60.firebaseapp.com",
  projectId: "react-netflix-clone-8ff60",
  storageBucket: "react-netflix-clone-8ff60.appspot.com",
  messagingSenderId: "752998254837",
  appId: "1:752998254837:web:06069bda7fb94455409dbc",
  measurementId: "G-6N31MRTF4Y"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);