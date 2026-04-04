// Importando el módulo fs (File System)
const { error } = require('console'); // Forma tradicional de importar modulo
const fs = require('fs');

// import fs from 'fs'; 

// Verificando si un archivo existe
const filePath = './example.txt';
console.log(filePath) //Vemos la ruta 

if (fs.existsSync(filePath)) { // Indica que nuestra funcion es sincrona 
console.log('El archivo existe!');
} else {
console.log('El archivo no existe :(');
}

console.log('-----------------')


