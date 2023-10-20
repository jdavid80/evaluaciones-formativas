const btnValidarUsuario = document.getElementById("btnValidarUsuario");
let login = document.getElementById("login");
let password = document.getElementById("password");

btnValidarUsuario.addEventListener("click", () => {
    if ((login.value == "admin")  && (password.value == "tesis")) 
    {
        location.href = "main-page.html";
    }
    else {
        alert("Usuario y/o contraseña incorrectos. Intentelo de nuevo.");
    }
});
document.addEventListener("keyup", function(event) {
    if(event.key == 'Enter') {
        if ((login.value == "admin")  && (password.value == "tesis")) 
    {
        location.href = "main-page.html";
    }
    else {
        alert("Usuario y/o contraseña incorrectos. Intentelo de nuevo.");
    }
    }
});