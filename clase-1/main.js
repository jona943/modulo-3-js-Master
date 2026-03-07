var obsoleto = "Aunque var no está obsoleto, es una mala práctica.";
let variable = "El uso de let y const son los sustitutos directos de var.";
const constante = "Con let y const no se puede redeclarar una variable en el mismo nivel de bloque.";

console.log(obsoleto);
console.log(variable);
console.log(constante);

console.log("-------------------");

let frutaFav = "Manzana";
let actNewFrut = frutaFav ?? "Cereza"; 
// El operador ?? solo se activa si la variable inicial es null o undefined.
console.log(actNewFrut); 

// Spread en strings crea un array de letras.
let caracteres = [...actNewFrut]; 
console.log(caracteres); 

let num = 0;
let respuesta = num || 8; // El 0 es un valor "falsy", por eso devuelve 8.
console.log(respuesta);

// Copiar arreglos para mantener la inmutabilidad (no modificar el original).
let frutas = ['manzana', 'platano'];
let nuevasFrutas = [...frutas];
nuevasFrutas.push('mango');

console.log("Original:", frutas);
console.log("Copia modificada:", nuevasFrutas);
