// app.js
/**
 * Punto de entrada del programa.
 * Aquí orquestamos los módulos principales para que el programa corra.
 * Al importar, elentorno sabe qué archivos cargar automáticamente.
 */
import { registrarDestino } from './registro.js';
import { mostrarItinerario } from './itinerario.js';

const iniciarApp = () => {
    // 1. Registramos algunos datos de prueba
    registrarDestino("Paris", "2024-06-15", "Avion");
    registrarDestino("Londres", "2024-07-01", "Tren");

    // 2. Ejecutamos la función para ver los resultados
    mostrarItinerario();
};

// Arrancamos la ejecución de la aplicación
iniciarApp();
