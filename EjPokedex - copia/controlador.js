let controlador = {
    xhttp : new XMLHttpRequest(),
    pokemon : new modelo.Pokemon(),
    
    buscarPokemon : function (nombre){
           

/*
           controlador.xhttp.open('GET',`https://pokeapi.co/api/v2/pokemon/${nombre}`);
           controlador.xhttp.onreadystatechange = function(){
                if(this.readyState==4){
                    if(this.status==200){
                        let obj = JSON.parse(this.responseText)
                        controlador.pokemon.nombre = obj.name
                        controlador.pokemon.peso =  obj.weight
                        controlador.pokemon.altura = obj.height
                        controlador.pokemon.id = obj.id   
                        controlador.pokemon.imagenes.push( obj.sprites.back_default);
                        controlador.pokemon.imagenes.push( obj.sprites.front_default);
                        
                        callback(controlador.pokemon);
                        
                    }
                    else if (this.status == 404){
                       alert('noo');
                    }    
                }
            }
            controlador.xhttp.send();*/
    },
    getPokemon : function(nombre, mostrarPokemon){
    
        fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .then(function(respuesta){
            return respuesta.json()
        })
        .then(function(respuesta){
            console.log(respuesta)
//hacerlo con getter y setter del modelo para cargar el json completo
            controlador.pokemon = new modelo.Pokemon (respuesta)
            mostrarPokemon(controlador.pokemon)
            })
    }

    

    
};