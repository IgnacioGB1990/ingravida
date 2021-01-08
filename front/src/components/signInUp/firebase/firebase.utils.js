import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyBJtmH_n-w79Yrwfcpqv2kw8q7aMQEkP6Y",
  authDomain: "ingravida-db.firebaseapp.com",
  projectId: "ingravida-db",
  storageBucket: "ingravida-db.appspot.com",
  messagingSenderId: "61952346797",
  appId: "1:61952346797:web:c459f95c87fcda04029424",
  measurementId: "G-LRDXMXM20S"

}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;