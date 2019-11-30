var modelo = {
    Factura : function(){
        this.total = 0;
        this.productos = [];
        this.cliente = {
            nombre: '',
            telefono: ''
        };
    },
    
    Producto : function(codigo, descripcion, cantidad, precioUnitario){
        this.codigo = codigo
        this.descripcion = descripcion
        this.cantidad = cantidad
        this.precioUnitario = precioUnitario
        this.precioTotal = cantidad * precioUnitario
    }
}