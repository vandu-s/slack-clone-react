import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7_ylRZKvJ7oRJas2a5OHEgbvH7Oc5Q-M",
    authDomain: "slack-clone-418de.firebaseapp.com",
    projectId: "slack-clone-418de",
    storageBucket: "slack-clone-418de.appspot.com",
    messagingSenderId: "980279438879",
    appId: "1:980279438879:web:84c9c0c99c5ed481796f2a",
    measurementId: "G-R2D7DSCMV7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider, firebase }
export default db;