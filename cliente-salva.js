	var produto = {
		titulo: 'cliente-salva',
		preco: 99,
		descricao : 'bla bkla bla'
	}

	var http = require('http');

	var config = {
		hostname:'localhost',
		port:3000,
		path:'/produtos/salva',
		method : 'post',
		headers:{
			Accept:'application/json',
			'Content-type' : 'application/json'
		}
	};

	var request = http.request(config,function(res){
		console.log(res.statusCode);
		res.on('data',function(body){
			console.log(''+body);
		})

	});

	request.end(JSON.stringify( produto));




