import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4lU-zQUFGOKlpq7BYgfG0AOkJc0_lFrE",
  authDomain: "dawaduniya.firebaseapp.com",
  projectId: "dawaduniya",
  storageBucket: "dawaduniya.appspot.com",
  messagingSenderId: "211381737750",
  appId: "1:211381737750:web:7c8fe22bfd979487a91837"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);