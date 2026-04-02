class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    nombreCompleto(){
        return `${this.nombre} ${this.apellido}`;
    }
}

let persona1 = new Persona("Pedro", "Soto", 35);

console.log(personal1.nombreCompleto());