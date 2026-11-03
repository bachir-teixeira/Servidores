function ler(dados){
  const { autobots , decepticons } = dados 
  console.log(autobots)
} 
fetch('http://localhost:3000/transformers')
.then( recebido => recebido.json())
.then( visto => ler(visto)) 

