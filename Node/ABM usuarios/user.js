const  fs = require('file-system');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
let usuarios = fs.readFileSync('./usuarios,json')
router.get('/',(req, res, next)=> {
    res.status()
})