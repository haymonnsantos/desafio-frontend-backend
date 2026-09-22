const express = require('express')
const cors = require('cors')

const api = express() 

api.use(cors())
api.use(express.json())

// Rota GET / que retorna o produto criado por você
api.get('/', (req, res) => {
    const biblioteca = [
        {
            nome: 'Crime e Castigo', 
            preco: 50.00, 
            categoria: 'Filosofia',
            imagem: 'https://m.media-amazon.com/images/I/916WkSH4cGL.jpg'
        },
        {
            nome: 'O que faz o brasil, Brasil?',
            preco: 40.00,
            categoria: 'Sociologia',
            imagem: 'https://m.media-amazon.com/images/I/91C-xWqh8qL._AC_UF1000,1000_QL80_.jpg'
        },
        {
            nome: 'Fundamentos da Matemática Elementar',
            preco: 60.00,
            categoria: 'Exatas',
            imagem:  'https://m.media-amazon.com/images/I/71KGGRF6WTL.jpg'
        }
    ]
    
    // Resposta em formato JSON usando a variável correta (res)
    res.status(200).json(biblioteca)
})

api.listen(3000, () => {
    console.log('API está funcionando na porta 3000')
})