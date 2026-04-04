// registro.js
/**
 * Lógica para añadir nuevos viajes al sistema.
 * Importamos 'destinos' de data.js para guardarlos allí,
 * y 'calcularCosto' de costo.js para obtener el precio automáticamente.
 */
import { destinos } from './data.js';
import { calcularCosto } from './costo.js';

export const registrarDestino = (destino, fecha, transporte) => {
    // Creamos el objeto con shorthand properties (propiedades simplificadas)
    let nuevoViaje = {
        destino, 
        fecha, 
        transporte,
        costo: calcularCosto(destino, transporte) // Llamada al cálculo
    };

    // Guardamos el objeto en la lista compartida
    destinos.push(nuevoViaje);
};
