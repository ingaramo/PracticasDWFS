const express = require ('express');
const fs = require ('file-system')
const app = express();
const bodyParser = require ('body-parser')
usuarios = JSON.parse (fs.readFileSync('usuarios.json', 'utf8'))

app.use(bodyParser.json());
function validarRequest(res){
    if (typeof(res.body.id)==='number'&&
        typeof(res.body.edad)==='number' &&  
        typeof(res.body.nombre) === 'string'&&
        typeof(res.body.apellido) === 'string' &&
        typeof(res.body.email) === 'string'){
            console.log (typeof(res.body.id), typeof(res.body.edad), typeof(res.body.nombre), typeof(res.body.apellido), typeof(res.body.email))
            return true
        }
    return false
}
app.listen (8080, function (){
    console.log('welcome to the jungle!')
});

app.get('/lacucaracha', function(req,res){
    res.status(200).send(JSON.stringify(usuarios));
});

app.put('/lacucaracha', function(req,res){
    if(validarRequest(req)){
        let newId= req.body.id;
        let index = usuarios.map(e=>e.id).indexOf(newId);
        if(index != -1){
            usuarios[index]= req.body
            fs.writeFileSync('usuarios.json',JSON.stringify(usuarios))
            res.send('USUARIO MODIFICADO')
        }
        else{
            res.send('USUARIO INEXISTENTE, IMPOSIBLE MODIFICAR')
        }
    }
    else {
        res.status(400).send('error en usuario enviado')
    }
});
app.delete('/lacucaracha', function(req,res){
    if(validarRequest(req)){
        
        let newId= req.body.id;
        let index = usuarios.map(e=>e.id).indexOf(newId);
        if(index != -1){
            usuarios.splice(index, 1);
            fs.writeFileSync('usuarios.json',JSON.stringify(usuarios))
            res.send('USUARIO MODIFICADO')
        }
        else{
            res.send('USUARIO INEXISTENTE, IMPOSIBLE MODIFICAR')
        }
    }
    else {
        res.status(400).send('error en usuario enviado')
    }
    
});

app.post('/lacucaracha',function (req,res){
    if(validarRequest(req)){
        res.send('hola '+ req.body.nombre);
        usuarios.push(req.body);
        fs.writeFileSync('usuarios.json',JSON.stringify(usuarios))
        
    }
    else {
        res.status(400).send('error en usuario enviado')
    }
});
module.exports  = app
