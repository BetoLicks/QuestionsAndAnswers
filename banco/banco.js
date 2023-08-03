const { Sequelize } = require("sequelize");

const conexao = new Sequelize('perguntas','root','',{
   host: 'localhost',
   dialect: 'mariadb' 
});

module.exports = conexao;