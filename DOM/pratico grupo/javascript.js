
window.onload = function(){
    //agregamos la funcion del boton
var boton = document.getElementById("MmostrarUsuarios");
boton.addEventListener('click', visualizar);
};
//empezamos la funcion de recorrer los usuarios
function visualizar(){
    var contenidoGeneral = document.getElementById("contenido-general");
    contenidoGeneral.innerText='';
    for(var i=0; i < administrarUsuarios.listaUsuarios.length; i++){
        var indice = i;
        //creamos los parrafos
        var parrafoId = document.createElement("p");
        var parrafoNombre = document.createElement("p");
        var parrafoEmail = document.createElement("p");
        //creamos el div contenedor
        var contenedor = document.createElement("div");
        //agregamos el texto a los parrafos
        parrafoId.innerText = "Id: " + indice;
        parrafoNombre.innerText = "Nombre: " + administrarUsuarios.listaUsuarios[i].nombre;
        parrafoEmail.innerText = "Email: " + administrarUsuarios.listaUsuarios[i].email;
        //agregamos las clases
        parrafoId.className = "parrafo-id";
        parrafoNombre.className = "nombre";
        parrafoEmail.className = "email";
        contenedor.className = "contenedor";
        //agregamos los parrafos dentro del contenedor
        contenedor.appendChild(parrafoId);
        contenedor.appendChild(parrafoNombre);
        contenedor.appendChild(parrafoEmail);
        //agregamos los div al contenedor general
        contenidoGeneral.appendChild(contenedor);
    }
}