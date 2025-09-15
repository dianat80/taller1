function mismosTipos(array) {
    
    if (array.length === 0) return true;
    
    
    const primerTipo = typeof array[0];
    
    
    return array.every(elemento => typeof elemento === primerTipo);
}


console.log(mismosTipos([1, 2, 3]));          
console.log(mismosTipos([1, "2", 3]));        
console.log(mismosTipos(["a", "b", "c"]));    
console.log(mismosTipos([true, false]));      