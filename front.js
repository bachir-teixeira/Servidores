async function CarregarAutobots() {
  const resposta = await fetch('http://localhost:3000/autobots') 
  const dados =  await resposta.json() 
  console.log(dados)
} 

CarregarAutobots()