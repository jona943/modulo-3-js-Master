// imprimir los primeros 10 numeros de 3 en 3
//  1 - 4 - 7 - 10
// -2  -5  -8 
let indice = 1;

for (let contador = indice; contador <= 10; contador += 3){
    console.log(`Numero ${contador}`);
    if (contador === 10){
        console.log("--------------------------------")
        for (let contador = 1; contador >= -10; contador -= 3){
            console.log(`Numero ${contador}`);
        }
    }
};
