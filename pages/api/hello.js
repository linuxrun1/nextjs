// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getStorage, ref, listAll } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDzFqnR7_y9wnFnF-0eojhunWnM7KJOiLY",
  authDomain: "it-indo-project.firebaseapp.com",
  projectId: "it-indo-project",
  storageBucket: "it-indo-project.appspot.com",
  messagingSenderId: "894310294726",
  appId: "1:894310294726:web:4eded9c3a56696241063c7",
  measurementId: "G-J0CE6MG8N2"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
const listRef = ref(storage, 'files')
export default function handler(req, res) {
listAll(listRef)
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
      res.status(200).json(folderRef)
    })
    res.items.forEach((itemRef) => {
      res.status(200).json(itemRef)
    })
  }).catch((error) => {
    res.status(200).json(error)
  })
}