var express = require('../config/express')();
var request = require('supertest')(express); 

describe('#EstatisticaController',function(){


	it('#listagem json',function(done){

		var dao = new EstatisticaDAO();

		console.log('loading');

		dao.lista(function(err,itens){
			console.log('callback');
			console.log(itens);
		});
	}
}
