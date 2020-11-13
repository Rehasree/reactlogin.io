import firebase from 'firebase'
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAmSyZFRC-HRkhSJs0aLxPdwP9ZMZC0Ew0",
    authDomain: "admin-panel-2fd50.firebaseapp.com",
    databaseURL: "https://admin-panel-2fd50.firebaseio.com",
    projectId: "admin-panel-2fd50",
    storageBucket: "admin-panel-2fd50.appspot.com",
    messagingSenderId: "492166801179",
    appId: "1:492166801179:web:5031ab00ef4a9ee723d5be"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);

 export default fire;