const ler  = require('../database/db.js') 
async function ListarAutobots(){ 
  const { autobots } = await ler()
  return autobots  
} 
async function ListarDecepticons () {
  const { decepticons } = await ler()
  return decepticons 
} 
module.exports = { ListarDecepticons, ListarAutobots} 
