import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDPXLVOd9hyc2XQHe9sAQQgSPG2UAxNGrw",
    authDomain: "bayds-todo-app.firebaseapp.com",
    databaseURL: "https://bayds-todo-app.firebaseio.com",
    storageBucket: "bayds-todo-app.appspot.com",
    messagingSenderId: "54160794707"
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

// ================================ //
// SET
// ================================ //

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Carl',
    age: 21
  }
})//.then(() => {
//   console.log('Set work!');
// }, (err) => {
//   console.log('Set failed', err);
// });

// ---- Set on specific child without wipe out the others ----
// firebaseRef.child('appName').set({
//   name: 'Todo App 2'
// });

// ================================ //
// UPDATE
// ================================ //

// ---- Multi Path Update ----
// firebaseRef.update({
//   'app/name' : 'Todo Application',
//   'user/name': 'Carl Vincent'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// });
//
// firebaseRef.child('user').update({
//   name: 'Carl Vincent'
// });


// ================================ //
// REMOVE
// ================================ //

// firebaseRef.update({ isRunning: null });
// firebaseRef.child('user/age').remove();


// ================================ //
// FETCH DATA
// ================================ //

// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('Fetch the value', snapshot.key, snapshot.val());
// });
//
// firebaseRef.child('user').update({name: 'Carl Vincent'});
// firebaseRef.child('app').update({name: 'Todo Application'});


// ================================ //
// ARRAY
// ================================ //

var todosRef = firebaseRef.child('todos');

// EVENT LISTENER
todosRef.on('child_added', (snapshot) => {
  console.log('New Todo Added', snapshot.key, snapshot.val());
});

todosRef.on('child_changed', (snapshot) => {
  console.log('Todo Change', snapshot.key, snapshot.val());
});

todosRef.on('child_removed', (snapshot) => {
  console.log('Todo Remove', snapshot.key, snapshot.val());
});

todosRef.push({
    text: 'Learn More'
});
todosRef.push({
    text: 'Earn More'
});
todosRef.push({
    text: 'Dream More'
});
