import { registrarDestino, mostrarItinerario } from './gestionViajes.js';
import { calcularCosto } from './calculoCosto.js';

// Ejemplo de uso:
registrarDestino('París', '2025-06-15', 'Avión');
registrarDestino('Roma', '2025-06-20', 'Tren');

console.log('Itinerario actual:');
mostrarItinerario();

console.log('Costo total estimado:');
console.log(`$${calcularCosto()}`);
