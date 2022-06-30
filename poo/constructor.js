const user1 = {
    name:"Santi",
    lastname:"barrera",
    age:24,
    showFullName(){
        return `${this.name} ${this.lastname}`
    }
}

//* Constructor
function Person(){
    this.name = ""
    this.lastname = ""
    this.age = 0
    this.showFullName = function(){
        return `${this.name} ${this.lastname}`
    }
}
// new para crear el constructor
const user2 = new Person()
user2.name = "Joe"
user2.lastname = "Macmilan"
user2.age = 30
console.log(user2.showFullName())