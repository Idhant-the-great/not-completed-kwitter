const firebaseConfig = {
      apiKey: "AIzaSyAIoZULYi4-TJLJHEd1L5HlyxKT02G86L0",
      authDomain: "my-kwitter-app-ee09d.firebaseapp.com",
      databaseURL: "https://my-kwitter-app-ee09d-default-rtdb.firebaseio.com",
      projectId: "my-kwitter-app-ee09d",
      storageBucket: "my-kwitter-app-ee09d.appspot.com",
      messagingSenderId: "397436839738",
      appId: "1:397436839738:web:9f3e890d2b3720d8869203",
      measurementId: "G-7J5KJ1SYYK"
    };
    firebase.initializeApp(firebaseConfig);

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - "+Room_names);
      row="<div id="+Room_names+" class='room_name' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
});});}
getData();

function addRoom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
