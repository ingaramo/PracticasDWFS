var controlador = {
	modeloFactura : new modelo.Factura(),

    agregarCliente: function(nombre, telefono) {
        let cliente = this.modeloFactura.cliente;

        //validar nombre
        cliente.nombre = nombre;
        cliente.telefono = telefono;
    },

    agregarProducto: function(codigo, descripcion, cantidad, precioUnitario) {
        //validar cantidad y precioUnitario
        let producto = new modelo.Producto(codigo, descripcion, cantidad, precioUnitario);
        this.modeloFactura.productos.push(producto);
        this.calcularTotal();
    },

    calcularTotal: function() {
    	let total = 0;
        let productos = this.modeloFactura.productos;
        for (var i = 0; i < productos.length; i++) {
        	total += productos[i].precioTotal
        }
        this.modeloFactura.total = total
    },

    obtenerCliente: function() {
        return this.modeloFactura.cliente;
    },

    obtenerProductos: function() {
        return this.modeloFactura.productos;
    },

    obtenerTotal: function() {
        return this.modeloFactura.total
    }
}