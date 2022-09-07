import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

//Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBxCeLDtuGggz8DCDxXKXMQ6Pm1e0NYEk",
    authDomain: "golf-statistics-538c0.firebaseapp.com",
    projectId: "golf-statistics-538c0",
    storageBucket: "golf-statistics-538c0.appspot.com",
    messagingSenderId: "551731884702",
    appId: "1:551731884702:web:3a9e3caa13a7f56dd4818f"
  };
  
  // Initialize Firebase and Get Database
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

export { app, db } ;