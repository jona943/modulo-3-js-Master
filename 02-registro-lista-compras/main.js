// PILAS
let pila = [];

pila.push("10%");
pila.push("50%");
pila.push("80%");
pila.push("100%");

console.log(pila.pop()); // Imprime la ultima pila y la elimina
console.log(pila);


// COLAS
let cola = [];

cola.push("Actividad 1");
cola.push("Actividad 2");
cola.push("Actividad 3");

console.log(cola.shift()); // Imprime el primer dato en entrar  
console.log(cola); 


// Conjunto (Sets)
let usuarios = new Set();

usuarios.add("Jonathan");
usuarios.add("America");
usuarios.add("Martin");
usuarios.add("Jonathan"); // NO se agrega, actualmente ya esta en el conjunto

console.log(usuarios); // imprime Set(3) { 'Jonathan', 'America', 'Martin' }


// Mapas (Maps)
let precios = new Map();

precios.set("Articulo1", 65 );
precios.set("Articulo2", 42 );
precios.set("Articulo3", 84 );

console.log(precios.get("Articulo2"));


// Arboles (Trees)
let arbolProyecto = {
    nombre: "Mi-Aplicacion-Web", // Nodo Raíz
    hijos: [
        {
            nombre: "src", // Carpeta principal de código
            hijos: [
                {
                    nombre: "components", // Subcarpeta de componentes
                    hijos: [
                        { nombre: "Navbar.js", hijos: [] },
                        { nombre: "Footer.js", hijos: [] },
                        { nombre: "Button.js", hijos: [] }
                    ]
                },
                {
                    nombre: "pages", // Subcarpeta de páginas
                    hijos: [
                        { nombre: "Home.js", hijos: [] },
                        { nombre: "Contact.js", hijos: [] }
                    ]
                },
                { nombre: "App.js", hijos: [] }, // Archivo en la raíz de src
                { nombre: "index.js", hijos: [] }
            ]
        },
        {
            nombre: "public", // Carpeta de recursos estáticos
            hijos: [
                { nombre: "index.html", hijos: [] },
                { nombre: "favicon.ico", hijos: [] },
                { 
                    nombre: "assets", 
                    hijos: [
                        { nombre: "logo.png", hijos: [] },
                        { nombre: "styles.css", hijos: [] }
                    ] 
                }
            ]
        },
        { nombre: "package.json", hijos: [] }, // Archivo en la raíz del proyecto
        { nombre: "README.md", hijos: [] }
    ]
};

console.log(arbolProyecto);


// Estructura Root de Linux como ejemplo de Árbol
// En Linux, todo nace de la raíz "/", que es el nodo Root.
// Las carpetas como /home, /etc o /var son sub-árboles (hijos).
let arbolLinux = {
    nombre: "/", // Raíz (Root)
    hijos: [
        {
            nombre: "bin", // Comandos esenciales
            hijos: [
                { nombre: "bash", hijos: [] },
                { nombre: "ls", hijos: [] }
            ]
        },
        {
            nombre: "home", // Carpetas de usuarios
            hijos: [
                { 
                    nombre: "usuario1", 
                    hijos: [
                        { nombre: "documentos", hijos: [] },
                        { nombre: "descargas", hijos: [] }
                    ] 
                }
            ]
        },
        {
            nombre: "etc", // Archivos de configuración
            hijos: [
                { nombre: "passwd", hijos: [] },
                { nombre: "hosts", hijos: [] }
            ]
        }
    ]
};

console.log("Ejemplo de Estructura Linux (Root):", arbolLinux);
