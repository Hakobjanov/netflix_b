import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//here we need to seed our database

//we also need config form firebase
const config = {
  apiKey: "AIzaSyBeLxGv5SJ5QnP9891YhcniJ65pHcoaBlQ",
  authDomain: "netflix-clone-82741.firebaseapp.com",
  databaseURL: "https://netflix-clone-82741.firebaseio.com",
  projectId: "netflix-clone-82741",
  storageBucket: "netflix-clone-82741.appspot.com",
  messagingSenderId: "719772479208",
  appId: "1:719772479208:web:abc8db1af17a00e700635d",
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
