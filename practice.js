
var firebaseConfig = {
    apiKey: "AIzaSyDFGN-9d6VEL39dnw3wuLMjoBB2Jx7hN-o",
    authDomain: "kwitter-app-25833.firebaseapp.com",
    databaseURL: "https://kwitter-app-25833-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-25833",
    storageBucket: "kwitter-app-25833.appspot.com",
    messagingSenderId: "1021232113706",
    appId: "1:1021232113706:web:b7e2d1c455b9e43078bb53"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}