const fs = require('fs').promises
const patch = require('path') 
const arquivo = patch.join(__dirname,'database.json')
async function ler() {
  const lendo = await fs.readFile(arquivo,'utf8')
  const banco = JSON.parse(lendo)
  console.log(banco)
  return banco
} 

async function criar(dados){
  const banco = await ler()
  banco.push(dados)
  fs.writeFile(arquivo, JSON.stringify(banco,null,2))
} 

module.exports = { criar, ler}