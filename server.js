var express=require('express');
var app=express();
var fs=require('fs');



app.get('/',function(req,res){
	fs.readFile("E:/abc.txt",'utf8',function(err,data){
		res.json(data);
		//console.log(data);
	})
})

app.get("/getProduct/:param1/:param2",function(req,res){
	res.json(req.params.param1*req.params.param2);
})

app.get("/nonRepeatingChar/:string",function(req,res){
	
    for (var i = 0; i < req.params.string.length; i++) {
        var c = req.params.string.charAt(i);
        if (req.params.string.indexOf(c) == i && req.params.string.indexOf(c, i + 1) == -1) {
             res.json(c) ;
        }
    }
     

})

app.get('/readAndWrite',function(req,res){
	fs.readFile("E:/abc.txt",'utf8',function(err,data){
		fs.writeFile('mynewfile2.txt', data, function (err, file) {
		  if (err) throw err;
		  //console.log('Saved!');
		  res.json("File written to disk");
		});
		
	})
})


app.listen(3001,function(){
	console.log("Server Listening on Port ",3001 );
	
})
