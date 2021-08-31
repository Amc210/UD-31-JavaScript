var valores = [true, 5, false, "hola", "adios", 2];

//Encontrar el String mayor
var max = 0;
var maxString;

valores.forEach( function( val ) {
  if( ( typeof( val ) == 'string' ) && ( val.length > max ) ) {
    max = val.length;
    maxString = val;
  }
} );

console.log( maxString );

// Combinar valores booleanos
var valor1 = valores[0];
var valor2 = valores[2];

// Obtener un resultado TRUE
var resultado = valor1 || valor2;
console.log(resultado);

// Obtener un resultado FALSE
resultado = valor1 && valor2;
console.log(resultado);

// Operaciones
var num1 = valores[1];
var num2 = valores[5];

var suma = num1 + num2;
console.log(suma);

var resta = num1 - num2;
console.log(resta);

var multiplicacion = num1 * num2;
console.log(multiplicacion);

var division = num1 / num2;
console.log(division);

var modulo = num1 % num2;
console.log(modulo);
