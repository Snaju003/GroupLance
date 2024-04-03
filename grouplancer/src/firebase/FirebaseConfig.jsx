// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// require('dotenv').config();
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.apiKey,
//   authDomain: process.env.authDomain,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId: process.env.appId,
//   measurementId: process.env.measurementId
// };
const firebaseConfig = {
  apiKey: "AIzaSyCsH4wizAK3MJ0yJMof6MdeH7rLnhixfXI",
  authDomain: "grouplance-60822.firebaseapp.com",
  projectId: "grouplance-60822",
  storageBucket: "grouplance-60822.appspot.com",
  messagingSenderId: "760271265495",
  appId: "1:760271265495:web:6bca18bc56b1eacfa31a92",
  measurementId: "G-7W55HSFE45"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(app);
export { fireDB }