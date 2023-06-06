//cole o link do fire base aqui
const firebaseConfig = {
  apiKey: "AIzaSyDhg1GzEjpnWDAQbfxeLKfF0bzHBCOtarE",
  authDomain: "novo-kwitter.firebaseapp.com",
  databaseURL: "https://novo-kwitter-default-rtdb.firebaseio.com",
  projectId: "novo-kwitter",
  storageBucket: "novo-kwitter.appspot.com",
  messagingSenderId: "358964179158",
  appId: "1:358964179158:web:a5b6b56136413bb4939977"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//aula 95

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  window.location = "kwitter_page.html";

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionar sala"
  });

    localStorage.setItem("room_name", room_name);

}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
