function resumenGastos(gastos) {
   
    const total = Object.values(gastos).reduce((suma, gasto) => suma + gasto, 0);
    
   
    let mayorCategoria = '';
    let mayorGasto = 0;
    
    for (const [categoria, gasto] of Object.entries(gastos)) {
        if (gasto > mayorGasto) {
            mayorGasto = gasto;
            mayorCategoria = categoria;
        }
    }
    
   
    return {
        total: total,
        mayor: mayorCategoria
    };
}

const misGastos = {
    comida: 12000,
    transporte: 8000,
    entretenimiento: 10000
};

const resultado = resumenGastos(misGastos);
console.log(resultado);