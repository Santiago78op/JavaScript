// ! Modificadores de acceso -> public, private

function Stacks() {
    this.items = [];
    this.push = function (item){
        this.items.push(item)
    }
}

const stacks = new Stacks()
stacks.push("Hola")
const stacks2 = new Stacks()
stacks2.push(1000)

console.log(stacks)
console0.log(stacks2)