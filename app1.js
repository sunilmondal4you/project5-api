var express= require("express");
var bodyParser = require('body-parser');

var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/a/b/c',function(req,res) {
    res.send(req.body);
});

app.post('/a/d',function(req,res) {
    var name=req.body.name;
    res.send(name);
});

app.listen(3001,function () {
    console.log("Server 01 sterted");
});