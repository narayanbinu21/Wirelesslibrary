import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDhKX9A2CRVCySewsebdk4HmfAvHjoIYHA",
    authDomain: "wily-app-a836f.firebaseapp.com",
    projectId: "wily-app-a836f",
    storageBucket: "wily-app-a836f.appspot.com",
    messagingSenderId: "1071457489087",
    appId: "1:1071457489087:web:1c3d3bd33dbdb704b6f60a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();




