// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_UIezp1wqzGF3Cnmr2QYoGfpiBOa-d1o",
  authDomain: "admin-dashboard-3f791.firebaseapp.com",
  projectId: "admin-dashboard-3f791",
  storageBucket: "admin-dashboard-3f791.appspot.com",
  messagingSenderId: "515495991626",
  appId: "1:515495991626:web:0fc68712a3ea1fbf86c9b3",
  measurementId: "G-JJWMCTNSBJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
