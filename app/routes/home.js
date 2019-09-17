// Marcos Lopes Gonçalves 5B

module.exports= function(app){  // exportando aplicação express iniciada no server.js

	// metodo responsavel para retorna a pagina inicial do portal de noticia, como tambem , e responsavel pela requisão e resposta

	app.get('/', function(req,res){
		app.app.controllers.home.index(app,req,res); // retorna o arquivo index.ejs que esta localizado na views

	});
}
