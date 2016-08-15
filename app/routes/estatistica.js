
module.exports = function(app) {
	
	app.get('/estatisticas', function (req,res,next){
		console.log("aqui");
		var estatisticaDAO = new app.infra.EstatisticaDAO();

		estatisticaDAO.lista(function(error, result ){

			if(error){
				console.log(error);
				next(error);
			}

			res.format({
				json : function(){
					res.json(result);
				} ,

				html :  function(){
					res.json(result);
				}
			});
			
		} );

	} );

	app.post('/estatisticas/salva', function (req,res,next){
		var estatistica = req.body;

		var estatisticaDAO = new app.infra.EstatisticaDAO();
		if(Array.isArray(estatistica)){

			estatisticaDAO.salvaTodos(estatistica,function(err){
				console.log('Callback')
				if(err){
					res.status(500).send({error:'DB Error '});
				}
				res.status(201).send();
			})
		}else{
			estatisticaDAO.salva(estatistica,function(err){
				console.log('Callback')
				if(err){
					res.status(500).send({error:'DB Error '});
				}
				res.status(201).send();
			})
		}
	});
}
