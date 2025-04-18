const productos = [
    { nombre: "pechiga de pollo", precio: 60, categoria: "alimentos" },
    { nombre: "llantas", precio: 800, categoria: "automotriz" },
    { nombre: "Zapatillas negras", precio: 500, categoria: "calzado" },
    { nombre: "Leche de Almendras", precio: 30, categoria: "lacteos" },
    { nombre: "chayote", precio: 10, categoria: "verdura" },
];

// Filtrar productos que cuesten menos de $100
const productosBaratos = productos.filter(producto => producto.precio < 1000);
console.log("Productos que cuestan menos de $1000:");
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

const haycalzadoBarata = productosBaratos.some(producto => producto.categoria === "calzado");
console.log(`¿Hay algún producto barato en la categoría 'calzado'? ${haycalzadoBarata ? "Sí" : "No"}`);

const todosMuyBaratos = productosBaratos.every(producto => producto.precio < 50);
console.log(`¿Todos los productos baratos cuestan menos de $50? ${todosMuyBaratos ? "Sí" : "No"}`);

const incluyellantas = nombresProductos.includes("llantas");
console.log(`¿La lista incluye el producto 'llantas'? ${incluyellantas ? "Sí" : "No"}`);