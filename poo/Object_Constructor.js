// ? Se llama al creador de objetos

const person = new Object()
console.log(person)

const number = new Object(64)
console.log(number)

const string = new Object("Hola mundo")
string.name = "special"
string.test = function (){
    return this + "test"
}

console.log(person)

// TODO: es la misma representacion
/*
const persona2 = {}
console.log(persona2.construct( === Object))
 */

const user = {
    name:"",
    lastname:"",
    age:0,
    showName(){
        return this.name
    }
}

console.log(Object.keys(user))
console0log(Object.values(user))