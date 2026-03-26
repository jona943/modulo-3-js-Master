function factorial(n){
    console.log(`Calculando factorial de ${n}`);
    // Validacion de numeros negativos
    if(n < 0){
        throw new Error(`El factorial no esta definida para numeros negativos.`);
    }
    // caso base
    if (n === 0){
        return 1;
    }
    // llamada Recursiva 
    // n ! - n * (n-1)!
    const resultado = n *factorial (n - 1);
    console.log(`Retornando ${resultado} para n = ${n}`);

    return n * factorial(n-1);
}

console.log(factorial(5));

/** */