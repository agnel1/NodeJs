import {Router} from "express"

import { AuthenticateUserController } from "./controlles/AuthenticateUserController"
import { CreateComplimentController } from "./controlles/CreateComplimentController"
import { CreateTagController } from "./controlles/CreateTagController"
import { CreateUserController } from "./controlles/CreateUserController"
import { ListTagsController } from "./controlles/ListTagsController"
import { ListUserController } from "./controlles/ListUsersController"
import { ListUserReciverComplimentsController } from "./controlles/ListUserReciverComplimentsController"
import { ListUserSendComplimentsController } from "./controlles/ListUserSendComplimentsController"
import { ensureAdmin } from "./middlewares/ensureAdmin"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"


const router = Router()

const listUserSendComplimintsController = new ListUserSendComplimentsController()
const listUserReciverComplimentsController = new ListUserReciverComplimentsController()
const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listTagsController = new ListTagsController()
const listUserController = new ListUserController()

//rota Post => envia informações 
router.post('/users', createUserController.handle)

router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle)

router.post('/login', authenticateUserController.handle)

router.post('/compliments', ensureAuthenticated, createComplimentController.handle)


//rota Get => buscas informações
router.get('/users/compliments/send', ensureAuthenticated, listUserSendComplimintsController.handle)

router.get('/users/compliments/reciver', ensureAuthenticated, listUserReciverComplimentsController.handle )

router.get('/tags', listTagsController.handle)

router.get('/users', listUserController.handle)
//rota para put altera informações

//rota para router.patch('/patch' envia informações especificas

//rota para deletar => envia informações

export {router}