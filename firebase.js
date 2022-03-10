import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAAkQeMcmeKrlYWwC5zuElroL8Uezq380",
  authDomain: "amzn-777.firebaseapp.com",
  projectId: "amzn-777",
  storageBucket: "amzn-777.appspot.com",
  messagingSenderId: "514580732212",
  appId: "1:514580732212:web:f51cf97da49501dbdd2d61",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
