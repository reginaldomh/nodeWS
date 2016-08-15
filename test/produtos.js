var express = require('../config/express')();
var request = require('supertest')(express); 

describe('#ProdutosController',function(){

	beforeEach(function(done) {
        var connection = express.infra.connectionFactory();            
        connection.query("delete from livros", function(ex,result){
            if(!ex){
                done();
            }
        });
 	});

	it('#listagem json',function(done){

		request.get('/produtos')
		.set('Accept','application/json')
		.expect('content-type',/json/)
		.expect(200,done);

	});

/*
	it('#Cadastro produto incompleto',function(done){
		request.post('/produtos/salva')
		.send({titulo:'',descricao:'Produto Teste',preco:100})
		.expect(400,done);
	});

	it('#Cadastro produto completo',function(done){
		request.post('/produtos/salva')
		.send({titulo:'tituloTest',descricao:'Produto Teste',preco:100})
		.expect(302,done);
	});

*/
});