# Alura Books - API

Esta é uma API RESTful simples para gerenciar uma coleção de livros, desenvolvida com Node.js e Express. O projeto faz parte do curso de desenvolvimento full stack da Alura e serve como o backend para a aplicação Alura Books.

Os dados são persistidos em um arquivo `livros.json` para simplificar o setup e focar na lógica da API.

## ✨ Funcionalidades

- **Listar** todos os livros.
- **Obter** um livro específico por seu ID.
- **Adicionar** um novo livro à coleção.
- **Modificar** as informações de um livro existente.
- **Deletar** um livro da coleção.

## 🚀 Pré-requisitos

Antes de começar, você vai precisar ter as seguintes ferramentas instaladas em sua máquina:
- Node.js (v18 ou superior)
- Git (Opcional, para clonar o repositório)

## 📦 Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

1. **Clone o repositório** (ou baixe os arquivos):
   ```bash
   git clone <https://github.com/marioleme/node-api-express>
   ```

2. **Navegue até o diretório do projeto:**
   ```bash
   cd ALURA-BOOKS-SERVER
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

## ▶️ Executando a Aplicação

Para iniciar o servidor, execute o seguinte comando no terminal:

```bash
node app.js
```

O servidor estará rodando em `http://localhost:8000`.

## 📖 Endpoints da API

A seguir estão os endpoints disponíveis na API:

| Método   | Rota             | Descrição                               | Corpo da Requisição (Exemplo)                |
|----------|------------------|-----------------------------------------|----------------------------------------------|
| `GET`    | `/livros`        | Retorna a lista de todos os livros.     | N/A                                          |
| `GET`    | `/livros/:id`    | Retorna um livro específico pelo ID.    | N/A                                          |
| `POST`   | `/livros`        | Adiciona um novo livro.                 | `{ "id": "4", "nome": "Novo Livro Incrível" }` |
| `PATCH`  | `/livros/:id`    | Modifica um livro existente pelo ID.    | `{ "nome": "Nome do Livro Atualizado" }`     |
| `DELETE` | `/livros/:id`    | Deleta um livro pelo ID.                | N/A                                          |

---

## 🏛️ Estrutura do Projeto

O projeto está organizado da seguinte forma para separar as responsabilidades:

```
ALURA-BOOKS-SERVER/
├── 📁 controladores/  # Camada que lida com a requisição (req) e resposta (res).
│   └── livro.js
├── 📁 rotas/          # Define as rotas da API e as associa aos controladores.
│   └── livro.js
├── 📁 servicos/       # Camada de lógica de negócio e acesso aos dados.
│   └── livro.js
├── 📄 app.js          # Arquivo principal que inicializa o servidor Express.
├── 📄 livros.json      # Arquivo que funciona como banco de dados.
└── 📄 package.json    # Dependências e scripts do projeto.
```