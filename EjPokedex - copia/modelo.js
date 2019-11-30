const modelo = {
    Pokemon: function(json){
        if(json==undefined){
            this.nombre ='' ,
            this.peso = '',
            this.altura = '',
            this.imagenes =[],
            this.id = ''
        }else {
            this.nombre = json.name
            this.peso = json.weight
            this.altura = json.height
            this.id = json.id
            this.imagenes = [ json.sprites.back_default, json.sprites.front_default ] 
        }

    }
}