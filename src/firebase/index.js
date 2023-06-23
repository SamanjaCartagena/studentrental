// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnaZ6DSRmlZyFD1jMR4jBeXhd5qp9CPzY",
  authDomain: "studentrentals-e59a6.firebaseapp.com",
  projectId: "studentrentals-e59a6",
  storageBucket: "studentrentals-e59a6.appspot.com",
  messagingSenderId: "248557862858",
  appId: "1:248557862858:web:e046864ba8dd79e9941933",
  measurementId: "G-Q0G3XY1FQG"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app);

export {
     db,auth, app
}