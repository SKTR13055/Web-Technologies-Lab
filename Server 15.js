var express = require('express');
var app = express();

app.get('/',function(req,res){
    console.log("Got a GET request from the homepage");
    res.send('Hello GET');
})

app.post('/',function(req,res){
    console.log("Got a POST request from the homepage");
    res.send('Hello POST');
})
app.route('/delete_user')
    .get(function(req,res){
        console.log("Got a GET request for /delete_user");
        res.send('Hello GET');
    })
    .delete(function(req,res){
        console.log("Got a DELETE request for /delete_user");
        res.send('Hello DELETE');
    })
app.get('/list_user',function(req,res){
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
})

app.get('/ab*cd',function(req,res){
    console.log("Got a GET reqquest for /ab*cd");
    res.send('Page Pattern Match');
})

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s",host,port);
})