const { Router } = require("express");
const { getLivros, getLivro  , postLivro, patchLivro , deleteLivro} = require("../controladores/livro");


const router = Router()
// pegar todos os livros

router.get("/", getLivros)
// pegar um livro especifico por ID

router.get('/:id', getLivro)

// criar um livro
router.post("/", postLivro)

// modificar um livro

router.patch("/:id", patchLivro)

// deletar um livro

router.delete('/:id', deleteLivro)
module.exports = router