let personas = [
    {id: 1, nombre: "Marta"},
    {id: 2, nombre: "Pedro"},
    {id: 3, nombre: "Juan"},
    {id: 4, nombre: "Ana"},
    {id: 5, nombre: "Maria"}
]

personas.sort((a, b) => a.nombre.localCompare (b.nombre));

console.log(personas)