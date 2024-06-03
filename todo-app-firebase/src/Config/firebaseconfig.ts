// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsPrJkIv2GmUd_MqL3dNIG0ppYwAGiqVY",
  authDomain: "todo-app-53bf1.firebaseapp.com",
  projectId: "todo-app-53bf1",
  storageBucket: "todo-app-53bf1.appspot.com",
  messagingSenderId: "590400748971",
  appId: "1:590400748971:web:f7363d4459150c827f26ee",
  measurementId: "G-9ED6XXM2C3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;