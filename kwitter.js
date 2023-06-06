
function addUser() {

  user_name = document.getElementById("user_name").value; //guarda o nome na variavel

  localStorage.setItem("user_name", user_name); //guarda na base de dados local
  
    window.location = "kwitter_room.html"; //abre uma nova janela/tela
}

