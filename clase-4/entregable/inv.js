const invitados = ["Ana", "Arianna", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function parejas2(arreglo){
    let inicio = 0;
    let siguiente = 1; 

    while (siguiente < arreglo.length){
        if (arreglo[inicio][0] === arreglo[siguiente][0]){
            return [arreglo[inicio], arreglo[siguiente]];
        }
        inicio++,
        siguiente++;
    }
    return null;
}

console.log(parejas2(invitados));