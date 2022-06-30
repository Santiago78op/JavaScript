// ? La capacidad que tienen algunos objetos para poder manipular distintos tipos de datos de manera uniforme

//! la sobre carga y el polimorfismo parametrico y polimorfismo esclusivo

// TODO: Sobre Carga

function countItems(x){
    return x.toString().length
}

console.log(countItems(10000))
console.log(countItems('hola como estas'))

function  Sum(x=0,y=0,z=0){
    return x + y + z
}

console.log(Sum(10,20))
console.log(Sum(10,20,30))