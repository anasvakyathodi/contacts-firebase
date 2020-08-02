import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA5t5au_2a44s8vqLZ70unM5NJOTQRKog4",
  authDomain: "learning-app-ce74f.firebaseapp.com",
  databaseURL: "https://learning-app-ce74f.firebaseio.com",
  projectId: "learning-app-ce74f",
  storageBucket: "learning-app-ce74f.appspot.com",
  messagingSenderId: "309501596531",
  appId: "1:309501596531:web:14e75ca5364a992d6feb06",
  measurementId: "G-MDDF4MJ8WC",
};
// Initialize Firebase
var fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();
