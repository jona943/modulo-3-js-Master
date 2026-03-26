// Ejemplo: Suma máxima de 'k' elementos consecutivos
function maxSum(arr, k) {
    let max = 0, windowSum = 0;
    for (let i = 0; i < k; i++) windowSum += arr[i]; // Primera ventana
    max = windowSum;

    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k]; // Deslizamos: sumamos nuevo, restamos viejo
        max = Math.max(max, windowSum);
    }
    return max;
}