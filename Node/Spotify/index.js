const express = require('express');
const router = express();
const bodyParser = require('body-parser')
let songs = [
    {
        id : "1",
        nombre: "gasolina"
    },
    {
        id : "2",
        nombre: "la camisa negra",
        disco: "Ni la menor idea",
        artista: "Juanes",
        duracion: 180

    }
]

router.use(bodyParser.json());
let usuario = {};

router.listen(8080, function(){
    console.log('escuchando');
});

router.post('/login',function(req, res, next){
    usuario = req.body;
    res.send('usuario logueado');
});

router.delete('/login', function(req, res, next){
    if(req.body.email === usuario.email & req.body.password === usuario.password){
        usuario = {};
                res.send('usuario deslogueado')
    }else{
        res.send('usuario NO LOGEADO');
    };
});


router.get('/songs',function(req, res){
    if(req.query.search != null ){
        let index = songs.map(e => e.nombre).indexOf(req.query.search)
        if(index != -1){
            res.send(songs[index]);
            return
        }
    }
    res.send('cancion no encontrada');
});

router.get('/songs/:id',function(req, res){
    console.log(req.params.id); 
    console.log(usuario.id); 
    if(req.params.id === usuario.id){
        console.log(req.params.id); 
        console.log(usuario.id); 
        res.send(songs[1]);
        return
    };
    res.send('usuario no logeado')
});