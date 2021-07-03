import express from 'express';
import 'reflect-metadata'

const app = express();
import "./database"

//rota Get => buscas informações
app.get('/', (req, res) => {
    return res.send("req.params[0]")
})

//rota Post => envia informações 
app.post('/post', (req, res) => {
    return res.send("rota post")
})

//rota para alterar informações
app.put('/put', (req, res) => {
    return res.send("rota para alterar")
})

//rota para alterar envia informações especificas
app.patch('/patch', (req, res) =>{
    return res.send("rota para alterar algo especifico") 
})

//rota para deletar => envia informações
app.delete('/delete', (req, res) =>{
    return res.send("rota para deletar")
})

app.listen(3000)