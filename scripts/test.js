$(document).ready(function() {
    $("#test").click(function() {
        $(".wiki-image").fadeOut("fast");
        $(".wiki-search").fadeIn("slow");
    });
    $("#test3").click(function() {
        $(".wiki-image").fadeIn("slow");
        $(".wiki-search").fadeOut("fast");
    });
});