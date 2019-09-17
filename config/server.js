// Marcos Lopes Gonçalves 5B


var express = require('express');//  Está solicitanto o modulo express .js
var consign = require('consign'); // Está solicitanto o  modulo consign
var bodyParser= require('body-parser'); // Está solicitanto o modulo body-parse
var expressValidator= require('express-validator'); //Está solicitanto o modulo express-validator

var app = express(); // iniciando aplicativo express
app.set('view engine','ejs');//passa o ejs como views
app.set('views','./app/views');//mostra a rota para views

app.use(express.static('./app/public')); // importanto arquivos externos, como por exemplo css, img , arquivos estaticos

app.use(bodyParser.urlencoded({extended:true})); // configurando body parse para ser utilizado


app.use(expressValidator()); // ativando express validator

consign() /// inicinado consign para o carregamento dos arquivos
.include('app/routes')
.then('config/dbConnection.js')//mostra onde está a conexao com o banco
.then('app/controllers')
.then('app/models')
.into(app);

module.exports= app; //  está retornando o aplcativo app
