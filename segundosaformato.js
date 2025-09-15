function formatearTiempo(segundos) {
    
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segs = segundos % 60;
    
    
    const formato = (valor) => valor.toString().padStart(2, '0');
    
    return `${formato(horas)}:${formato(minutos)}:${formato(segs)}`;
}

console.log(formatearTiempo(4662)); 
console.log(formatearTiempo(25));   
console.log(formatearTiempo(1000)); 
console.log(formatearTiempo(8900));