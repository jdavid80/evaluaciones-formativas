const btnValidarUsuario = document.getElementById("btnValidarUsuario");
let login = document.getElementById("login");
let password = document.getElementById("password");
let idUsuario = document.getElementById("idUsuario");
let rolUsuario = document.getElementById("rolUsuario");

window.addEventListener("load", () => {
    login.focus();
});
btnValidarUsuario.addEventListener("click", () => {
    if ((login.value == "1076908953")  && (password.value == "1076908953")) 
    {
        location.href = "main-page-jose-dario.html";
    }
    else if ((login.value == "12265812")  && (password.value == "12265812")) 
    {
        location.href = "main-page.html";
    }
    else {
        alert("Usuario y/o contraseña incorrectos. Intentelo de nuevo.");
    }
});
document.addEventListener("keyup", function(event) {
    if(event.key == 'Enter') {
        if ((login.value == "1076908953")  && (password.value == "1076908953")) 
        {
            location.href = "main-page-jose-dario.html";
        }
        else if ((login.value == "12265812")  && (password.value == "12265812")) 
        {
            location.href = "main-page.html";
        }
        else {
            alert("Usuario y/o contraseña incorrectos. Intentelo de nuevo.");
        }
    }
});