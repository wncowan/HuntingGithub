$(document).ready(function(){
    $("#button1").click(function() {
        $.get("https://api.github.com/users/wncowan", function(data){
            console.log(data.name);
            var myName = data.name;
            $("body").append("<p>" + myName + "</p>");
        })
    });



});