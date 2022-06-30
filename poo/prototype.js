
function Person(name, lastname){
    this.name = name
    this.lastname = lastname
    this.displayName = function (){
        return `${this.name} ${this.lastname}`
    }
}

const john = new Person("John","Macmillan")
john.name = 'Joe'
console.log(john.displayName())

const mario = new Person("Maio", "Rosie")
mario.age = 30
console.log(mario.displayName())

john.greet = function() {
    return `Hello I'am ${this.name}`
}

// * Podemos modificar el constructor de tal manera que forma un prototipo
Person.prototype.greet = function() {
    return `Hello I'am ${this.name}`
}

console.log(john.greet())
console.log(mario.greet())

Person.prototype.age = 0

console.log(john.age)
console.log(mario.age)

// ? Tambien podemos modificar los contructores que ya vienen por defecto por el lenguaje.

const s = new String("Hello Word")
String.prototype.concatTest = function(){
    return this + 'Test'
}
console.log("My nombre es santiago vengo al ".concatTest())
console.log(s.concatTest())