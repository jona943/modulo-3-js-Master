// Arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Mouse", precio: 25, categoria: "Electrónica" },
    { nombre: "Teclado", precio: 45, categoria: "Electrónica" },
    { nombre: "Monitor", precio: 200, categoria: "Electrónica" },
    { nombre: "Pizza", precio: 12, categoria: "Comida" },
    { nombre: "Hamburguesa", precio: 8, categoria: "Comida" },
    { nombre: "Libro", precio: 30, categoria: "Educación" },
    { nombre: "Mochila", precio: 120, categoria: "Ropa" },
];

// Encadenamiento de metodos 
const resultado = productos 
// Filter
.filter(producto => producto.precio < 50) // productos que cuesten menos de 100 
// Sort
.sort((a,b) => a.nombre.localeCompare(b.nombre)) // localeCompare compara strings correctamente y ordenamos alfabeticamente
// Map 
.map(producto => producto.nombre); // Devuelve solo el nombre del producto

console.log('Resultados de usar los metodos Filter, Sort y Map');
console.log(resultado);