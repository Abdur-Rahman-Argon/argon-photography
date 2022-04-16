// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_4C2xKTrbGaOWD61stRP_LNfKjlJ_P2E",
  authDomain: "argon-photography.firebaseapp.com",
  projectId: "argon-photography",
  storageBucket: "argon-photography.appspot.com",
  messagingSenderId: "792326544440",
  appId: "1:792326544440:web:472d4bb25f476592e95acd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
