// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR0pDOsuwvlyCZYHBLfK5k2HrqJDwpqyw",
  authDomain: "becipe-client-auth.firebaseapp.com",
  projectId: "becipe-client-auth",
  storageBucket: "becipe-client-auth.appspot.com",
  messagingSenderId: "61700208741",
  appId: "1:61700208741:web:ad4c15d9cdd4f82cafee8c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);