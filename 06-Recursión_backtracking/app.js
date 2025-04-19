const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota", "Muñeca", "Bicicleta", "Micro hornito", "Transformes", "Uno"];

function findGift(gifts, giftName, index = 0) {
    // Caso base: Si llegamos al final de la lista
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }
    // Caso base: Si encontramos el regalo
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }
    // Llamada recursiva para seguir buscando
    return findGift(gifts, giftName, index + 1);
}

// Casos de ejemplo:
let giftToFind = "Uno";
console.log(findGift(gifts, giftToFind)); 

giftToFind = "Micro hornito";
console.log(findGift(gifts, giftToFind)); 

giftToFind = "Play-Doh";
console.log(findGift(gifts, giftToFind)); 