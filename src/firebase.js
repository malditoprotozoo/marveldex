import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCbeDGIW0tQ_45a2GZn2ATZW_H-RdFlm6Q",
    authDomain: "marveldex-16a2e.firebaseapp.com",
    databaseURL: "https://marveldex-16a2e.firebaseio.com",
    projectId: "marveldex-16a2e",
    storageBucket: "marveldex-16a2e.appspot.com",
    messagingSenderId: "882044736303"
  };
  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const googleAuth = new firebase.auth.GoogleAuthProvider();

  export {
      firebase,
      firebaseDB,
      googleAuth
  }