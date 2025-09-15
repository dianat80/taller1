function obtenerIniciales(nombreCompleto) {
   
    const palabras = nombreCompleto.split(' ');
    
   
    const palabrasValidas = palabras.filter(palabra => palabra.length > 0);
    
   
    const iniciales = palabrasValidas.map(palabra => palabra[0].toUpperCase());
    
   
    return iniciales.join('.');
}


console.log(obtenerIniciales("sebastián gomez")); 
console.log(obtenerIniciales("paola torres"));      
console.log(obtenerIniciales("juan montilla"));              
console.log(obtenerIniciales("Sami"));                     