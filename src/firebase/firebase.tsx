import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq4PIad7si_bLX1WnDhK34GcwM3v3DRKo",
  authDomain: "projectx-eee35.firebaseapp.com",
  databaseURL: "https://projectx-eee35.firebaseio.com",
  projectId: "projectx-eee35",
  storageBucket: "projectx-eee35.appspot.com",
  messagingSenderId: "296040292997",
  appId: "1:296040292997:web:024384914efe7325de7fec",
  measurementId: "G-WJTKY076K3"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// const customEmailAndPassword = new firebase.auth();
var db = firebase.firestore();
export const auth = firebase.auth();
export const myStorage = firebase.storage()
export { db, firebase, googleAuthProvider, database as default };
