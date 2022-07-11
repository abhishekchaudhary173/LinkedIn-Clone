import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAzMeYL84PcDvZNwDEy-rQ-DjGbi1cbcZA",
  authDomain: "linkedin-clone-41a7d.firebaseapp.com",
  projectId: "linkedin-clone-41a7d",
  storageBucket: "linkedin-clone-41a7d.appspot.com",
  messagingSenderId: "342514464607",
  appId: "1:342514464607:web:86dbf8a2c90b1b746168ea",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
