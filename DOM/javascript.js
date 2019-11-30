window.onload= function (){
    let botonAgregar = document.querySelector('#boton-nombre')
    let botonClear = document.getElementById('boton-borrar');
    botonClear.addEventListener('click', clear);
    let botonRojo = document.querySelector('#rojo')
    let botonAzul = document.querySelector('#azul');
    //   let botonAmarillo = document.querySelector('#amarillo');
    let botonVerde = document.querySelector('#verde');
    
    botonAgregar.addEventListener('click', agregarNombre);
    botonRojo.addEventListener('click', function() { cambiarColor('rojo')});
    botonAzul.addEventListener('click', function() { cambiarColor('azul')});
    botonVerde.addEventListener('click', function() { cambiarColor('verde')});
    // botonAmarillo.addEventListener('click', function() { cambiarColor('amarillo')});
    function clear(){
        document.querySelector('#apellido').innerText = '';
        document.querySelector('#nombre').innerText = '';
        document.querySelector('#contenedor').innerText = '';
    }
}
function cambiarColor(color)  {
    let divisor = document.querySelector('#contenedor');
    let text = document.createElement('div')
    if(color === 'rojo'){    
        divisor.style= 'background: red; ';
        text.textContent += 'ROJO '
    }else if (color === 'amarillo'){
        divisor.style= 'background: yellow; ';
        text.innerText += ' AMARILLO'
    }else if (color === 'verde'){
        divisor.style= 'background: green; ';
        text.innerText += 'VERDE'
    }else if (color === 'azul'){
        divisor.style= 'background: blue ;';
        text.innerText += ' AZUL'
    }       
    divisor.appendChild(text);
}
function agregarNumero(){
    let numero=0;
    let suma=0;
    while(!isNaN(numero)){
        numero= parseInt(prompt('ingrese un numero'));
        if (isNaN(numero)){
            return;
        }
        let elemento = document.createElement('p');
        elemento.textContent = numero;
        let contenedor = document.getElementById('contenedor');
        contenedor.appendChild(elemento);
        suma += numero;
    } 
    alert(suma);
}
function agregarNombre(){
    let name =prompt('ingrese el nombre');
    let apellido = prompt('ingrese el apellido');
    let elemName = document.getElementById('nombre');
    let elemApellido = document.getElementById('apellido');
    elemName.textContent = name;
    elemApellido.textContent = apellido;
}