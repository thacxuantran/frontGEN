import firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
    // Project Settings => Add Firebase to your web app
    apiKey: "AIzaSyC1ox43dCJDY0ZejY4ObZZb9U8_ROrazL0",
    authDomain: "natural-engine-311516.firebaseapp.com",
    projectId: "natural-engine-311516",
    storageBucket: "natural-engine-311516.appspot.com",
    messagingSenderId: "805761381257",
    appId: "1:805761381257:web:b9d495b91f7e0c05016758",
    measurementId: "G-F5MCE20TCW"
});
const messaging = initializedFirebaseApp.messaging();

export { messaging };