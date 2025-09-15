function encontrarNumeroFaltante(numeros) {
    
    const n = Math.max(...numeros);
    
        const sumaEsperada = n * (n + 1) / 2;
    
        const sumaReal = numeros.reduce((total, num) => total + num, 0);
    
    
    return sumaEsperada - sumaReal;
}


console.log(encontrarNumeroFaltante([1, 2, 4, 5]));    
console.log(encontrarNumeroFaltante([1, 3, 4, 5]));    
console.log(encontrarNumeroFaltante([2, 3, 4, 5]));    
console.log(encontrarNumeroFaltante([1, 2, 3, 5]));    