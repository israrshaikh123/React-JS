import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";  // ✅ add karo

const firebaseConfig = {
  apiKey: "AIzaSyAe9s46ndq5Qb02UlMSNE1kW82dUPcmpXo",
  authDomain: "document-manager-2204.firebaseapp.com",
  databaseURL: "https://document-manager-2204-default-rtdb.firebaseio.com",
  projectId: "document-manager-2204",
  storageBucket: "document-manager-2204.firebasestorage.app",
  messagingSenderId: "898612693759",
  appId: "1:898612693759:web:193a1b25b866d5c1315aca"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);  // ✅ add karo