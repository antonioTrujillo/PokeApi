$(document).ready(function(){ 
$("#button").on("click",function(event){ 
    event.preventDefault()
        var inputValue = $("#input").val();
        var request = $.get("http://pokeapi.co/api/v2/pokemon/" + inputValue)
            function onsuccess (poke){ 
                    $("#name").text(poke.name);
                    $(".NumPokedex").text("0"+inputValue)
                    $(".type").empty();
                     poke.types.forEach(function(type) {
                    $(".type").append(type.type.name);
                });
            };
        request.done(onsuccess);   

        var request2 = $.get("http://pokeapi.co/api/v2/pokemon-species/" + inputValue) 
            function descript (poki){ 
                $(".description").text(poki.flavor_text_entries[3].flavor_text);
            };        
            request2.done(descript);

        var request3 = $.get("http://pokeapi.co/api/v2/type/"+ inputValue)
            function elements (elem){ 
                elem.pokemon.forEach()
            }
});
});

