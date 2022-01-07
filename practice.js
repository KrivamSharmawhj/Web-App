
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAZaPuCEnfMbpr76ZYznOSj8J3ZQaVcdE0",
    authDomain: "kwitter1-2610e.firebaseapp.com",
    databaseURL: "https://kwitter1-2610e-default-rtdb.firebaseio.com",
    projectId: "kwitter1-2610e",
    storageBucket: "kwitter1-2610e.appspot.com",
    messagingSenderId: "56897107995",
    appId: "1:56897107995:web:90f14e84081443cc2720be",
    measurementId: "G-VF2PE935FJ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
     purpose : "adding user"   
    });
}