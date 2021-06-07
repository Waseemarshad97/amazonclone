// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
import data from "./firebase.config.json"
const firebaseConfig = data;

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(firebaseApp);
const auth = firebase.auth(firebaseApp);
const storage = firebase.storage(firebaseApp);
export { db, auth, storage };