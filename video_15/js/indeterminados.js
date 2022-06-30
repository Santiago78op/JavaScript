/*
* While (condicion){
* codigo a repetir mientras el bucle sea cierto
* }
*/

/*
var meses = ["Enero","Febrero","Marzo","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

var contador = 0;

while(contador < meses.length){
    document.write(meses[contador] + "<br/>");
    contador++;
}

? ejemplo 2 While
var nombre, edad, poblacion;

nombre = prompt("Introduce tu Nombre: ", "Nombre");
while (!isNaN(nombre)) {
    nombre = prompt("Introduce tu Nombre: ");
}

edad = prompt("Introduce tu Edad: ");
while (edad <= 0 || edad >= 105 || isNaN(edad) ){
    edad = prompt("Introduce una edad válida: ");
}

poblacion = prompt("Introduce poblacion: ");
while (!isNaN(poblacion)) {
    poblacion = prompt("Introduce poblacion: ");
}
*/

/*
*Do{
*   * codigo a repetir mientras el bucle sea cierto
* }
* While (condicion);
*/

/*
var nombre, edad, poblacion;

do{
    nombre = prompt("Introduce tu Nombre: ", "Nombre");
} while (!isNaN(nombre)) ;

do {
    edad = prompt("Introduce tu Edad: ");
} while (edad <= 0 || edad >= 105 || isNaN(edad) );

do {
    poblacion = prompt("Introduce poblacion: ");
}while (!isNaN(poblacion));

? ejemplo 2 While
// Math.random() devuelve numeros aleatorios entre 0 y 1.

var aleatorio = Math.round(Math.random()*100);
var minum, intentos;

minum = 0;
intentos = 0;

do {
    minum = prompt("Introduce un n° entre y 100: ");
    if(aleatorio>minum){
        alert("El número es mas alto");
    }
    if(aleatorio<minum){
        alert("El número es mas bajo");
    }
}while(aleatorio!=minum);

alert("CORRECTO")
 */