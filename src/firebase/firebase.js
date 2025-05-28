// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzMFNv6M2-BM_zx6-oTuKtEgjDotfZu5M",
  authDomain: "insta-clone-web-app.firebaseapp.com",
  projectId: "insta-clone-web-app",
  storageBucket: "insta-clone-web-app.firebasestorage.app",
  messagingSenderId: "639209797808",
  appId: "1:639209797808:web:b90ecd520198646bafe375",
  measurementId: "G-2QPQWGMXVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);


export { app, auth, firestore, storage };
// const analytics = getAnalytics(app);