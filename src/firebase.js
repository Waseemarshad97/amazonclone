// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAvb_MiHoWYXjXFVCXgSAj2mMqpBndH4aA",
    authDomain: "reactworkshop-dfd9c.firebaseapp.com",
    projectId: "reactworkshop-dfd9c",
    storageBucket: "reactworkshop-dfd9c.appspot.com",
    messagingSenderId: "355428448682",
    appId: "1:355428448682:web:38789553c99394b1e1d3d3",
    measurementId: "G-LXWMM3LWTQ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };