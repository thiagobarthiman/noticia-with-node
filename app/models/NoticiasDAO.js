// Marcos Lopes Gonçalves 5B

class NoticiasDAO{
	constructor(connection){
		this._connection=connection;
	}
	getNoticias(callback){
		this._connection.query('select*from noticias order by data_noticia desc', callback);// retorna todas as noticias
	}
	salvarNoticia(noticia,callback){
		this._connection.query('insert into noticias set?',noticia, callback);//responsavel de fazer a inserçao da noticia no banco de dados
	}
	getNoticia(id_noticia, callback){
		this._connection.query('select*from noticias where id_noticia='+ id_noticia.id_noticia, callback);//retorna uma unica noticia
	}
	get5UltimasNoticias(callback){
		this._connection.query('select*from noticias order by data_noticia desc limit 5',callback);// mostrar  as ultimas 5 notiicas
	}
	buscaNoticias(pesquisa, callback){
		this._connection.query("select*from noticias where titulo like '%" + pesquisa +"%'order by data_noticia desc",callback);//buscar uma unica noticia ou ate mesmo grupo de noticias
	}
	excluirNoticia(id_noticia, callback){
		this._connection.query("delete from noticias where id_noticia="+ id_noticia.id_noticia,callback);//apagar uma especifica noticia
	}
}
module.exports=function(){
	return NoticiasDAO;//retorna a classe noticiasDAo
}
