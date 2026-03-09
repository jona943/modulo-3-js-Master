/*
   Registro de Usuario
   Un objeto para almacenar información sobre un usuario.
*/

// Definición del objeto usuario
const usuario = {
    nombre: "Jonathan Medina",
    direccion: "Calle las bugambilias 164, Ciudad Masamitla",
    email: "jonh.medina@outlook.es"
};

// Mostrar la información del usuario por consola
console.log("--- Registro de Usuario ---");
console.log(`Nombre: ${usuario.nombre}`);
console.log(`Dirección: ${usuario.direccion}`);
console.log(`Email: ${usuario.email}`);
console.log(usuario.casa); // undefined
