const Controlador = (function (){

    function calcularTotal(){
        let productos = Modelo.getProductos();
        let total =0;
        productos.forEach(function(e){
            total = total + e.precio * e.cantidad;
        })
        return total;
    }
    function getProductos(){
        let productos = Modelo.getProductos();
        return productos
    }
    function getClientes(){
        let productos = Modelo.getClientes();
        return productos
    }
    function guardarProducto(codigo, descripcion, cantidad, precio){
        Modelo.agregarProducto (codigo, descripcion, cantidad, precio);
    }
    function guardarCliente(nombre, telefono){
        Modelo.agregarCliente (nombre, telefono);
    }
    return {
        calcularTotal,
        guardarProducto,
        guardarCliente,
        getProductos,
        getClientes
    }
    
})();