import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

// const config = {
//   apiKey: "AIzaSyBJtmH_n-w79Yrwfcpqv2kw8q7aMQEkP6Y",
//   authDomain: "ingravida-db.firebaseapp.com",
//   projectId: "ingravida-db",
//   storageBucket: "ingravida-db.appspot.com",
//   messagingSenderId: "61952346797",
//   appId: "1:61952346797:web:c459f95c87fcda04029424",
//   measurementId: "G-LRDXMXM20S"
// }

//Ingravida 2 DB

const config = {
  apiKey: "AIzaSyADL0fr6rDDdXEb6o7rrAQPEq7nkViYWVY",
  authDomain: "ingravida2-db.firebaseapp.com",
  projectId: "ingravida2-db",
  storageBucket: "ingravida2-db.appspot.com",
  messagingSenderId: "293135340465",
  appId: "1:293135340465:web:7e1dfab6be6b386efea390",
  measurementId: "G-1JDESD8YXC"
}


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  //Check if there is any data in that place
  if (!snapShot.exists) {

    const { displayName, email } = userAuth;
    const createdAt = new Date();

    //if there isn´t create a new user with the data from de object
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user", error.message)
    }
  }

  return userRef;
  // console.log(snapShot)
  //console.log(firestore.doc("users/1234234"))
}



firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;