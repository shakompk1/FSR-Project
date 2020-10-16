const express = require('express');
const app = express();
const path =require('path');
const nodemailer = require('nodemailer');
const langData = require('../lang.json');
const bodyParser = require("body-parser");
const PORT = 5500;
const cors = require("cors");


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.post('/feedback', function (req, res) {
    const data=req.body;
    const senderInfo = `
        <table style="width:50%">
          <tr style="border: 1px solid black;">
            <td style="border: 1px solid black;">Name</td>
            <td style="border: 1px solid black;">${data.senderName}</td>
          </tr>
          <tr style="border: 1px solid black;">
            <td style="border: 1px solid black;">Email</td>
            <td style="border: 1px solid black;">${data.senderMail}</td>
          </tr>
          <tr style="border: 1px solid black;">
            <td style="border: 1px solid black;">Mobile</td>
            <td style="border: 1px solid black;">${data.senderMobile}</td>
          </tr>
        </table>
        <textarea cols="30" rows="10" readonly style="border: 1px solid black; resize: none; width: 48%;">${data.comment}</textarea>`;

    const transporter = nodemailer.createTransport({
        service:"Gmail",
        auth:{
            user:"asabali95@gmail.com",
            pass:"ndsowzlevmzzpbho"
        }
    });
    const mailOptions = {
        from:data.senderMail,
        to:"asabali95@gmail.com",
        subject:"test",
        text:`Test`,
        html:senderInfo

    }
    transporter.sendMail(mailOptions,function (err,info) {
        if(err){
            console.log(err)
        }
        else{
            console.log("Email sent:" + info.response);
        }
    })
});

app.get('/language',(req,res) =>{
    const {lang} = req.query;
    const languages = Object.values(langData);
    const data = languages.find(el =>{
       return el.lang===lang
    })
    res.send(data);
});

app.use(express.static(path.join(__dirname, "../")));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../index.htm'))
});

app.listen(PORT,function () {
    console.log(`server start on port ${PORT}`)
})