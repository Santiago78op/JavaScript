// ? es una forma de asociasion pero en los que un roll es mayor que otro
// ? como un agregate o un component

const company = {
    name: "tech",
    employees:[]
}

class Person{
    constructor(name,lastname) {
        this.name = name
        this.lastname = lastname
    }
}

const john = new Person('john','ray')
const maria = new Person('maria','perez')

company.employees.push(john)
company.employees.push(maria)

console.log(maria)
console.log(john)

console.log(company)