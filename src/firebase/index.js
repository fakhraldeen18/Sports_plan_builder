import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore' 


const firebaseConfig = {
  apiKey: "AIzaSyB37NgR43dOaKWm0joh6JDn1-jr6ZJ6s20",
  authDomain: "ai-sports-15594.firebaseapp.com",
  projectId: "ai-sports-15594",
  storageBucket: "ai-sports-15594.appspot.com",
  messagingSenderId: "986672521344",
  appId: "1:986672521344:web:a3450319bb952df53f8665"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
