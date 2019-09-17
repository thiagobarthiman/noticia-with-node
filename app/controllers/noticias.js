// Marcos Lopes Gonçalves 5B

module.exports.noticias=function(app,req,res){
	var connection = app.config.dbConnection(); //  está recebendo a o metodo conexão , puxando da pasta config
	var noticiasModel = new app.app.models.NoticiasDAO(connection); // iniciando  a conexão com banco de dados , puxando da classe NoticiasDAO passando como parametro a conexão 


	noticiasModel.getNoticias(function(error,result){ // mostrar todos as noticias
		res.render("noticias/noticias",{noticias:result}); // retorna todas as noticias , buscado pela classe modelo 
	});
}

module.exports.noticia=function(app,req,res){ // metodo responsavel para bsuca uma unica noticia

	var connection = app.config.dbConnection(); //  está recebendo a o metodo conexão , puxando da pasta config
	var noticiasModel = new app.app.models.NoticiasDAO(connection); // iniciando  a conexão com banco de dados , puxando da classe NoticiasDAO passando como parametro a conexão 


	if (req.query.id_noticia) {  // verifica se algum  tipo de id na variavel
		var id_noticia=req.query; // recebe o id clicado pelo usuário
	} else {
		res.redirect("/noticias") // redireciona para pagina noticias , mostrando todas as noticias
		return;
	}

	noticiasModel.getNoticia(id_noticia,function(error,result){ // realizar a busca por essa noticia , solicitada pelo usuario para validação
		res.render("noticias/noticia",{noticia:result});
		// responde com noticia encontrada;
	});
}
module.exports.busca=function(app, req, res) {
		var pesquisa= req.body.pesquisa; // pegar texto digitado com bodyparse
		var connection = app.config.dbConnection(); //  está recebendo a o metodo conexão , puxando da pasta config
   		var noticiasModel = new app.app.models.NoticiasDAO(connection); // iniciando  a conexão com banco de dados , puxando da classe NoticiasDAO passando como parametro a conexão 


		noticiasModel.buscaNoticias(pesquisa,function(erro,result){//executando metodo, passando parametro para realizar  pesquisa de uma terminada noticia 
			res.render('noticias/noticias',{noticias:result});
			// retorna noticias especificas
		});
}
module.exports.excluir=function(app,req,res){//exporta a exlusão da noticia selecionada
	var pesquisa= req.body.pesquisa;// variavel que recebe as informações do body-parse
	var connection= app.config.dbConnection();//realizando a conexão com o banco
	var noticiasModel=new app.app.models.NoticiasDAO(connection);//inicializa as pesquisar do mysql

	if (req.query.id_noticia) { //  verificar se o campo não vazio
		var id_noticia=req.query; //variavel id_noticia esta recebendo id da noticia solicitado pelo usuario
	}else{
		res.redirect("/noticias")// redireciona para pagina noticias
		return;
	}

	noticiasModel.excluirNoticia(id_noticia,function(erro,result){ // passando parametro para encontrar noticia especifica
		res.redirect("/noticias") // redireciona para pagina noticias
	});

}
