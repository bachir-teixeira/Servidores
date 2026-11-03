const { ListarAutobots, ListarDecepticons} = require('../services/services.js') 

async function autobots(req,res){
  res.json( await ListarAutobots())
} 
async function decepticons(req,res){
  res.json( await ListarDecepticons())
} 

module.exports = { autobots, decepticons }