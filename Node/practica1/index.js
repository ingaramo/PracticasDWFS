let fs = require('fs');
let chalk = require('chalk');
let buf = fs.readFileSync('./productos.json', 'utf8');
let productos = JSON.parse(buf);
productos.forEach(element => {
    let nombre = element.nombre;
    let precio = element.precio;
    let costo = element.costo;
    let porcentaje = (precio-costo) * 100 / costo;
    let toPrint = `Nombre: ${nombre} `;
    if(porcentaje < 34 ){
        console.log (toPrint + chalk.red(porcentaje + '%'));
    }
    else {
        console.log (toPrint + chalk.green(porcentaje + '%'));
    };
    element.ganancia = porcentaje;

});
fs.writeFileSync('./productos.json', JSON.stringify(productos))