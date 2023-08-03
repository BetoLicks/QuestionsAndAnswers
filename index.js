const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const conexao = require('./banco/banco')
const perguntaModelo = require('./banco/Pergunta');

conexao.
   authenticate()
   .then(()=> {
      console.log('CONECTADO COM SUCESSO.');
   })
   .catch((mensaerro)=>{
      console.log('ERRO NA CONEXÃO: '+mensaerro);
   })

app.set("view engine","ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/perguntar",(req,res)=>{
   res.render("perguntar");
});

app.get("/",(req,res)=>{
   perguntaModelo.findAll({row: true}).then(lista => {
      res.render("index",{
         lista: lista
      });
   })   
});

app.post("/salvapergunta",(req,res)=>{
   let edt_titulo = req.body.edt_titulo;
   let edt_descricao = req.body.edt_descricao;

   perguntaModelo.create({
      titulo: edt_titulo,
      descricao: edt_descricao
   }).then(() => {      
      res.redirect('/');
   })
});

app.listen(9000,()=>{
   console.log("[******* SERVIDOR RODANDO *******]");
})