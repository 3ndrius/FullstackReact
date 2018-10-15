 import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBYj6h30bTpcMjAOQQAiHjU5RHOhm_Ag1o",
    authDomain: "redux-app-intro.firebaseapp.com",
    databaseURL: "https://redux-app-intro.firebaseio.com",
    projectId: "redux-app-intro",
    storageBucket: "redux-app-intro.appspot.com",
    messagingSenderId: "1074659621619"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;