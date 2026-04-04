function GenerarSubconjuntos(nums){
    const resultado = [];

    function backtrack(inicio, camino){
        resultado.push([...camino]);
        for(let i = inicio; i < nums.length; i++){
            camino.push(nums[i]);
            backtrack( i + 1, camino);
            camino.pop();
        }
    }
    backtrack(0, []);
    return resultado;
}

console.log(GenerarSubconjuntos([1, 2, 3, 4]));