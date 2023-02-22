
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBy3VEZEcAaTJLcM8bTPrdcWKRmzhjyNRg",
      authDomain: "letschatapp-55d95.firebaseapp.com",
      projectId: "letschatapp-55d95",
      storageBucket: "letschatapp-55d95.appspot.com",
      messagingSenderId: "620814035370",
      appId: "1:620814035370:web:175c7d67f2af47de7663d3"
    };
    
   
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("Room Name - " + Room_names);
      row = "<div class='room_name id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"></div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();



function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_room.html";
}


function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_room.html"
}




