function dosPunterosSuma(arr, objetivo) {
    let inicio = 0; // Primer puntero
    let fin = arr.length - 1; // Segundo puntero

    while (inicio < fin) {
        const suma = arr[inicio] + arr[fin];

        if (suma === objetivo) {
            return [arr[inicio], arr[fin]]; // Regresamos los números que cumplen la condición
        }

        if (suma < objetivo) {
            inicio++; // Si la suma es menor, movemos el puntero del inicio a la derecha
        } else {
            fin--; // Si la suma es mayor, movemos el puntero del fin a la izquierda
        }
    }

    return null; // No se encontró ninguna pareja
}

console.log(dosPunterosSuma([1, 2, 3, 4, 6], 6)); // [2, 4]