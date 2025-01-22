// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByuCutjSgxS74wqFL-nhTk8Z8iZ8Bm3cU",
  authDomain: "pre-dragon-project.firebaseapp.com",
  projectId: "pre-dragon-project",
  storageBucket: "pre-dragon-project.firebasestorage.app",
  messagingSenderId: "183466353861",
  appId: "1:183466353861:web:656fe15f25a597a83c7cac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;