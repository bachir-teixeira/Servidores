const app = require('./app')
const port = require('./src/config/config.js')
app.listen(port,()=> console.log('rodando em http://localhost:3000'))