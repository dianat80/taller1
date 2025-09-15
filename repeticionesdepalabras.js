function contarPalabras(texto) {
    
    const palabras = texto.toLowerCase().split(/\s+/);
    
        const conteo = {};
    
        palabras.forEach(palabra => {
        
        if (palabra.length > 0) {
            conteo[palabra] = (conteo[palabra] || 0) + 1;
        }
    });
    
    return conteo;
}

const resultado = contarPalabras("hola mundo hola js");
console.log(resultado);
