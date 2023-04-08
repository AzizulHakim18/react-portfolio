// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFcUzfqVGz7SEG8v8AiNceqbYjBGQlM9Q",
    authDomain: "azizul-hakim-rony.firebaseapp.com",
    projectId: "azizul-hakim-rony",
    storageBucket: "azizul-hakim-rony.appspot.com",
    messagingSenderId: "354868590985",
    appId: "1:354868590985:web:e2e3b4d310c703f1320958"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app