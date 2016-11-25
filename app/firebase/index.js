import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyDPXLVOd9hyc2XQHe9sAQQgSPG2UAxNGrw",
      authDomain: "bayds-todo-app.firebaseapp.com",
      databaseURL: "https://bayds-todo-app.firebaseio.com",
      storageBucket: "bayds-todo-app.appspot.com",
      messagingSenderId: "54160794707"
    };
  firebase.initializeApp(config);
} catch (err) {

}

export var firebaseRef = firebase.database().ref();

export default firebase;
