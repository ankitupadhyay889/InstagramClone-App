// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC7YrKbUQzsFvFp8Dsn7qQaaJi35HZeUU4",
  authDomain: "instamodel-clone.firebaseapp.com",
  databaseURL: "https://instamodel-clone.firebaseio.com",
  projectId: "instamodel-clone",
  storageBucket: "instamodel-clone.appspot.com",
  messagingSenderId: "1013096024120",
  appId: "1:1013096024120:web:5485d27b3e385fcecc3ecd",
  measurementId: "G-M83C031NV7",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
