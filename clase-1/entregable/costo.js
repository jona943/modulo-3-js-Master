// costo.js
/**
 * Lógica pura de cálculo de costos.
 * Esta función es un 'módulo puro': recibe datos y devuelve un resultado,
 * sin modificar variables externas.
 */
export const calcularCosto = (destino, transporte) => {
    let costoBase = 0;

    // Evaluamos el costo base según el destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres"){
        costoBase = 400;
    } else if (destino === "New York"){
        costoBase = 600;
    } else {
        console.log(`Tu destino ${destino} no está registrado`);
    };
    
    // Sumamos costos adicionales por el medio de transporte
    if (transporte === "Avion") {
        costoBase += 200;
    } else if (transporte === "Tren"){
        costoBase += 100;
    } else {
        console.log(`${transporte} No registrado`);
    };

    return costoBase; // Retornamos el valor final para que registro.js lo use
};
