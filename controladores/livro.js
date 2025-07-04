const fs = require('fs')
const { getTodosLivros ,getLivroPorId , inseriLivro , modificaLivro , deletaLivroPorId } = require("../servicos/livro")



// readFileSync : lê o arquivo  
// writeFileSync : escreve no arquivo 


function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        if(id && Number(id)){
            const livro = getLivroPorId(id)
            res.send(livro)
        }else{
            res.status(422)
            res.send("Id inválido")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send("Id inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function postLivro(req, res) {
    try
    {
        const livroNovo =  req.body
        if(req.body.nome){
              inseriLivro(livroNovo)
        res.status(201)
        res.send("Livro criado com sucesso")
        }else {
            res.status(422)
            res.send("nome é obrigatório")
        }
      

    } catch{
        res.status(422)
        res.send(error.message)
    }

    res.send("você fez um POST livros")
}
function patchLivro(req, res) {
    try{
        const id = req.params.id
        if(id && Number(id)){
                const body = req.body
        modificaLivro(body,id)
        res.send("Item modificado com sucesso")
        }else{
            res.status(422)
            res.send("ID inválido")
        }
    

    }catch{
        res.status(422)
        res.send(error.message)
    }
    
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deletaLivroPorId(id)
            res.send("livro deletado com sucesso")
        } else {
            res.status(422)
            res.send("ID inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}


module.exports = {getLivros, getLivro , postLivro,patchLivro, deleteLivro}

