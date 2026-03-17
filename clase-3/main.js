// Arreglos con diversos tipos de datos
const listaDeCompras = ['leche', 'huevos', 'pan', 'tortillas'];
const mezcla = ['Ariel', 23, true, false, {rol: 'estudiante'}, ['sublista']];

console.log(listaDeCompras);
console.log(mezcla);

// Modificar contenido (permitido con const)
listaDeCompras.push('mantequilla'); 
console.log(listaDeCompras);

// Reasignación total (requiere let)
let numeros = [1, 3, 67, 30];
numeros = [1, 2, 3, 4, 5, 35, 8, 10, 45];
console.log(numeros);

// Acceso por índice y longitud
console.log(mezcla[1]);
console.log(mezcla[78]); // undefined
console.log(mezcla.length);
console.log(mezcla[mezcla.length - 1]);

// Recorrido tradicional
const frutas = ['pera', 'papaya', 'sandia', 'melon'];
for(let i = 0; i < frutas.length; i++){
    console.log('Indice: ', i+1, 'Valor: ', frutas[i]);
}

// Métodos de inserción y eliminación
frutas.unshift('cereza', 'lulo'); // Agregar al inicio
console.log(frutas);

frutas.shift(); // Quitar del inicio
console.log(frutas);

frutas.pop(); // Quitar el último
console.log(frutas);

const usuarios = [
    {id: 1, nombre: 'Ana'},
    {id: 2, nombre: 'Fernanda'},
    {id: 3, nombre: 'Erick'},
    {id: 4, nombre: 'Misael'},
];

// find: primer elemento que cumple condición
const encontrado = usuarios.find((m) => m.id == 2);
console.log(encontrado);

// filter: nuevo arreglo con elementos que cumplen condición
const pares = numeros.filter((n) => n % 2 === 0);
console.log('Original:', numeros);
console.log('Copia de Pares:', pares);

// map: nuevo arreglo transformado
const precios = [100, 200, 300, 400, 500];
const preciosConIVA = precios.map((p) => {
    const iva = p * 0.16; 
    const total = p + iva; 
    return total;
});
console.log('Original; ', precios);
console.log('Con IVA; ', preciosConIVA);

// forEach: recorrer sin crear nuevo arreglo
const apellidos = ['Villanueva', 'Velazquez', 'Serrano'];
apellidos.forEach((apellido, index) => {
    console.log('Posicion ', index, 'Apellido ', apellido);
});

// some: ¿existe al menos uno?
const existeSerrano = apellidos.some((p) => p === 'Serrano');
console.log(existeSerrano);

// every: ¿todos cumplen?
const todosPares = numeros.every(num => num % 2 === 0);
console.log(todosPares);

// reduce: reducir a un solo valor (ej: suma)
const numeritos = [1, 2, 3, 4];
const suma = numeritos.reduce((acc, act) => acc + act, 0);
console.log(suma);

// Ejemplo: Suma total de carrito
const carrito = [
    { producto: "Laptop", precio: 1000 },
    { producto: "Mouse", precio: 50 },
    { producto: "Teclado", precio: 100 }
];
const total = carrito.reduce((acc, item) => acc + item.precio, 0);
console.log(total);

// splice: eliminar elementos (inicio, cantidad)
let frutilla = ["manzana", "pera", "plátano", "uva"];
frutilla.splice(1, 1); // Quita "pera"
console.log("Arreglo tras splice:", frutilla);

// Arreglo de objetos
const estudiantes = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Martin", edad: 22 },
    { nombre: "Antonella", edad: 21 }
];
console.log(estudiantes[0].nombre);

// Buscar por condición
const mayor = estudiantes.find(est => est.edad > 21);
console.log(mayor);
