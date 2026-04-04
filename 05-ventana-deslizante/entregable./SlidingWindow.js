
function findLongestWord(text) {
    // TODO: Dividir el texto en palabras y almacenarlas en una variable
    // const words = ...
    const words = text.split(" ");

    let longestWord = ''; // Inicializar la palabra más larga (longitud 0).

    // TODO: Recorrer el arreglo de palabras con un ciclo
    // for (...) {

    for (const word of words){ // Recorre cada elemento que este adentro
        if (word.length > longestWord.length){ // Comparacion de una palabra en cada iteracion
            longestWord = word; // La palabra mas larga se agrega y cambia si hay otras palabras mas largas al terminar el recorrido
        }

    }
        // TODO: Comparar la longitud de la palabra actual con la más larga
        // if (...) {
            // Actualizar la palabra más larga
            // longestWord = ...;
        // }
    // }
    return longestWord;
    // TODO: Retornar la palabra más larga encontrada
    // return ...;
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
// TODO: Llama a la función y muestra el resultado 
console.log(findLongestWord(text)); // Resultado esperado: "programación"