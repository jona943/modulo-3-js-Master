/**
 * Ejemplo práctico: Verificación de Palíndromos usando Dos Punteros

 * Un palíndromo es una palabra que se lee igual de izquierda a derecha
 * que de derecha a izquierda (ejemplo: "radar", "reconocer").
 */

function esPalindromo(texto) {
    // Limpiamos el texto: lo pasamos a minúsculas y quitamos espacios <---------
    
    /*
    * \s: Significa "espacio en blanco". Detecta espacios, tabulaciones o saltos de línea.

    * / /: Las barras diagonales indican que lo que está adentro es una expresión regular.

    * g: Es una bandera que significa "global". Sin ella, solo borraría el primer espacio 
      que encuentre; con la g, busca y borra todos los espacios de la frase.
    */
    const palabra = texto.toLowerCase().replace(/\s/g, "");

    // Definimos nuestros dos punteros <---------
    let izquierda = 0;                 // Empieza al inicio de la palabra
    let derecha = palabra.length - 1;  // Empieza al final de la palabra

    // Mientras los punteros no se crucen <---------
    while (izquierda < derecha) {
        
        // Comparamos los caracteres en las posiciones de los punteros <---------
        console.log(`Comparando: ${palabra[izquierda]} con ${palabra[derecha]}`);

        if (palabra[izquierda] !== palabra[derecha]) {
            // Si son diferentes, no es un palíndromo <---------
            return false,
            console.log(`La palabra ´${palabra}´ No es un polindromo`)
            console.log("-----------------------------"); 
        }

        // Movemos los punteros hacia el centro <---------
        izquierda++; // Avanza uno a la derecha
        derecha--;   // Retrocede uno a la izquierda
    }

    // Si terminamos el ciclo sin encontrar diferencias, es un palíndromo
    return true,
    console.log(`La palabra ´${palabra}´ es un polindromo`),
    console.log("-----------------------------"); 
}
// --- Pruebas del código ---

esPalindromo("Radar");
esPalindromo("Nadar");