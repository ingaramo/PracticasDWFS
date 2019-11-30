const  fs = require('file-system');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
let users = JSON.parse(fs.readFileSync('./users.json', 'utf8'));



router.get('/',(err,req,res,next)=>{
    let toSend = 'initialized'
    console.log('get')
    if(req.query.id != null){
        let index = users.map(e => e.id).indexOf(req.query.id);
        if(index != -1){
            toSend =JSON.stringify(users[index]);
            
        }
    }
    else{
        toSend = (JSON.stringify(users))
    }
    res.status(200).send(toSend)
});

router.post('/',(err,req,res,next)=>{
    let toSend = 'Initialized'
    let index = users.map(e => e.id).indexOf(req.body.id);
    if(index === -1){
        let newUsr = {
            id: req.body.id,
            name: req.body.name,
            age: req.body.age,
            phone: req.body.phone
        };
        users.push(newUsr);

        toSend = JSON.stringify( newUsr); 
    }
    else {
        toSend = 'Invalid ID'
        req.status(400)
    }
    res.status(201).send(toSend);
});

router.put('/',(err, req, res, next) => {
    let toSend = 'Initialized';
    let index = users.map(e => e.id).indexOf(req.body.id);
    if(index != -1){
        users[index]={
            id: req.body.id,
            name: req.body.name,
            age: req.body.age,
            phone: req.body.phone
        };
        toSend = JSON.stringify(users[index]);
    }
    else {
        toSend = 'Invalid ID';
        req.status(400)
    }
    req.send(toSend);
});

module.exports = router;