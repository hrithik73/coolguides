import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyC6KzSb-gY4IzpvnaesiAvXT0IGZlbVwYU",
  authDomain: "coolguides-28d25.firebaseapp.com",
  projectId: "coolguides-28d25",
  storageBucket: "coolguides-28d25.appspot.com",
  messagingSenderId: "197713913538",
  appId: "1:197713913538:web:8ae3f07e45950cf56a3d5b",
  measurementId: "G-0LXSRY5CFS",
}

export const app = firebase.initializeApp(firebaseConfig)
export const auth = app.auth()
export const db = app.firestore()
