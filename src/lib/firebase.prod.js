import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//here we need to seed our database

//we also need config
const config = {};

const firebase = Firebase.initializeApp(config);

export { firebase };
