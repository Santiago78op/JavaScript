var cifra = "";
var acumulado = 0;
var contenedor = 0;
var estado = false;
var operacion = ''

function displayNumbers(number){
    document.getElementById("textfield").value=cifra+number;
    cifra = document.getElementById("textfield").value; // -> 123
    contenedor = parseFloat(cifra)
}

function operator(operator){
    sumar(operator);
    restar(operator);
    multilicar(operator);
    dividir(operator);
}

function result(){
    if (operacion == 'suma'){
        acumulado = acumulado + parseFloat(contenedor);
        operacion = ''
        document.getElementById("textfield").value = acumulado;
        contenedor = 0;
        estado = true
    }
    else if (operacion == 'restar'){
        acumulado = acumulado - parseFloat(contenedor);
        document.getElementById("textfield").value = acumulado;
        operacion = ''
        contenedor = 0;
        estado = true
    }
    else if (operacion == 'multilicar'){
        acumulado = acumulado * parseFloat(contenedor);
        operacion = ''
        document.getElementById("textfield").value = acumulado;
        contenedor = 0;
        estado = true
    }
    else if (operacion == 'dividir'){
        acumulado = acumulado / parseFloat(contenedor);
        operacion = ''
        document.getElementById("textfield").value = acumulado;
        contenedor = 0;
        estado = true
    }
}

function sumar(operator){
    if (operator==='+' && estado == false){
        acumulado = acumulado + parseFloat(cifra);
        cifra = "";
        operacion = 'suma'
    }
    else if (operator==='+' && estado == true){
        acumulado = acumulado + 0;
        cifra = "";
        estado = false
        operacion = 'suma'
    }
}

function restar(operator){
    if (operator==='-' && estado == false){
        if (acumulado == 0){
            acumulado = parseFloat(cifra) - acumulado;
            cifra = "";
            operacion = 'restar'
        }else {
            acumulado = acumulado - parseFloat(cifra);
            cifra = "";
            operacion = 'restar'
        }
    }
    else if (operator==='-' && estado == true){
        acumulado = acumulado + 0;
        cifra = "";
        estado = false
        operacion = 'restar'
    }
}

function multilicar(operator){
    if (operator==='*' && estado == false){
        if (acumulado == 0){
            acumulado = 1 * parseFloat(cifra);
            cifra = "";
            operacion = 'multilicar'
        }else {
            acumulado = acumulado * parseFloat(cifra);
            cifra = "";
            operacion = 'multilicar'
        }
    }
    else if (operator==='*' && estado == true){
        acumulado = acumulado + 0;
        cifra = "";
        estado = false
        operacion = 'multilicar'
    }
}

function dividir(operator){
    if (operator==='/' && estado == false){
        if (acumulado == 0){
            acumulado =  parseFloat(cifra) / 1;
            cifra = "";
            operacion = 'dividir'
        }else {
            acumulado = acumulado / parseFloat(cifra);
            cifra = "";
            operacion = 'dividir'
        }
    }
    else if (operator==='/' && estado == true){
        acumulado = acumulado + 0;
        cifra = "";
        estado = false
        operacion = 'dividir'
    }
}

function erracer(){
    cifra = "";
    acumulado = 0;
    contenedor = 0;
    estado = false;
    operacion = ''
}

