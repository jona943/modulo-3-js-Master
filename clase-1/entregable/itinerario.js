// itinerario.js
/**
 * Lógica exclusiva para mostrar la información en consola.
 * Importamos los destinos de data.js para recorrerlos.
 */
import { destinos } from './data.js';

export const mostrarItinerario = () => {
    // Recorremos el arreglo compartido usando un bucle tradicional (por ahora)
    for (let i = 0; i < destinos.length; i++) {
        let viaje = destinos[i];
        
        // Usamos template literals para que la salida sea legible
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Costo: $${viaje.costo}`);
        console.log("---------------------------");
    }
};
