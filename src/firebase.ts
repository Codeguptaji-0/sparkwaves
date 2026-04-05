import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9FhLiroo4GpCfqR91ppKYWH0v5iN-LuE",
  authDomain: "sparkwaves-ac5ad.firebaseapp.com",
  projectId: "sparkwaves-ac5ad",
  storageBucket: "sparkwaves-ac5ad.firebasestorage.app",
  messagingSenderId: "245798280889",
  appId: "1:245798280889:web:27e88a6fac4bba1c154568",
  measurementId: "G-GL71F4FYDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export default app;
