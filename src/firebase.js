import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBHLoVuhA5AcI8uosghGf6aG-S9xl0A-fE",
  authDomain: "newipproj.firebaseapp.com",
  projectId: "newipproj",
  storageBucket: "newipproj.appspot.com",
  messagingSenderId: "613965274184",
  appId: "1:613965274184:web:bae2253333c11b1960cc7d"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };