const express = require('express')
const routerLivros = require('./rotas/livro')
const app = express()
app.use(express.json())
const port = 8000
app.use('/livros', routerLivros)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
} )