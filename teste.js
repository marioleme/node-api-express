const fs = require('fs')

const dadosAtuais = JSON.parse(fs.readFileSync('livros.json'))

const novoDado = {"id": "3",  "nome": "Livro mario"}
// writeFileSync : escreve no arquivo 
// readFileSync : lê o arquivo  
fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado]))


console.log(JSON.parse(fs.readFileSync('livros.json')))