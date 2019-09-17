// Marcos Lopes Gonçalves 5B

module.exports.formulario_inclusao_noticia=function(app, req,res){
	res.render("admin/formulario_inclusao_noticia",{validacao:{},noticia:{}});
	// //função responsavel para responder com pagina inclusão de noticias , 
	// quando vou solicitado pela rota,juntamneto 'variavel validacao' e 'noticias ' 
	// são vetores que ira responder com informações especificas da validação de formulario , noticia unica
}
module.exports.noticias_salvar= function(app,req,res){  // metodo responsavel parar salvar noticia
	var noticia= req.body; // recebe informações digita no formulario de inclusão noticia

	req.assert('titulo','Titulo inválido').notEmpty();  // valida o campo titulo
	req.assert('resumo','Sem resumo!').notEmpty(); // valida o campo resumo 
	req.assert('resumo','ATENÇÃO: o resumo deve conter entre 15 e 100 caracteres').len(10,100); // valida o tamanho do camp resumo
	req.assert('autor','Sem autor!').notEmpty(); // // valida o campo autor
	req.assert('data_noticia','Por favor, informe a data').notEmpty(); // valida o campo data
	req.assert('noticia','Informe a noticia').notEmpty(); // valida o campo noticia
	var erros= req.validationErrors(); // informa os erros encontrado no formulario

	if (erros) { //condição para verificar se há algum tipo de erro
		res.render("admin/formulario_inclusao_noticia",{validacao:erros,noticia:noticia});
		// o res.render 'responde com todos os erro , juntamente com o que foi digitado'
		return; 
	}

	var connection = app.config.dbConnection(); //  está recebendo a o metodo conexão , puxando da pasta config
	var noticiasModel = new app.app.models.NoticiasDAO(connection); // iniciando  a conexão com banco de dados , puxando da classe NoticiasDAO passando como parametro a conexão 

	noticiasModel.salvarNoticia(noticia, function(error,result){ // metodo responsavel para salvar noticia , passando como parametro informações da noticia digitada 
		res.redirect('/noticias'); // redireciona para pagina de noticias
	});

}
