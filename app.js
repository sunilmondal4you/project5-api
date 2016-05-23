var express= require("express");
var bodyParser = require('body-parser');

var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/a/b',function(req,res) {
    res.send("Hello TDD.");
});

app.get('/a/b/c',function(req,res) {
    var firstname=req.query.firstname;
    var lastname=req.query.lastname;
    res.send("Your fullname is "+firstname+" "+lastname);
});

app.get('/a/b/b',function(req,res) {
    var user={name:req.query.name};
    res.send(user);
});

app.listen(3000,function () {
    console.log("Server 00 started");
});