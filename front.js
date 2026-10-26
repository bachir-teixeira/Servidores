fetch('http://localhost:3000/maquinas') 
.then( envelope => envelope.json())
.then( dados => console.log(dados))