const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

// Filtrar productos que cuesten menos de $100
const productosBaratos = productos.filter(producto => producto.precio < 100);
console.log("Productos que cuestan menos de $100:");
productosBaratos.forEach(producto => {
    console.log(`- ${producto.nombre}, $${producto.precio}, Categoría: ${producto.categoria}`);
});

// Ordenar alfabéticamente por nombre
const productosOrdenados = productosBaratos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("\nProductos ordenados alfabéticamente:");
productosOrdenados.forEach(producto => {
    console.log(`- ${producto.nombre}, $${producto.precio}, Categoría: ${producto.categoria}`);
});

// Generar un arreglo con solo los nombres
const nombresProductos = productosOrdenados.map(producto => producto.nombre);
console.log("\nNombres de los productos ordenados:");
nombresProductos.forEach(nombre => console.log(`- ${nombre}`));

// Uso de otros métodos:
const precioTotal = productosBaratos.reduce((total, producto) => total + producto.precio, 0);
console.log(`\nPrecio total de los productos baratos: $${precioTotal}`);

const hayRopaBarata = productosBaratos.some(producto => producto.categoria === "Ropa");
console.log(`¿Hay algún producto barato en la categoría 'Ropa'? ${hayRopaBarata ? "Sí" : "No"}`);

const todosMuyBaratos = productosBaratos.every(producto => producto.precio < 50);
console.log(`¿Todos los productos baratos cuestan menos de $50? ${todosMuyBaratos ? "Sí" : "No"}`);

const incluyeLibro = nombresProductos.includes("Libro");
console.log(`¿La lista incluye el producto 'Libro'? ${incluyeLibro ? "Sí" : "No"}`);