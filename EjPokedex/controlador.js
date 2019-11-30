let controlador = {
    xhttp : new XMLHttpRequest(),
    pokemon : new modelo.Pokemon(),
    
    getPokemon : function (nombre,callback){
           controlador.xhttp.open('GET',`https://pokeapi.co/api/v2/pokemon/${nombre}`);
           controlador.xhttp.onreadystatechange = function(){
                if(this.readyState==4){
                    if(this.status==200){
                        let obj = JSON.parse(this.responseText)
                        controlador.pokemon.nombre = obj.name
                        controlador.pokemon.peso =  obj.weight
                        controlador.pokemon.altura = obj.height
                        controlador.pokemon.id = obj.id   
                        controlador.pokemon.imagenes[0]= ( obj.sprites.back_default);
                        controlador.pokemon.imagenes[1]= ( obj.sprites.front_default);
                        
                        callback(controlador.pokemon);
                        
                    }
                    else if (this.status == 404){
                       alert('noo');
                    }    
                }
            }
            controlador.xhttp.send();
    },
    

    
};