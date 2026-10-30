const db = require('../database/database.js') 

function listar(){
  return db.ler()
} 
function Criar(dados){
  return db.criar(dados)
} 

module.exports = { listar, Criar}