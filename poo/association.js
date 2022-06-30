class Person{
    constructor(name,lastname) {
        this.name = name
        this.lastname = lastname
    }
}

const john = new Person('john','ray')
const maria = new Person('maria','perez')

// * asociamos a john a maria -> lo cual es una relacion podira ser una red social
maria.parent = john

console.log(maria)
console.log(john)