function esFinDeSemana(fechaStr) {
    
    const fecha = new Date(fechaStr);
    
        const diaSemana = fecha.getDay();
    
        return diaSemana === 0 || diaSemana === 6;
}

console.log(esFinDeSemana("2024-05-25")); 
console.log(esFinDeSemana("2024-09-12")); 
console.log(esFinDeSemana("2024-03-16")); 
console.log(esFinDeSemana("2024-02-11")); 