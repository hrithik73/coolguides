import firebase from "firebase"
import Constants from "expo-constants"

//const firebaseConfig = {
  //apiKey: Constants.manifest.extra.apiKey,
  //authDomain: Constants.manifest.extra.authDomain,
  //projectId: Constants.manifest.extra.projectId,
  //storageBucket: Constants.manifest.extra.storageBucket,
  //messagingSenderId: Constants.manifest.extra.messagingSenderId,
  //appId: Constants.manifest.extra.appId,
  //measurementId: Constants.manifest.extra.measurementId,
//}

const firebaseConfig = {
  apiKey: "AIzaSyC6KzSb-gY4IzpvnaesiAvXT0IGZlbVwYU",
  authDomain: "coolguides-28d25.firebaseapp.com",
  projectId: "coolguides-28d25",
  storageBucket: "coolguides-28d25.appspot.com",
  messagingSenderId: "197713913538",
  appId: "1:197713913538:web:8ae3f07e45950cf56a3d5b",
  measurementId: "G-0LXSRY5CFS"
};

export const app = firebase.initializeApp(firebaseConfig)
export const auth = app.auth()
export const db = app.firestore()
