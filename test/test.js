var mocha =require('mocha');
var chai=require('chai')
var server=require('../server.js')
var chaiHttp=require('chai-http')
let should = chai.should();

chai.use(chaiHttp);

describe('Unit Test Cases...',function(){
	it('Should read File',function(){
		  chai.request(server)
            .get('/')
            .end((err, res) => {
                  res.should.have.status(200);
                 
            });
	});
	it('Should multiply numbers',function(){
		  chai.request(server)
            .get('/getProduct/18/9')
            .end((err, res) => {
                  res.should.have.status(200);
                
            });
	});
	it('Should find first non repeating character numbers',function(){
		  chai.request(server)
            .get('/nonRepeatingChar/geeksforgeeks')
            .end((err, res) => {
                  res.should.have.status(200);
                  
            });
	});
	it('Should write file ',function(){
		  chai.request(server)
            .get('/readAndWrite')
            .end((err, res) => {
                  res.should.have.status(200);
                  
            });
	});
})

describe('Negative Unit Tests...',function(){
	it('Should find first non repeating char in empty string',function(){
		  chai.request(server)
            .get('/nonRepeatingChar/""')
            .end((err, res) => {
                  res.should.have.status(401);
                  
            });
	});
	it('Should find first non repeating char for same character string',function(){
		  chai.request(server)
            .get('/nonRepeatingChar/aaaaaaaa')
            .end((err, res) => {
                  res.should.have.status(401);
                  
            });
	});
})