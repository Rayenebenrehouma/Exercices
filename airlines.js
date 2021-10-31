$(document).ready(function(){
    $.ajax({
        url: "https://api.instantwebtools.net/v1/airlines",
        method: "GET",
        dataType : "json",
        success: function(data){
            var parseJSON = data.map(function(listfly)
            {
                var listed = "<tr><td>" + listfly.name + "</td><td>" + listfly.country + "</td><td>" + listfly.logo + "</td><td>" + listfly.slogan + "</td><td>" + listfly.head_quaters + "</td><td>" + listfly.website + "</td><td>" + listfly.established + "</td><td>";
                $("table tbody").append(listed);
            })
            console.log(parseJSON);
        },
        error: function(err){
            console.log("ça plante",err);
        },
    })
});
