let Vista = (function (){
    let botonGuardarProducto = document.getElementById('guardarProducto');
    let botonGuardarCliente = document.getElementById('guardarCliente');
    let inputNombre = document.getElementById('nombre')
    let inputTelefono = document.getElementById('telefono')
    let inputCodigo = document.getElementById('codigo')
    let inputDescripcion = document.getElementById('descripcion')
    let inputCantidad = document.getElementById('cantidad')
    let inputPrecio = document.getElementById('precio')
    let tabla = document.getElementById('tabla')
    let spanTotal = document.getElementById('total')
    let botonActualizar = document.getElementById('actualizar')

  
    botonGuardarProducto.addEventListener('click',function(){
        let codigo = inputCodigo.value;
        let descripcion = inputDescripcion.value;
        let cantidad = inputCantidad.value
        let precio = inputPrecio.value;
        
        Controlador.guardarProducto(codigo, descripcion, cantidad, precio);
        
        inputCodigo.value = 'Codigo';
        inputDescripcion.value = 'Descripcion';
        inputCantidad.value = 'Cantidad';
        inputPrecio.value = 'Precio';
    });
    botonGuardarCliente.addEventListener('click', function(){ 
        let nombre = inputNombre.value;
        let telefono = inputTelefono.value;

        Controlador.guardarCliente(nombre, telefono );

        inputNombre.value = 'Nombre';
        inputTelefono.value = 'Telefono';
        
    });

    botonActualizar.addEventListener('click', mostrar)
    function mostrar(){
        productos = Controlador.getProductos();
        let suma = Controlador.calcularTotal();
        console.log(total)
        tabla.innerHTML = ` 
        <tr>
            <th>codigo</th>
            <th>descripcion</th>
            <th>cantidad</th>
            <th>precio</th>
        </tr>`
        productos.forEach(function (e){
            let eCodigo = e.codigo;
            let eDescripcion = e.descripcion;
            let eCantidad = e.cantidad;
            let precio = e.precio;
            let fila = document.createElement('tr');
            fila.innerHTML= `
            <tr>
                <th>${eCodigo}</th>
                <th>${eDescripcion}</th>
                <th>${eCantidad}</th>
                <th>${precio}</th>
            </tr>
            `;
            tabla.append(fila);
        })
        spanTotal.innerHTML= `Total ${suma}`
    }
    return this.mostrar;
    

})();

