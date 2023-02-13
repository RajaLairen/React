import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxvy3ym402gbYNPKqIFzq3KaeZaKAmMUU",
  authDomain: "e-keithel-d3751.firebaseapp.com",
  projectId: "e-keithel-d3751",
  storageBucket: "e-keithel-d3751.appspot.com",
  messagingSenderId: "609693494367",
  appId: "1:609693494367:web:030dc75ebb2b097f34bfea",
  measurementId: "G-WNK1LLCQH1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
