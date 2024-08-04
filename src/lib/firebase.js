
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-2b8af.firebaseapp.com",
  projectId: "reactchat-2b8af",
  storageBucket: "reactchat-2b8af.appspot.com",
  messagingSenderId: "1009811880595",
  appId: "1:1009811880595:web:7d2db80d03b6d0c4582b66"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
