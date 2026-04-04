const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electronica" },
    { nombre: "Libro", precio: 12, categoria: "Educacion" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electronica" },
    { nombre: "Monitor", precio: 120, categoria: "Electronica" },
    { nombre: "Mochila", precio: 30, categoria: "Accesorios" },
    { nombre: "Reloj", precio: 150, categoria: "Accesorios" },
    { nombre: "Pantalon", precio: 40, categoria: "Ropa" },
    { nombre: "Teclado", precio: 25, categoria: "Electronica" },
];

// 1. Filtrar productos menores a $100
const productosBaratos = productos.filter(p => p.precio < 100);
console.log("1. Productos baratos (menos de $100):");
console.table(productosBaratos); // Usando table en vez de log genera una tabla mas visual
console.log("------------------------------------");

// 2. Ordenar productos alfabéticamente
const productosOrdenados1 = [...productosBaratos].sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("2. Productos baratos ordenados alfabeticamente:"); // Productos baratos
console.table(productosBaratos);
console.log("---------------------------------------");

const productosOrdenados = [...productos].sort((a, b) => a.nombre.localeCompare(b.nombre)); // ... genera una copia del contenido de un arreglo sin modificar el original
console.log("Productos ordenados alfabeticamente:"); // Todos los productos
console.table(productosOrdenados);
console.log("---------------------------------------");

// 3. Generar arreglo solo con los nombres usando map()
const nombreProductos = [...productos].map(p => p.nombre);
console.log("3. Nombres de todos los producto:");
console.table(nombreProductos);
console.log("---------------------------------------");

// Reduce para calcular la suma de todos los precios de arreglo productos
const valorTotalProductos = productos.reduce((total, p) => total + p.precio, 0);
console.log(`Costo total de todos los productos: $${valorTotalProductos}`);
