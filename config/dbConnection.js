// Marcos Lopes Gonçalves 5B

var mysql= require('mysql');//está solicitando o módulo mysql para efetuar a conexão

var connMySQL =function(){// função responsavel pelas informações de banco de dados aonde será necessario para conectar ao banco de dados
	console.log('Conexão com bd foi estabelecida');
		 return mysql.createConnection({//retorna e cria uma conexao
        host: 'localhost',//local do host
        user: 'root',//usuario do host
        password:'',//senha do host
        database: 'portal_noticias'//tabela
    });
}
module.exports=function(){  // função responsavel pelo caregamento da conexão , permitindo a exportação para outros scripts
	console.log('O autoload carregou o módulo de conexao com bd')
	return connMySQL;//retorna a conexao com o banco
}
