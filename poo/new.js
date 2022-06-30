
function Person(){
    //"user strict"
    this.name = ""
    this.lastname = ""
}

const person = new Person()
console.log(person)
/*
! sin la palabra new es tan solo la ejecucion de una funcion y no el Objeto
 */

const mankind = {
    Person: function (){
        //"user strict"
        this.name = ""
        this.lastname = ""
    }
}

const person = new mankind.Person()
console.log(person)