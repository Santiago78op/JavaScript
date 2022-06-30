
class Person{
    constructor(name,lastname){
        this.name = name
        this.lastname = lastname
        this.age = null
    }
}

class Programmer extends Person{
    constructor(lenguage,name,lastname){
        super(name,lastname);
        this.lenguage = lenguage
    }
}

const person = new Person('maria','perez')
const programmer = new Programmer('python','maria','perez')