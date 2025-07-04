const fs = require("fs");

function getTodosLivros() {
  return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroFiltrado = livros.filter( livro => livro.id === id )[0]
    return livroFiltrado
}

function inseriLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaListaDeLivro = [ ...livros, livroNovo]
    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivro))
    return livroNovo

}
function modificaLivro(modificacoes,id){
     let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
     const indiceModificado =  livrosAtuais.findIndex( livro => livro.id === id )
     const conteudoModificado = { ...livrosAtuais[indiceModificado], ...modificacoes }
     livrosAtuais[indiceModificado] = conteudoModificado
     fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
     return modificacoes
}

function deletaLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livrosFiltrados = livros.filter( livro => livro.id !== id )
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
    return livrosFiltrados
}


module.exports = {
  getTodosLivros,
  getLivroPorId,
  inseriLivro,
  modificaLivro,
  deletaLivroPorId
};
