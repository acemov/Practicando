console.log(" - - - - - - - - - - - -  EJERCICIO 1 - - - - - - - - - - - - - - - -");
// Ejercicio 1: Crear un objeto simple
// Crea un objeto llamado persona con las siguientes propiedades:

// nombre: "Ana"
// edad: 30
// trabajo: "Ingeniera" Luego, accede y muestra cada propiedad en la consola.


let persona = {
    nombre: "Ana",
    edad: 30,
    trabajo: "Ingeniera"
}
console.log(`La persona se llama ${persona.nombre} y tiene ${persona.edad} años, tambien sabemos que tiene una carrera en ${persona.trabajo} `);

console.log(" - - - - - - - - - - - -  EJERCICIO 2 - - - - - - - - - - - - - - - -");
// Ejercicio 2: Agregar y eliminar propiedades
// Crea un objeto llamado coche con las propiedades marca y modelo.
// Agrega una propiedad llamada año con el valor 2023.
// Elimina la propiedad modelo.
// Muestra el objeto actualizado en la consola.

let coche = {
    marca: "autito",
    modelo: 2000
}
coche.año = 2023
delete coche.modelo

console.log(coche);

console.log(" - - - - - - - - - - - -  EJERCICIO 3 - - - - - - - - - - - - - - - -");
// Ejercicio 3: Métodos en un objeto
// Crea un objeto llamado calculadora que tenga:

// Una propiedad sumar que sea una función que tome dos números y devuelva su suma.
// Una propiedad restar que sea una función que tome dos números y devuelva su resta. 
// Llama a ambos métodos con números de tu elección y muestra los resultados en la consola.
let calculadora = {
    sumar: function(a,b){
        return a+b
    },
    restar: function(c,d){
        return c-d
    }
}
console.log(`La suma es: ${calculadora.sumar(10,12)} y la resta es: ${calculadora.restar(20,19)}`)


console.log(" - - - - - - - - - - - -  EJERCICIO 4 - - - - - - - - - - - - - - - -");

// Ejercicio 4: Iterar propiedades
// Crea un objeto llamado mascota con las siguientes propiedades:

// nombre: "Firulais"
// especie: "Perro"
// edad: 5
// Usa un bucle for...in para iterar sobre las propiedades del objeto y mostrar en la consola cada clave y valor.

let mascota ={
    nombre: "Firulais",
    especie: "Perro",
    edad: 5,
}
for (const proiedad in mascota) {
    console.log(`${proiedad}: ${mascota[proiedad]}`);
    
}
console.log(" - - - - - - - - - - - -  EJERCICIO 5 - - - - - - - - - - - - - - - -");
// Ejercicio 5: Herencia de prototipos
// Crea una clase llamada Persona con las propiedades nombre y edad y un método llamado saludar que imprima un saludo con el nombre de la persona.
// Crea una subclase llamada Estudiante que herede de Persona y tenga una propiedad adicional llamada curso.
// Crea una instancia de Estudiante y llama al método saludar desde esa instancia.

class Persona {
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }
    saludar(){
        return `Un saludo para ${this.nombre} que tiene ${this.edad}`
    }
}
class Estudiante {
    constructor() {
        
    }
}
const alumno1 = new Persona("Franco", 21)
console.log(alumno1.saludar())