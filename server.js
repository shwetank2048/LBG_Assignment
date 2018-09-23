var express=require('express');
var app=express();
var fs=require('fs');
// var fileName=require('./file/readFile.txt');
// console.log(file)
var path = require('path');
var jsonPath = path.join(__dirname, 'file');
console.log(jsonPath	)

app.get('/',function(req,res){
	fs.readFile(jsonPath+'\\/readFile.txt','utf8',function(err,data){
		if(err){
			res.status(401).send({ error: "Error in reading File" ,description: err});}
		res.status(200).send({content: data});
		//console.log(data);
	})
})

app.get("/getProduct/:param1/:param2",function(req,res){
	
	res.status(200).send({product:req.params.param1*req.params.param2});
})

app.get("/nonRepeatingChar/:string",function(req,res){
	var flag=false;
	
    for (var i = 0; i < req.params.string.length; i++) {
        var c = req.params.string.charAt(i);
        if (req.params.string.indexOf(c) == i && req.params.string.indexOf(c, i + 1) == -1) {
			flag=true;
			break;
		}
    }
	if(flag)
		res.status(200).send({character:c});
	else
		res.status(401).send({message:"All same or null string"})

})

app.get('/readAndWrite',function(req,res){
	fs.readFile('./file/readFile.txt','utf8',function(err,data){
		fs.writeFile( './file/writeFile.txt', data, function (err, file) {
		  if (err) 
			  res.status(401).send({ error: "Error in writing File" ,description: err});
		  //console.log('Saved!');
		  res.status(200).send({message:"File written to disk"});
		});
		
	})
})


app.listen(3001,function(){
	console.log("Server Listening on Port ",3001 );
	
})

module.exports=app;