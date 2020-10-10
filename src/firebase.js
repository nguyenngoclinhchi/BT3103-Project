import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqkB6WzWe7P2A8IH5Wv0M3lVIhVLmvCAE",
    authDomain: "bt3103-geomapstringency.firebaseapp.com",
    databaseURL: "https://bt3103-geomapstringency.firebaseio.com",
    projectId: "bt3103-geomapstringency",
    storageBucket: "bt3103-geomapstringency.appspot.com",
    messagingSenderId: "471463740362",
    appId: "1:471463740362:web:1b46daa05a94122487c533",
    measurementId: "G-YVY2NVB4NY"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;
