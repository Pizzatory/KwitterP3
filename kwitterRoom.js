var firebaseConfig = {
  apiKey: "AIzaSyAZOC4V9xL3cQI1pcQGI6lu42Z1yheVpxw",
  authDomain: "pro-kwitter-9b912.firebaseapp.com",
  databaseURL: "https://pro-kwitter-9b912-default-rtdb.firebaseio.com",
  projectId: "pro-kwitter-9b912",
  storageBucket: "pro-kwitter-9b912.appspot.com",
  messagingSenderId: "1067447342193",
  appId: "1:1067447342193:web:e909e747d4e7099f7677d0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
     user_name=localStorage.getItem("name_of_user")
     document.getElementById("users_name").innerHTML="Welcome "+user_name+" !";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='go_to_room(this.id)'>"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();
function addroomer(){
      room_name=document.getElementById("The_id_of_input").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding a new room"
      })
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function go_to_room(name1){
      localStorage.setItem("room_name",name1)
      window.location="kwitter_page.html"
}