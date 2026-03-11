let listaDeCompras = [];

// Agregar producto nuevo si no esta en lista.
const agregarProducto = (productoNuevo) => {
    const nombreLimpio = productoNuevo.trim();

    if (listaDeCompras.includes(nombreLimpio)) {
        console.warn(`El producto ${nombreLimpio} ya esta en la lista..!`);
    } else {
        listaDeCompras.push(nombreLimpio);
        console.log(`Producto -${nombreLimpio}- ¡Agregado!`)
    }
};

// Elimina un producto específico de la lista por su nombre.
const eliminarProducto = (productoAEliminar) => {
    const nombreLimpio = productoAEliminar.trim();
    const i = listaDeCompras.indexOf(nombreLimpio);

    if (i !== -1) {
        listaDeCompras.splice(i, 1);
        console.log(`Producto ${nombreLimpio} eliminado.`);
    } else {
        console.error(`Error: el producto ${nombreLimpio} no existe en la lista.`);
    }
};

// Muestra todos los productos de la lista
const mostrarLista = () => {
    console.log(".....  Lista de Compras ......");
    
    if (listaDeCompras.length === 0) {
        console.log("La lista esta vacia.");
    } else {
        listaDeCompras.forEach( (producto, i) => {
            console.log(`${i + 1} ${producto}`);
        });
        console.log("--------------------------")
    }
};

agregarProducto("Aguacate");
agregarProducto("Leche Deslactosada");
agregarProducto("Platanos");
agregarProducto("Papas");

mostrarLista();

eliminarProducto("Aguacate  ");
eliminarProducto("Agua");

mostrarLista();