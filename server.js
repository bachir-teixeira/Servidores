const express = require('express')
const fs = require('fs').promises 
const cors = require('cors')
const app = express() 
app.use(cors())
app.use(express.json()) 

const ler = async () => {
  const lendo = await fs.readFile('./database/autobots.json','utf8')
  const banco = JSON.parse(lendo) 
  return banco
  
}
app.get('/maquinas', async (req,res) => { 
  const banco = await ler() 
  res.json(banco)
})
app.listen(3000, ()=> console.log('ligado'))