// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnCYbbYUgPZaRojwY96KYCzkcpxblxlGI",
    authDomain: "burn-and-cook.firebaseapp.com",
    projectId: "burn-and-cook",
    storageBucket: "burn-and-cook.appspot.com",
    messagingSenderId: "509646739328",
    appId: "1:509646739328:web:07cda261eab829076a5365"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;