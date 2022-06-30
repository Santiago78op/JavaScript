/*
*function nombre_funcion(){
*    codigo a ejecutar por la funcion
*}
*
* En otro punto de la pagina web llamamos a la funcion
*nombre_funcion();
*
* sin paramatro y argumentos
*   function dia(){
*        var hoy = new Date();
*
*       document.write(hoy.toDateString());
*    }
 */

// ? Funcion con parametros
/*
? funcion con parametros
? function suma (num1,num2){
?    var resultado = num1 + num2;
? }

? suma(5,7);

function writeName(nombre){
    document.write(nombre);
}

var nombre = "Santiago "

<p style="font-size:24px; font-weight:bold;">Hola: <script>writeName(nombre);</script>Bienvenido a mi página web</p>
 */

// Todo: Calculadora(arcaica)

/*
var repetir = "si";

function sum(num1,num2){
    let total = num1 + num2;
    return total
}
function rest(num1,num2){
    let total = num1 - num2;
    return total
}
function multiplication(num1,num2){
    let total = num1 * num2;
    return total
}
function divition(num1,num2){
    let total = num1 / num2;
    return total
}

do {
    var operation = prompt("¿Qué operacion quieres realizar?");
    var operador1 = parseInt(prompt("Intirduce el primer numero"));
    var operador2 = parseInt(prompt("Intirduce el segundo numero"));

    if (operation == 'sumar'){
        alert(sum(operador1,operador2));
    }
    else if (operation == 'restar'){
        alert(rest(operador1,operador2));
    }
    else if (operation == 'multiplicar'){
        alert(multiplication(operador1,operador2));
    }
    else if (operation == 'dividir'){
        alert(divition(operador1,operador2));
    }
    else{
        alert("No tengo esta Operacion");
    }

    repetir = prompt("Deseas hacer otro calculo");
    repetir = repetir.toLowerCase()
}while(repetir=="si");

 */