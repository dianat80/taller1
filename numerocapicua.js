function esCapicua(numero) {
    
    const strNumero = numero.toString();
    
    
    return strNumero === strNumero.split('').reverse().join('');
}


console.log(esCapicua(2224));   
console.log(esCapicua(444));   
console.log(esCapicua(1110));  
console.log(esCapicua(6789)); 