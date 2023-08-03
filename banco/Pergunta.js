const Sequelize = require("sequelize");

const connection = require('./banco');

const Pergunta = connection.define('tab_perguntas',{
   titulo:{
      type: Sequelize.STRING,
      allowNull: false
   },
   descricao:{
      type: Sequelize.TEXT,
      allowNull: false
   }
});

Pergunta.sync({force: false})

module.exports = Pergunta