let Modelo =(function() {
    const Cliente = function (nombre, telefono){
        this.nombre = nombre;
        this.telefono = telefono;

    };
    const Producto = function(codigo, descripcion, cantidad, precio){
        this.codigo=codigo,
        this.descripcion=descripcion,
        this.cantidad=cantidad,
        this.precio=precio
    };

    let clientes= [];
    let productos= [];

    function agregarProducto(codigo, descripcion, cantidad, precio){
        const producto = new Producto (codigo, descripcion, cantidad, precio);
         productos.push(producto);
    }

    function agregarCliente(nombre, telefono){
        const cliente = new Cliente(nombre, telefono);
        clientes.push(cliente);
    }
    function getClientes(){
        return clientes
    }
    function getProductos(){
        return productos
    }
    return {
        getProductos,
        getClientes,
        agregarCliente,
        agregarProducto
    }
})();
