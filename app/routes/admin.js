// Marcos Lopes Gonçalves 5B

module.exports=function(app){  // exportando aplicação express iniciada no server.js
 /// função responsável de tratar a requisição, ou seja  quando o usuário solictar a página de inclusão noticia, ele ira entrar em contato com views para responder  
	app.get('/formulario_inclusao_noticia',function(req,res) {
		app.app.controllers.admin.formulario_inclusao_noticia(app,req,res);
		// esta acessando atraves da aplicação app , 
		// o controller no qual irá entrar no arquivo , 
		//retorando a função inclusão noticia que esta localizada na views
	});

	app.post('/noticias/salvar', function(req,res){ // metodo responsavel parar salvar noticia , alocando na tabela de banco de dados
		app.app.controllers.admin.noticias_salvar(app,req,res); // está acssando no controller na pagina 'admin' no qual retornara o função salvar noticia
	});
}
