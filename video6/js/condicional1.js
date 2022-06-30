/*
* var precioCoche = 60000;
* var dineroAhorado = 15000;


* if ( dineroAhorado >= precioCoche){
*    alert("Te puedes comprar el cohce");
* }
* else if (dineroAhorado == 0){
*    alert("tu no tienes dinero");
* }
* else {
*    alert("No te puedes comprar el coche");
* }
 */


var precioCoche = 60000;
var dineroAhorado = prompt("Introduce cuánto tienes ahorrado");

var loteria = prompt("Te ha tocado la loteria??");

if (dineroAhorado >= precioCoche || loteria == "si"){
    alert("Puedes comprar el coche");
}
else{
    alert("No puedes comprar el coche. No tienes suficiente ahorros");
}

