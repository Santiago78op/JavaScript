
function showFullName(){
    return this.name + " " + this.lastname
}

const user = {
    name:"Santi",
    lastname:"barrera",
    age:24,
    showFullName: showFullName
}

console.log(user.showFullName())

const account = {
    number: 487841689845,
    amount: 100,
    deposit(quantity){
        this.amount = this.amount + quantity
        console.log(this.amount)
    },
    withdraw(){
        this.amount = this.amount - 200
    }
}

account.deposit(100)
console.log(account.amount)
