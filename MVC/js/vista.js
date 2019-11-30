var vista = {
    init: function() {

        var botonCliente = document.getElementById('agregarCliente');
        botonCliente.addEventListener('click', function() {

            var nombre = document.getElementById('nombre').value;

            var telefono = document.getElementById('telefono').value;

            controlador.agregarCliente(nombre, telefono);

            vista.mostrarCliente();
            document.getElementById('nombre').value = '';
            document.getElementById('telefono').value = '';
        });

        var botonProducto = document.getElementById('agregarProducto');
        botonProducto.addEventListener('click', function() {

            var codigo = document.getElementById('codigo').value;
            var descripcion = document.getElementById('descripcion').value;
            var cantidad = document.getElementById('cantidad').value;
            var precioUnitario = document.getElementById('precio').value;

            controlador.agregarProducto(codigo, descripcion, cantidad, precioUnitario);
            vista.mostrarTabla();

            document.getElementById('codigo').value = '';
            document.getElementById('descripcion').value = '';
            document.getElementById('cantidad').value = '';
            document.getElementById('precio').value = '';
        });
    },

    mostrarCliente: function() {

        var listado = document.getElementById('datosCliente');
        listado.innerHTML = "";
        var cliente = controlador.obtenerCliente();

        let li1 = document.createElement('li');
        li1.textContent = cliente.nombre;
        listado.appendChild(li1);
        let li2 = document.createElement('li');
        li2.textContent = cliente.telefono;
        listado.appendChild(li2);

    },

    mostrarTabla: function() {
        let tabla = document.getElementById('contenidoTabla');
        tabla.innerHTML = '';

        var listaProductos = controlador.obtenerProductos();
        for (let i = 0; i < listaProductos.length; i++) {
            const producto = listaProductos[i];

            const columCodigo = document.createElement('td');
            columCodigo.textContent = producto.codigo;

            const columDescripcion = document.createElement('td');
            columDescripcion.textContent = producto.descripcion;

            const columCantidad = document.createElement('td');
            columCantidad.textContent = producto.cantidad;

            const columPrecioUnitario = document.createElement('td');
            columPrecioUnitario.textContent = producto.precioUnitario;

            const columPrecioTotal = document.createElement('td');
            columPrecioTotal.textContent = producto.precioTotal;
            

            let fila = document.createElement('tr');
            fila.setAttribute('id', i);

            fila.appendChild(columCodigo);
            fila.appendChild(columDescripcion);
            fila.appendChild(columCantidad);
            fila.appendChild(columPrecioUnitario);
            fila.appendChild(columPrecioTotal);

            tabla.appendChild(fila)
        }
        this.mostrarTotal();
    },

    mostrarTotal: function() {
        var itemTotal = document.getElementById('total');
        itemTotal.textContent = controlador.obtenerTotal();
    },

};

vista.init();