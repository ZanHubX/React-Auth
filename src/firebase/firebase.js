// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdxhOxaLNIjl99ClszfKaPRAjuwfQQTfY",
  authDomain: "react-auth-3d11e.firebaseapp.com",
  projectId: "react-auth-3d11e",
  storageBucket: "react-auth-3d11e.appspot.com",
  messagingSenderId: "638365658837",
  appId: "1:638365658837:web:74c7ab30bbb9f6ad8f7c5c",
  measurementId: "G-2XK92ZLXN5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
