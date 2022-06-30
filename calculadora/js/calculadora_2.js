
var crifra = "";
var acumulado = 0;
var sumar = false;
var restar = false;
var p_operacion = true;

function displayNumbers(number){
    document.getElementById("textfield").value=numero;
    cifra = document.getElementById("textfield").value;
}

function suma(){
    if (restar){
        acumulado = acumulado - parseInt(cifra);
        document.getElementById("textfield").value = acumulado;
    }
    else{
        acumulado = acumulado + parseInt(cifra);
        document.getElementById("textfield").value = acumulado;
    }

    cifra = "";
    sumar = true;
    restar = false;
    p_operacion = false;
}

function resta(){
    if(p_operacion == false){
        if (sumar){
            acumulado = acumulado + parseInt(cifra);
            document.getElementById("textfield").value = acumulado;
        }else{
            acumulado = acumulado - parseInt(cifra);
            document.getElementById("textfield").value = acumulado;
        }
        cifra = "";
        sumar = false;
        restar = true;
    }
    else{
        acumulado = parseInt(cifra);
        p_operacion = false;
    }

}

function resultado(){
    if(sumar){
        document.getElementById("textfield").value = acumulado;
    }
    else if (restar){
        document.getElementById("textfield").value = acumulado;
    }

    acumulado = parseInt(document.getElementById("textfield").value);
    cifra = 0;
}