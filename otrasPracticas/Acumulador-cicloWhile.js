// Suma los primeros 5 numeros (for)
let acumuador = 0;
let indice = 0;
const valorMax = 5;
 
while (acumuador <= valorMax) {
    console.log(`La suma de ${acumuador} + ${indice}`);
    acumuador += indice;
    console.log(`Total acumulado: ${acumuador}`);
    console.log(`Interacion #${indice += 1}`);
    console.log("----------------");
};