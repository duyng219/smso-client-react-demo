import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA4EMrfxPDYPSu1cVutqQu36YmsC1I-m9Y",
  authDomain: "sms-online-ccceb.firebaseapp.com",
  projectId: "sms-online-ccceb",
  storageBucket: "sms-online-ccceb.appspot.com",
  messagingSenderId: "605321197172",
  appId: "1:605321197172:web:9893a491aef2017de18321",
  measurementId: "G-5X0DMW7JY8"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator('http://localhost:9099')

if (window.location.hostname === 'localhost') {
  db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;