/**
 * Created by abc on 23/05/2016.
 */
var express= require("express");
var bodyParser = require('body-parser');

var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/a/b/c/:name/:email/:grade',function(req,res) {
    var name=req.params.name;
    var email=req.params.email;
    var grade=req.params.grade;
    res.send("Hello "+name+" your email is "+email+" your grade is "+grade);
});

app.listen(3003,function () {
    console.log("server 03 is started");
});