create table noticias(
	id_noticia integer primary key auto_increment,
	titulo varchar(100),
	resumo varchar(100),
	autor varchar(100),
	data_noticia date,
	noticia text
);