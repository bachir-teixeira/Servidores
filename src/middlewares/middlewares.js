function validar(req,res,next){
  const { nome,email} = req.body
  if(!nome || !email){
    return res.status(400).json({erro:'preencha todos campos'})
  }
} 
module.exports = validar