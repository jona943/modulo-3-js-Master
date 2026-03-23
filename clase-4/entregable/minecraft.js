const cofre = ["Armadura", "pico", "Espada", "Escudo", "Casco", "Botas"];
        // --------------------------- INDICES: ------------------------
        //         0          1        2         3        4        5
        //    A r m a d u r a
        //    0 1 2 3 4 5 6 7

        // Explicacion para mi hermana 

function buscadorDeObjetos(arreglo){
    let bucador1 = 0;
    let buscador2 = 1;

    while(bucador1 < arreglo.length) {
        if (arreglo[bucador1][0] === arreglo[buscador2][0]){
            return [arreglo[bucador1], arreglo[buscador2]];
        }
        bucador1++
        buscador2++;
    }
    return null;
}

console.log(buscadorDeObjetos(cofre));
