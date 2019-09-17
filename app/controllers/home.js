// Marcos Lopes Gonçalves 5B

module.exports.index = function(app,req,res){
	var connection = app.config.dbConnection(); //  está recebendo a o metodo conexão , puxando da pasta config
	var noticiasModel = new app.app.models.NoticiasDAO(connection); // iniciando  a conexão com banco de dados , puxando da classe NoticiasDAO passando como parametro a conexão 

	noticiasModel.get5UltimasNoticias(function(error,result){ // função reponsavel para mostrar as ultimas  primeira noticia
		console.log(result);
		res.render("home/index", {noticias:result});
		// retornar  todas as ultima noticias 
	});
}
