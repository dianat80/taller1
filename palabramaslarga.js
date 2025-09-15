function palabraMasLarga(oracion) {
    
    const palabras = oracion.split(' ').map(palabra => 
        palabra.replace(/[^\wáéíóúüñ]/g, '')
    ).filter(palabra => palabra.length > 0);
    
        let palabraLarga = '';
    
    palabras.forEach(palabra => {
        if (palabra.length > palabraLarga.length) {
            palabraLarga = palabra;
        }
    });
    
    return palabraLarga;
}

const oracion = "Estoy aprendiendo JavaScript básico";
console.log(palabraMasLarga(oracion)); 