// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNA-48Byq0JRZ6vtViAka-U3DeuzERY5Q",
  authDomain: "ema-john-simple-1de3e.firebaseapp.com",
  projectId: "ema-john-simple-1de3e",
  storageBucket: "ema-john-simple-1de3e.appspot.com",
  messagingSenderId: "922243923645",
  appId: "1:922243923645:web:bb54408d155647edd101d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

export default auth;

