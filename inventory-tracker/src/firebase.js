import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCUrsUkwW-1yJNRY5uGbznP37rHw7mC8fQ",
  authDomain: "inventory-system-a3ad8.firebaseapp.com",
  databaseURL: "https://inventory-system-a3ad8-default-rtdb.firebaseio.com/",
  projectId: "inventory-system-a3ad8",
  storageBucket: "inventory-system-a3ad8.firebasestorage.app",
  messagingSenderId: "601336193789",
  appId: "1:601336193789:web:fb49592d11d275d6001494",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

