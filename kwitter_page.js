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
   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout () {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
            window.location = "index.html";
}

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
      console.log("Your Message was Sent!")
}
