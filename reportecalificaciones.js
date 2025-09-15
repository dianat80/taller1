function generarReporteCalificaciones(estudiantes) {
    const sumaNotas = estudiantes.reduce((total, estudiante) => total + estudiante.nota, 0);
    const promedio = sumaNotas / estudiantes.length;
    
    const aprobados = estudiantes
        .filter(estudiante => estudiante.nota >= 3.0)
        .map(estudiante => estudiante.nombre);
    
    
    return {
        promedio: Number(promedio.toFixed(2)), // Redondear a 2 decimales
        aprobados: aprobados
    };
}

const calificaciones = [
    { nombre: "Ana", nota: 3.5 },
    { nombre: "Luis", nota: 4.8 },
    { nombre: "Pedro", nota: 2.9 }
];

const reporte = generarReporteCalificaciones(calificaciones);
console.log(reporte);
