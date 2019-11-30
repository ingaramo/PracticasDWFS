//promises 
let vista={
    input : document.getElementById('input'),
    imagen1 : document.getElementById('imagen1'),
    imagen2 : document.getElementById('imagen2'),
    nombre : document.getElementById('nombre'),
    peso : document.getElementById('peso'),
    altura : document.getElementById('altura'), 
    id : document.getElementById('id'),
    botonBuscar : document.getElementById('buscar'),

    init: function(){
        this.botonBuscar.addEventListener('click', function(){
            controlador.getPokemon(input.value, vista.mostrarPokemon );
        })
    },

    mostrarPokemon : function (pokemon){
        this.imagen1.setAttribute('src', `${pokemon.imagenes[1]}`);
        this.imagen2.setAttribute('src', `${pokemon.imagenes[0]}`);
        this.nombre.innerHTML ='Nombre: '+pokemon.nombre
        this.peso.innerHTML ='Peso: '+ pokemon.peso
        this.altura.innerHTML = 'Altura:'+pokemon.altura
        this.id.innerHTML = 'Id:'+pokemon.id   
        
        
    }
    

};
vista.init()