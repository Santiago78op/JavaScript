class Person{
    constructor(name,lastname) {
        this.name = name
        this.lastname = lastname
    }
}

class Programmer extends Persona {
    constructor(lenguage) {
        super();
        this.lenguage = lenguage
    }
}

const john = new Person('santy','barrera')
const emilio = new Programmer('javascript','emilio','ross')

console.log(john)
console.log(emilio)

function writeFullName(p){
    console.log(p.name + " " + p.lastname)
}

writeFullName(john)
writeFullName(emilio)