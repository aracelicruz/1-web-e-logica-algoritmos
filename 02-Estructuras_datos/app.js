// Arreglo para almacenar la lista de compras
const listaDeCompras = [];

// Función para agregar productos
const agregarProducto = (producto) => {
    if (!listaDeCompras.includes(producto)) {
        listaDeCompras.push(producto);
        console.log(`Producto "${producto}" agregado a la lista.`);
    } else {
        console.log(`El producto "${producto}" ya está en la lista.`);
    }
};

// Función para eliminar productos
const eliminarProducto = (producto) => {
    const index = listaDeCompras.indexOf(producto);
    if (index !== -1) {
        listaDeCompras.splice(index, 1);
        console.log(`Producto "${producto}" eliminado de la lista.`);
    } else {
        console.log(`El producto "${producto}" no está en la lista.`);
    }
};

// Función para mostrar la lista completa
const mostrarLista = () => {
    if (listaDeCompras.length === 0) {
        console.log("La lista de compras está vacía.");
    } else {
        console.log("Lista de compras:");
        listaDeCompras.forEach((producto, index) => {
            console.log(`${index + 1}. ${producto}`);
        });
    }
};

// Ejemplo de uso:
agregarProducto("Mantequilla");
agregarProducto("cafe");
agregarProducto("cafe");
agregarProducto("azucar"); 

mostrarLista();

eliminarProducto("azucar");
eliminarProducto("pan");

mostrarLista();
