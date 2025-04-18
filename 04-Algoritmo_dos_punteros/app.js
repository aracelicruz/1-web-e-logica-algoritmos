const invitados = ["Gustavo", "Karen", "Nancy", "Luisa", "Ana", "Lucas", "Guillermo", "Karina"];

function encontrarParejas(arr) {
    let inicio = 0;
    let fin = arr.length - 1;
    let parejas = [];
    let emparejados = new Set(); // Almacena a los invitados que ya tienen pareja

    while (inicio < fin) {
        // Comparar el puntero inicial con todos los nombres desde el puntero final
        if (arr[inicio][0] === arr[fin][0]) {
            parejas.push([arr[inicio], arr[fin]]);
            console.log(`Pareja encontrada: ${arr[inicio]} y ${arr[fin]}`);

            // Marcar a los invitados como emparejados
            emparejados.add(arr[inicio]);
            emparejados.add(arr[fin]);
        }

        // Si no hay coincidencia, mover puntero dependiendo de la comparación
        if (inicio + 1 === fin) {
            inicio++;
            fin = arr.length - 1; // Restablece fin para comparar el siguiente elemento
        } else {
            fin--;
        }
    }

    // Imprimir los invitados sin pareja
    arr.forEach((invitado) => {
        if (!emparejados.has(invitado)) {
            console.log(`Sin pareja: ${invitado}`);
        }
    });

    return parejas;
}

encontrarParejas(invitados);
