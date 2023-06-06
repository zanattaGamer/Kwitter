//aula 96
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

  
	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
  }

//aula 97
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);//mostra no console
	       console.log(message_data);//mosttra no console
	       name = message_data['name'];//guarda o nome
	       message = message_data['message'];//guarda a mensagem
         like = message_data['like'];//guarda o link
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";//guarda o nome como tag e a imagem do verificado
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";//guarda a mensagem como tag
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(message_id)'>";//guarda o like como tag 
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";//guarda o desenho do like

        row = name_with_tag + message_with_tag +like_button + span_with_tag;// junta todas as tags feitas       
        document.getElementById("output").innerHTML += row;//mostra na tela
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(room_name).child(message_id).update({
		like : updated_likes  
	 });

}


