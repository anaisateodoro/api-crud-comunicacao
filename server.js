const express = require('express') // importa express
const routes = require('./src/routes/student'); // import the routes
const app = express() //cria a instancia do express

//conectar o mongo com o mongoose
const db = require('./src/data/database')
db.connect()

//Possibilitando trabalhar com JSON
app.use(express.json())

//usar as rotas
const student  = require('./src/routes/student')

app.use('/student',routes) //usando as rotas para funcionar o endpoint


app.listen(3333, ()=> console.log('Servidor da API comunicAção rodando'))    //subindo o servidor