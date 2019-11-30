let carrito = (function(){
    
    let listaProductos = [];
    
    function validarProducto(nombre, total){
        if(nombre === '' || isNaN(total) || nombre === null || total < 0 || total === 0){
            return false
        }
        return true
    };

    function ingresarProducto(nombre, total){
        if (validarProducto(nombre, total) && existeProducto(nombre)){
            listaProductos.push({'nombre': nombre, 'total': total});
            return console.log('producto ingresado')
        }
        return console.log('producto NOOOOOOOO ')

    };


    function obtener(){
        return {'listaDeProductos': listaProductos, 'total': calcularTotal()}
    };

    function calcularTotal(){
        let total = 0;
        listaProductos.forEach(function(e){
            total = total + e.total
        });
        return total
    };

    function existeProducto(nombre){
        let arrayNombres = listaProductos.map(function (e){ return e.nombre});
        let index = arrayNombres.indexOf(nombre);
        if(index != -1){
            return false
        }
        return true
    };

    function vaciarCarrito(){
        this.listaProductos = [];
    };

    return {
        ingresarProducto: ingresarProducto,
        obtener: obtener,
        existeProducto: existeProducto,
        vaciarCarrito: vaciarCarrito
    }
})();