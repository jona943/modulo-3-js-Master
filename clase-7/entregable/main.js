function findMax(arr) {
    // TODO: Agregar la condición del caso base

    // Caso base:
    if (/* condición */ arr.length === 1) {
        return /* valor */ arr[0];
    }

    // Paso 1: Dividir
    // TODO: Dividir el arreglo en dos mitades
    const mid = /* calcular el punto medio */ Math.floor(arr.length / 2);

    // Paso 2: Conquistar
    const left = /* obtener la primera mitad */arr.slice(0, mid);

    // Encontramos el máximo en la mitad derecha
    const right = /* obtener la segunda mitad */ arr.slice(mid);

    // TODO: Llamar recursivamente a la función para ambas mitades
    const leftMax = /* llamada recursiva */findMax(left);
    const rightMax = /* llamada recursiva */findMax(right);

    // Paso 3: Combinar
    // TODO: Combinar las soluciones comparando los máximos
    if (leftMax > rightMax) {
        return leftMax;
    } else {
        return rightMax;
    }
    /* máximo entre leftMax y rightMax */;
}
// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers)); // Salida esperada: 10