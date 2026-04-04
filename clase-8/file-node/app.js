// Importando el módulo fs (File System)
const { error } = require('console'); // Forma tradicional de importar modulo
const fs = require('fs');
const path = require('path'); // Importamos el módulo 'path'
/*
Opte por usar el modulo path por errores de de ruta relativa: 
    variable global __dirname, que siempre apunta a la carpeta 
    donde se encuentra el archivo que se está ejecutando.

*/

// import fs from 'fs'; 

// Verificando si un archivo existe
const filePath = './example.txt';
const filePath1 = path.join(__dirname, 'nota.txt');
console.log(`Ruta que buscamos: ${filePath1}`) // Vemos la ruta 

if (fs.existsSync(filePath1)) { // Indica que nuestra funcion es sincrona 
console.log('El archivo existe!');
} else {
console.log(`El archivo no existe : ${filePath1}`);
}

console.log('-----------------')

// Leer el contenido de un archivo 
fs.readFile(filePath1, 'utf8', (error, contenido) => {
    if(error){
        console.error('Ocurrio un error al LEER el archivo:', error);
        return; // Con return detenemos esta funcion
    }
    //Si no existio ningun error 
    console.log('---Contenido del archivo---')
    console.log(contenido);
})

