const  fs = require('file-system');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const UsrRoute = require('./user.js');

app.use(bodyParser.json());
app.use('/usuarios', UsrRoute);
app.listen(8080, function(){
    console.log('escuchando');
});

module.exports = app;