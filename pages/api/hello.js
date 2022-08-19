// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDzFqnR7_y9wnFnF-0eojhunWnM7KJOiLY",
  authDomain: "it-indo-project.firebaseapp.com",
  projectId: "it-indo-project",
  storageBucket: "it-indo-project.appspot.com",
  messagingSenderId: "894310294726",
  appId: "1:894310294726:web:4eded9c3a56696241063c7",
  measurementId: "G-J0CE6MG8N2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function handler(req, res) {
  res.status(200).json(app)
}
