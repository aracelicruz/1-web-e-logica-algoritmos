import { obtenerDestinos } from './gestionViajes.js';

const preciosTransporte = {
    Avión: 500,
    Tren: 200,
    Autobús: 100
};

export const calcularCosto = () => {
    const destinos = obtenerDestinos();
    return destinos.reduce((total, { transporte }) => total + (preciosTransporte[transporte] || 0), 0);
};
