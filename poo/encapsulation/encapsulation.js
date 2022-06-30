
//* El puede alterar las propiedades
/*
const company = {
    name:"tech",
    employees: [],
    sortEmployees:function (){}
}
 */

//* Puedo sobre escribir las funciones
//company.sortEmployees = 'asdadjhfskjf'

function Company(name){
    // variable tipica
    let employees = []
    this.name = name

    this.getEmployees = function (){
        return employees
    }
    this.addEmployee = function(employee){
        employees.push(employee)
    }
}

const company = new Company("Coca cola")
console.log(company)
company.addEmployee({name:'joe'})
console.log(company.getEmployees())



