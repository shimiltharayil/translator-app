import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDb50w1iyDJNeVVHJhS_Qzlu3nQFLIF8ZE",
  authDomain: "translator-app-396b3.firebaseapp.com",
  projectId: "translator-app-396b3",
  storageBucket: "translator-app-396b3.appspot.com",
  messagingSenderId: "1066559292246",
  appId: "1:1066559292246:web:22a6a28ca1275deff08cf7",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export { db };
