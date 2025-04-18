function findLongestWord(text) {
    // Dividir el texto en palabras
    const words = text.split(' ');

    let longestWord = ''; // Inicializar la palabra más larga

    // Recorrer el arreglo de palabras
    for (const word of words) {
        // Comparar la longitud de la palabra actual con la más larga
        if (word.length > longestWord.length) {
            // Actualizar la palabra más larga
            longestWord = word;
        }
    }

    // Retornar la palabra más larga encontrada
    return longestWord;
}

// Ejemplo de uso
const text = "El esternocleidomastoideo es un músculo del cuello que ayuda a mover la cabeza.";
console.log(findLongestWord(text)); // Resultado esperado: "programación"
