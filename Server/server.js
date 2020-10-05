const express = require('express');
const app = express();
const langData = require('../lang.json');
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/language',(req,res) =>{
    const {lang} = req.query;
    const languages = Object.values(langData);
    const data = languages.find(el =>{
       return el.lang===lang
    })
    res.send(data);
});

app.listen(3000,function () {
    console.log('server start on port 3000')
})