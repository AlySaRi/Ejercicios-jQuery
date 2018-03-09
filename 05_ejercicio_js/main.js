$(document).ready(function() {
    $("#carrete").hide()
});

$(document).on("click", function() {
    $("#carrete").show();
    $("h1").hide();
    });

$("#carrete img").on("mouseover", function() {
    $(this).attr("width", "300px");
});

$("#carrete img").on("mouseout", function() {
    $(this).attr("width", "250px");
});

