class Animal {
    #id
    constructor(nombre, años, id){
        this.nombre = nombre
        this.años = años
        this.#id = id
    }
    static ruido(a){
        return console.log(`Este animal: ${a} si hace ruido`);
    }
    // Metodo publico
    verAños(){
        return `Tiene ${this.años} años`
    }
    // Metodo privado
    #mostrarID(){
        return `El id es ${this.#id}`
    }
}
class Perro extends Animal{
    constructor(nombre, raza){
        super(nombre)
        this.raza = raza
    }
    especie(){
        return console.log(`Es de la raza ${this.raza} y tiene como nombre ${this.nombre}`);
        
    }
}
const perro1 = new Perro("Fidel", "Tiburon")
perro1.especie()
Animal.ruido("Maduro")

let animal1 = new Animal("Cristina", 100 , 24)
console.log(animal1);
console.log(animal1.verAños());
// console.log(animal1.mostrarID()); // No funcinara por que es privado

