function buildUrl(pattern) {
    var base_url = "https://en.wikipedia.org/w/api.php";
    var format = "&format=json";
    var request_url = "?action=query&format=json&list=search&srsearch=";
    var url = base_url + request_url + pattern;
    return url;
}
$(document).ready(function() {
    $("#test").click(function() {
        $(".wiki-image").fadeOut("fast");
        $(".wiki-search").fadeIn("slow");
    });

    $(".search-test").click(function() {
        var test2 = $("#test2").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + test2 + "&format=json&callback=?";

        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function(data) {
                $("#output").html("");
                for (var i = 0; i < data[1].length; i++) {
                    $("#output").prepend("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p><li>");
                }

            },
            error: function(errorMessage) {
                alert("FUCK");
            }

        });

    });

    $("#test3").click(function() {
        $(".wiki-image").fadeIn("slow");
        $(".wiki-search").fadeOut("fast");
    });
});