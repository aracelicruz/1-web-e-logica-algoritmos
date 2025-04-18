const destinos = [];

export const registrarDestino = (destino, fecha, transporte) => {
    destinos.push({ destino, fecha, transporte });
};

export const mostrarItinerario = () => {
    destinos.forEach(({ destino, fecha, transporte }) => {
        console.log(`Destino: ${destino}, Fecha: ${fecha}, Transporte: ${transporte}`);
    });
};

export const obtenerDestinos = () => destinos; // Para cálculos
