const fs = require('fs').promises
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

async function ler(){
  try{ 
  const [ autobotsdb, decepticonsdb] = await Promise.all([fs.readFile('./database/autobots.json','utf8'), fs.readFile('./database/decepticons.json','utf8')])  
  const autobots = JSON.parse(autobotsdb) 
  const decepticons = JSON.parse(decepticonsdb) 
  return { autobots, decepticons}
  }
  catch {
    console.log('ERRO: erro au tentar ler banco de dados')
  }
}
app.get('/transformers', async (req,res) => {
  try{ 
  const banco = await ler()
  res.json(banco)
  } 
  catch{
    console.log('ERRO: erro ao tentar enviar os arquivos')
  }
})

app.listen(3000,() => console.log('rodando em http:localhost:3000'))