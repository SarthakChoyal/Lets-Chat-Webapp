
var firebaseConfig = {
      apiKey: "AIzaSyACiGaajTwlMuDnTWxIsH_xpnjlIyHbSKg",
      authDomain: "doorlist2-8e3e6.firebaseapp.com",
      databaseURL: "https://doorlist2-8e3e6-default-rtdb.firebaseio.com",
      projectId: "doorlist2-8e3e6",
      storageBucket: "doorlist2-8e3e6.appspot.com",
      messagingSenderId: "156067225178",
      appId: "1:156067225178:web:c777555458155621fb8263"
    };
  
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+username;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();


function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location - "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout () {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
            window.location = "index.html";
}

