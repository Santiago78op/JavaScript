var imagenes = document.querySelectorAll('#carrete img');
// solo a las que tiene el #carrete pero solo las img
for (var i=0;i<imagenes.length;i++){
    imagenes[i].style.visibility = "hidden";
}

// chained functions
var anuncio = document.getElementById("anuncio");
anuncio.style.width = "500px";
anuncio.style.height = "500px";
anuncio.innerHTML = "¡Vende!";

//  Funciones JQuery
$(document).ready(function(){
    let z=document.getElementById("cerrar");

    z.addEventListener('click', cerrar_banner,false);

});

function cerrar_banner() {
    $("#banner").remove();
}

// Funcion en otra forma
$(document).ready(function(){
    /* let z=document.getElementById("cerrar");

     z.addEventListener('click', cerrar_banner,false);*/
    document.getElementById("cerrar").addEventListener('click', cerrar_banner,false);
});

function cerrar_banner() {
    $("#banner").remove();
}


// Funcion Jquery

addClass("") // agregar un estilo de clase
toggleClass("") // dota a un elemento de la pagino con el estilo on/of
removeClass("") // Quitar un estilo de clase