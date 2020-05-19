import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBBOK2qeZnCX5xIELTVioiEdSN50p87Z2w",
    authDomain: "todolist-584c4.firebaseapp.com",
    databaseURL: "https://todolist-584c4.firebaseio.com",
    projectId: "todolist-584c4",
    storageBucket: "todolist-584c4.appspot.com",
    messagingSenderId: "791235254923",
    appId: "1:791235254923:web:e13d8581d1edc6e328128e",
    measurementId: "G-535XPZSTX9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // create ref to database
  export const db = firebase.firestore();
