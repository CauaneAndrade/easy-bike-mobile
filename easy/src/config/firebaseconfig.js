// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVAU2zjlb7fQj5Zc8YrOSn2yAa4K8pa_0",
  authDomain: "easy-bike-79402.firebaseapp.com",
  projectId: "easy-bike-79402",
  storageBucket: "easy-bike-79402.appspot.com",
  messagingSenderId: "425383900503",
  appId: "1:425383900503:web:d4f14d0336050ccb51ba12",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database;
