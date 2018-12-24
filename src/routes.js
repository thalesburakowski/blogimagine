const app = require('express').Router()

app.get('/', (req, res) => {
    res.send('Primeira mensagem dedicada à Mel')
})


module.exports = app