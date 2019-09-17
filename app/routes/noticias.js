// Marcos Lopes Gonçalves 5B

// metodo responsavel pelas interações da página noticias.

module.exports=function(app){ // exportando aplicação express iniciada no server.js
	app.get('/noticias', function(req,res){
		app.app.controllers.noticias.noticias(app,req,res);
		// metodo responsavel  de mostrar todas as noticias terminanda pelo busca da views que será solicitada pelo controller
	});
	app.get('/noticia', function(req,res){
			app.app.controllers.noticias.noticia(app,req,res);
				// metodo responsavel  de mostrar uma unica noticia clicada pelo usuário sendo terminanda pelo busca da views que será solicitada pelo controller
	});
	app.post('/busca',function(req,res){
		app.app.controllers.noticias.busca(app,req,res);
		// metodo responsavel pela busca de alguma noticia especifica , aonde será passado pelo controller e modelo ira fazer a busca 
	});
	app.get('/excluir', function(req, res){
		app.app.controllers.noticias.excluir(app,req,res);
		// metodo reponsavel de excluir um noticia ,  aonde será passado pelo controller e modelo ira fazer a busca e exclusão
	});
};
