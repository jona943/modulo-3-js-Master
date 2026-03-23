const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];
const invitadosExclusivos = ["Martina", "Leonel", "Mariel", "Ariel", "Axel", "Miguel"];

function encontrarPareja(arreglo) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arreglo.length) {
        // TODO: Compara las iniciales de los nombres en los punteros
        if (arreglo[inicio][0] === arreglo[siguiente][0]) {
            // Si coinciden, devuelve el par
            // ...
            return [arreglo[inicio], arreglo[siguiente]]; 
        }
        // TODO: Avanza los punteros si no coinciden
        // ...
        inicio++
        siguiente++;
    }

    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"] 

console.log(encontrarPareja(invitadosExclusivos));
// Resultado: [ 'Ariel', 'Axel' ]