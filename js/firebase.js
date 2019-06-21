var app_fireBase = {};
(function(){
      // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA7n6ggMdrjGsFw5_X38ziJgQPt-82wR5o",
    authDomain: "middlemandb.firebaseapp.com",
    databaseURL: "https://middlemandb.firebaseio.com",
    projectId: "middlemandb",
    storageBucket: "middlemandb.appspot.com",
    messagingSenderId: "905625825412"
  };
  firebase.initializeApp(config);

  app_fireBase = firebase;
})