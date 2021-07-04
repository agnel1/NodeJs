import {Router} from "express"
import { CreateUserController } from "./controlles/CreateUserController"

const router = Router()

const createUserController = new CreateUserController()

//rota Post => envia informações 
router.post('/post', createUserController.handle)

//rota Get => buscas informações
router.get('/', (req, res) => {
    return res.send("req.params[0]")
})

//rota para alterar informações
router.put('/put', (req, res) => {
    return res.send("rota para alterar")
})

//rota para alterar envia informações especificas
router.patch('/patch', (req, res) =>{
    return res.send("rota para alterar algo especifico") 
})

//rota para deletar => envia informações
router.delete('/delete', (req, res) =>{
    return res.send("rota para deletar")
})

export {router}