const fs = require('fs');
const path = require('path')

// Ruta del archivo de notas
const filePath = path.join(__dirname, 'notas.json');

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */

// Impresion de ruta
console.log('----------- Ruta -----------');
console.log(filePath);
console.log('-----------');

function agregarNota(titulo, contenido) {
    let notas = []; // 1. Creas un array vacío
    if (fs.existsSync(filePath)) {
        // PISTA: Aquí debes leer las notas existentes antes de agregar la nueva.
        // COMPLETAR: Usa fs.readFileSync para leer el archivo.
        const contenido = fs.readFileSync(filePath, 'utf8')
        notas = JSON.parse(contenido); // 2. Guardas lo que lees en una variable
    }
    const nuevaNota = { titulo, contenido };
    notas.push(nuevaNota);
    fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
    // PISTA: Ahora debes sobrescribir el archivo con las notas actualizadas.
    // COMPLETAR: Usa fs.writeFileSync para guardar las notas.
    console.log('Nota agregada con éxito.');
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
    if (fs.existsSync(filePath)) {
        // PISTA: Debes leer y parsear el contenido del archivo.
        // COMPLETAR: Usa fs.readFileSync para leer y JSON.parse para convertir el contenido.
        const contenido = fs.readFileSync(filePath, 'utf8')
        const notas = JSON.parse(contenido);
        console.log(notas);
    } else {
        console.log('No hay notas guardadas.');
    }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
    if (fs.existsSync(filePath)) {
        // PISTA: Primero lee todas las notas.
        // COMPLETAR: Usa fs.readFileSync para leer el archivo.
        const contenido = fs.readFileSync(filePath, 'utf8');
        const notas = JSON.parse(contenido);

        // PISTA: Filtra las notas y elimina la que coincida con el título.
        // COMPLETAR: Usa Array.filter para obtener las notas restantes.
        const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);

        // PISTA: Sobrescribe el archivo con las notas actualizadas.
        // COMPLETAR: Usa fs.writeFileSync.
        fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2))

        console.log(`Nota con título "${titulo}" eliminada.`);
    } else {
        console.log('No hay notas para eliminar.');
    }
}

// Ejecución de ejemplo
//agregarNota('Compras', 'Comprar leche y pan.');

//agregarNota('Trabajo', 'Terminar reporte semestral');

//agregarNota('Oseo', 'Emular juegos para psp');




listarNotas();
eliminarNota('Compras');