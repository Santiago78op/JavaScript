// ? HERENCIA

function Person(){
    this.name = ''
    this.lastname = ''
}

function Programmer(){
    this.lenguage = ''
}

Programmer.prototype = new Person()

console.log(Programmer)
console.log(Person)

const person = new Person()
person.name = 'maria'
person.lastname = 'perez'
person.lenguage = 'java'
console.log(person)

const programmer = new Programmer()
programmer.name = 'santiago'
programmer.lastname = 'Barrera'
programmer.lenguage = 'javascript'
console.log(programmer)

