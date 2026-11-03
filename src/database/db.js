const fs = require('fs').promises 
const path = require('path') 

async function ler(){ 
  const [ autoJson , decepJson ] = await Promise.all([ fs.readFile(path.join(__dirname,'./autobots.json'),'utf8'),fs.readFile(path.join(__dirname,'./decepticons.json'),'utf8')]) 
  const autobots = JSON.parse(autoJson)
  const decepticons = JSON.parse(decepJson)
  return { autobots, decepticons }
}    
 module.exports = ler