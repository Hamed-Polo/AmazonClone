import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCX8zajXx5wz7BcKYZNO9RjUQb1FUTQMPY",
    authDomain: "clone-dc2df.firebaseapp.com",
    projectId: "clone-dc2df",
    storageBucket: "clone-dc2df.appspot.com",
    messagingSenderId: "899110103505",
    appId: "1:899110103505:web:7999c14003de6d5682d8f0",
    measurementId: "G-7TPRK43RBN"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }