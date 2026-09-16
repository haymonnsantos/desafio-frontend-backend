const express = require('express')
const cors = require('cors')

const api = express() 

api.use(cors())
api.use(express.json())

// Rota GET / que retorna o produto criado por você
api.get('/', (req, res) => {
    const produto = {
        nome: 'Livro de Filosofia', 
        preco: 50.00, 
        categoria: 'Livros'
    }
    
    // Resposta em formato JSON usando a variável correta (res)
    res.status(200).json(produto)
})

api.listen(3000, () => {
    console.log('API está funcionando na porta 3000')
})