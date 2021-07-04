import {Router} from "express"
import { AuthenticateUserController } from "./controlles/AuthenticateUserController"
import { CreateTagController } from "./controlles/CreateTagController"
import { CreateUserController } from "./controlles/CreateUserController"
import { ensureAdmin } from "./middlewares/ensureAdmin"

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()

//rota Post => envia informações 
router.post('/users', createUserController.handle)

router.post('/tags', ensureAdmin, createTagController.handle)

router.post('/login', authenticateUserController.handle)
//rota Get => buscas informações

//rota para put altera informações

//rota para router.patch('/patch' envia informações especificas

//rota para deletar => envia informações

export {router}