var calculadora = require("./../index")


function testDivisionNumerosPositivos() {
  var entrada1 = 1;
  var entrada2 = 2;
  var resultadoEsperado = 0.5;
  var salida = calculadora.division(entrada1,entrada2);

  return salida === resultadoEsperado;
}

function testDivisionNumerosNegativos() {
  var entrada1 = -1;
  var entrada2 = -2;
  var resultadoEsperado = 0.5;
  var salida = calculadora.division(entrada1,entrada2);

  return salida === resultadoEsperado;
}

function testDivisionNumerosMixtos() {
  var entrada1 = 1;
  var entrada2 = -2;
  var resultadoEsperado = -0.5;
  var salida = calculadora.division(entrada1,entrada2);
  
  return salida === resultadoEsperado;
}

function testDivisionPorCero() {
  var entrada1 = 1;
  var entrada2 = 0;
  var resultadoEsperado = Infinity;
  var salida = calculadora.division(entrada1,entrada2);

  return salida === resultadoEsperado;
}
function testDivisionPorLetra() {
  var entrada1 = 'a';
  var entrada2 = 0;
  var salida = calculadora.division(entrada1,entrada2);

  return salida === null ;
}
function testSumatoriaNumerosPositivos() {
  var entrada = [1, 2, 3];
  var resultadoEsperado = 6;
  var salida = calculadora.sumatoria(entrada);

  return salida === resultadoEsperado;
}

function testSumatoriaNumerosNegativos() {
  var entrada = [-1, -2, -3];
  var resultadoEsperado = -6;
  var salida = calculadora.sumatoria(entrada);

  return salida === resultadoEsperado;
}

function testSumatoriaNumerosMixtos() {
  var entrada = [1, -2, 3];
  var resultadoEsperado = 2;
  var salida = calculadora.sumatoria(entrada);

  return salida === resultadoEsperado;
}

function testSumatoriaLetras() {
  var entrada = [1, -2, 'a'];
  var resultadoEsperado = -1;
  var salida = calculadora.sumatoria(entrada);

  return salida === resultadoEsperado;
}
function testPromedioNumerosPositivos() {
  var entrada = [1, 2, 3];
  var resultadoEsperado = 2;
  var salida = calculadora.promedio(entrada);

  return salida === resultadoEsperado;
}

function testPromedioNumerosNegativos() {
  var entrada = [-1, -2, -3];
  var resultadoEsperado = -2;
  var salida = calculadora.promedio(entrada);

  return salida === resultadoEsperado;
}

function testPromedioNumerosMixtos() {
  var entrada = [1, -2, 3, 6];
  var resultadoEsperado = 2;
  var salida = calculadora.promedio(entrada);

  return salida === resultadoEsperado;
}

function testPromedioLetras() {
  var entrada = [1, 2, 'a'];
  var resultadoEsperado = 1;
  var salida = calculadora.promedio(entrada);

  return salida === resultadoEsperado;
}

function run(){
  console.log ('TEST DE PROMEDIO')
  console.log(
    'testPromedioNumerosPositivos: ',
    testPromedioNumerosPositivos() ? 'OK' : 'FAILED'
  );
  console.log(
    'testPromedioNumerosNegativos: ',
    testPromedioNumerosNegativos() ? 'OK' : 'FAILED'
  );
  console.log(
    'testPromedioNumerosMixtos: ',
    testPromedioNumerosMixtos() ? 'OK' : 'FAILED'
  );
  console.log(
    'testPromedioLetras: ',
    testPromedioLetras() ? 'OK' : 'FAILED'
  );
  console.log ('TEST DE DIVISION')
  console.log(
    'testDivisionNumerosPositivos: ',
    testDivisionNumerosPositivos() ? 'OK' : 'FAILED'
  );
  console.log(
    'testDivisionNumerosNegativos: ',
    testDivisionNumerosNegativos() ? 'OK' : 'FAILED'
  );
  console.log(
    'testDivisionNumerosMixtos: ',
    testDivisionNumerosMixtos() ? 'OK' : 'FAILED'
  );
  console.log(
    'testDivisionPorCero: ',
    testDivisionPorCero() ? 'OK' : 'FAILED'
  );
  console.log(
    'testDivisionPorLetra: ',
    testDivisionPorLetra() ? 'OK' : 'FAILED'
  );
  console.log ('TEST DE SUMATORIA')
  console.log(
    'testSumatoriaNumerosPositivos: ',
    testSumatoriaNumerosPositivos() ? 'OK' : 'FAILED'
  );
  console.log(
    'testSumatoriaNumerosNegativos: ',
    testSumatoriaNumerosNegativos() ? 'OK' : 'FAILED'
  );
  console.log(
    'testSumatoriaNumerosMixtos: ',
    testSumatoriaNumerosMixtos() ? 'OK' : 'FAILED'
  );
  console.log(
    'testSumatoriaLetras: ',
    testSumatoriaLetras() ? 'OK' : 'FAILED'
  );

}

run();