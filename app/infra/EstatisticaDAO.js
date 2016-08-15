
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var collectionName = 'restaurants';


function EstatisticaDAO(){

}

EstatisticaDAO.prototype.lista = function (callback){
	console.log('Listando Estatisticas');
	MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
		var cursor = db.collection('restaurants').find().toArray(function (err,itens){
			db.close();
			console.log(itens.length+' item(s) encontrado(s)');
			callback(err,itens);

		});
	});
}

EstatisticaDAO.prototype.salva = function (estatistica,callback){
	
	MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
		db.collection('restaurants').insert(estatistica);
		db.close();
		console.log('Documento criado.')
		callback(err);
	});

}

EstatisticaDAO.prototype.salvaTodos = function (estatistica,callback){
	
	MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
		db.collection('restaurants').insertMany(estatistica);
		db.close();
		console.log('Documentos criados.')
		callback(err);
	});

}

module.exports = function(){ 
	return EstatisticaDAO;
};


