// Suma los primeros 5 numeros (for)

let acumulador = 0;
let i = 0;
const valorMax = 5;

do {
    console.log(`La suma de ${acumulador} + ${i}`),
    acumulador += i,
    console.log(`Acumulador: ${acumulador}`),
    console.log(`Iteracion #${i += 1}`),
    console.log(`---------------`);


} while (
    i <= valorMax
);