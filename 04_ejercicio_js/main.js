$("document").ready(function() {
    $("#anuncio").text("¡CLICK! para cambiar de color")
    .hide()
    .fadeIn(3000);
});

$("#anuncio").css("height", "500px");
$("#anuncio").css("width", "500px");


let colores = ["blue", "yellow", "red", "grey", "green", "orange", "purple"]

function color() {
    return colores[Math.floor(Math.random() * colores.length)];
};

$("#anuncio").on("click", function() {
    $("#anuncio").css("background-color", color());
}); 








