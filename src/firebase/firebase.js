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
  apiKey: "AIzaSyCq8lNhDs7zp9VYMkSv5jhmHq13LvBEjzo",
  authDomain: "insta-clone-backup.firebaseapp.com",
  projectId: "insta-clone-backup",
  storageBucket: "insta-clone-backup.firebasestorage.app",
  messagingSenderId: "460418472619",
  appId: "1:460418472619:web:7ad5ef071f64d2ef6275ee",
  measurementId: "G-DRST7ED0QJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);


export { app, auth, firestore, storage };
// const analytics = getAnalytics(app);