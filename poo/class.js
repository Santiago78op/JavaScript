/*
* las funciones acceden a un contexto global mas grande
function Person() {
    this.name = ""
    this.lastname = ""
}

 */

// * sintactic sugar
class Person{
    constructor(name,lastname) {
        this.name = name
        this.lastname = lastname
    }
    greet(){
        return `${this.name}`
    }
}

const user = new Person('joe','ray')
const user2 = new Person('ryan','ray')

console.log(user.greet())
console.log(user2.greet())

// ? Funcion anonima
const Persona = class {
    constructor(name,lastname) {
    this.name = name
    this.lastname = lastname
    }
    greet(){
    return `${this.name}`
    }
}