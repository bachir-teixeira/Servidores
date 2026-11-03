async function CarregarAutobots() {
  const resposta = await fetch('https://transformers-6jyc.onrender.com/autobots') 
  const dados =  await resposta.json() 
  console.log(dados)
} 

CarregarAutobots()