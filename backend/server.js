const express = require('express')
const cors = require('cors')

const api = express() 

api.use(cors())
api.use(express.json())

// Rota GET / que retorna o produto criado por você
api.get('/', (req, res) => {
    const biblioteca = [
        {
            nome: 'Livro de Filosofia', 
            preco: 50.00, 
            categoria: 'Humanas'
        },
        {
            nome: 'Livro de História',
            preco: 40.00,
            categoria: 'Humanas'
        },
        {
            nome: 'Livro de Matemática',
            preco: 60.00,
            categoria: 'Exatas'
        }
    ]
    
    // Resposta em formato JSON usando a variável correta (res)
    res.status(200).json(biblioteca)
})

api.listen(3000, () => {
    console.log('API está funcionando na porta 3000')
})