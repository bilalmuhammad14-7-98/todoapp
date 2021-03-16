// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
    
//   };


import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBMlxbpBpPq2tNLQxdihWxvlK-WgJT4Fbs",
    authDomain: "todo-app-cp-f0b2c.firebaseapp.com",
    projectId: "todo-app-cp-f0b2c",
    storageBucket: "todo-app-cp-f0b2c.appspot.com",
    messagingSenderId: "568818457369",
    appId: "1:568818457369:web:dacbb073c65755ee8bc388",
    measurementId: "G-R0E80509LK"

});

const db = firebaseApp.firestore();

export default db;

