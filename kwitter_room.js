
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDzvo51LqmudZ367yMdDRIyVHgcAe-oXKc",
      authDomain: "kwitter-a3ef5.firebaseapp.com",
      databaseURL: "https://kwitter-a3ef5-default-rtdb.firebaseio.com",
      projectId: "kwitter-a3ef5",
      storageBucket: "kwitter-a3ef5.appspot.com",
      messagingSenderId: "1089941113449",
      appId: "1:1089941113449:web:0a6fb44ed3c60ed41770f8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WELCOME" + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      })

 localStorage.setItem("room_name" , room_name);

 window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>"
document.getElementById("output").innerHTML += row; 
      //End code

      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}