//Operador nullish coalescing 
let nombre = "Ana";
let nombreFinal = nombre ?? "Invitado";
console.log(nombreFinal);

//Se activa ?? cuando la variable es null/undefined
let edad;
let edadFinal = edad ?? 18;
console.log(edadFinal);

// Operador AND 
let numero = 0; // Va tomar el valor como falso si utilizamos AND 

let resultado = numero || 10;
console.log(resultado);

// spread operator ...
let numeros = [1,2,3];

let copia = [...numeros]

console.log(copia);

//Poder copiar arreglos sin modificar el original 
let frutas = ['manzana', 'platano'];

let nuevasFrutas = [...frutas];
nuevasFrutas.push('mango');

console.log(frutas);
console.log(nuevasFrutas); 

// Usando operador ternario ? 
const descuentO =
personas >= 5 ? 0.12 : 
personas >= 3 ? 0.07 : 
0; 
// condicion ? valor si es true : valor si es false 
// Esto es lo mismo que:

let descuento; 

if(personas >= 5){
    descuento = 0.12;
} else if (personas >= 3){
    descuento = 0.07;
}else {
    descuento = 0;
}  