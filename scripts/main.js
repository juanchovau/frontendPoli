let usuario = document.querySelector("#usuario_login").value;
let contrasenia = document.querySelector("#contraseña_login").value;
const loginBTN = document.querySelector(".login__container--segundoDIV button")

const comprobarContraseña = () =>{
    contrasenia = document.querySelector("#contraseña_login").value;
    data.find( user => user.contrasenia === contrasenia) ? ingresar() : resetear("usario o contaseña invalido")
}
const resetear = (error) =>{
    usuario = document.querySelector("#usuario_login").value = "";
    contrasenia = document.querySelector("#contraseña_login").value = "";
    alert(error)
}

const ingresar = () =>{
    window.location.href = "/contest.html";
}

loginBTN.addEventListener("click", (event)=>{
    event.preventDefault();
    usuario = document.querySelector("#usuario_login").value
    if(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(usuario).toLowerCase())){
        data.find( user => user.user === usuario) ? comprobarContraseña() : resetear("usario o contaseña invalido")
    }; 
})
