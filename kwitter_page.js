var firebaseConfig = {
    apiKey: "AIzaSyDRmA1uRMZzCyFytDdu1_WEgaEildghBPY",
    authDomain: "kwitter-thingy-3064f.firebaseapp.com",
    databaseURL: "https://kwitter-thingy-3064f-default-rtdb.firebaseio.com",
    projectId: "kwitter-thingy-3064f",
    storageBucket: "kwitter-thingy-3064f.appspot.com",
    messagingSenderId: "392885266693",
    appId: "1:392885266693:web:07355166fcd965fcafaf6c"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
          } });  }); }

getData();
function Click_the_logout_to_logout(){
    localStorage.removeItem("name_of_user");
    localStorage.removeItem("room_name");
    window.location="kwitterRoom.html";
}
username=localStorage.getItem("name_of_user");
    nameroom=localStorage.getItem("room_name");
function supersend(){
    msg=document.getElementById("super_even_better_id_of_input").value;
    firebase.database().ref(nameroom).push({
        name:username,
        message:msg,
        like:0
  });
  document.getElementById("super_even_better_id_of_input").value="";
}