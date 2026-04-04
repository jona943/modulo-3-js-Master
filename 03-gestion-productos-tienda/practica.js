// Arreglo de productos
const productos = [
    { nombre: 'Monitor', precio: 150, categoria: 'Electronica' },
    { nombre: 'Teclado', precio: 20, categoria: 'Accesorios' },
    { nombre: 'Raton', precio: 15, categoria: 'Accesorios' },
    { nombre: 'Laptop', precio: 800, categoria: 'Electronica' },
    { nombre: 'Cable HDMI', precio: 10, categoria: 'Accesorios' }
];

// filter: productos menores a $100
const economicos = productos.filter(p => p.precio < 100);
console.log('Económicos:', economicos);
console.log("-----------------------------");

// sort: ordenar alfabéticamente por nombre
const ordenados = [...economicos].sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log('Ordenados:', ordenados);
console.log("-----------------------------");

// map: obtener solo los nombres
const nombres = ordenados.map(p => p.nombre);
console.log('Nombres:', nombres);
console.log("-----------------------------");

// reduce: total de precios económicos
const totalVenta = economicos.reduce((acc, p) => acc + p.precio, 0);
console.log('Suma total económicos:', totalVenta);
