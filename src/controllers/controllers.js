const service = require('../services/services.js') 

async function list(req,res){
  const lista = await service.listar()
  res.json(lista)
} 

async function add(req,res){
  const pessoa = req.body
  await service.criar(pessoa)
  res.json(pessoa)
} 
module.exports = { list, add}