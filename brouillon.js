$(document).ready(function(){
    $.ajax({
        url: "/https://api.instantwebtools.net/v1/airlines",
        method: "GET",
        dataType : "json",
        success: function(data){
            console.log("Ok", data);
        },
        error: function(err){
            console.log("ça plante",err);
        },
    })
    var parseJSON = function(data)
    {
        $(data).each(function(i){

        })
    }
    var createHTML = function(element){

    }

});