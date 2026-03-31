// Suma los primeros 5 numeros (for)
let acumulador = 0;
let valorMax = 5;

for(let indice = 0; indice <= valorMax; indice ++){
    console.log(`Valor de indice es ${indice}`);
    console.log(`La suma de ${acumulador} + ${indice}`);
    acumulador = acumulador +=indice;
    console.log("-------------------------");

    console.log(`Valor acumulado es: ${acumulador}`);
};