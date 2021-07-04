import {Request, Response} from "express"
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController{
    async handle(request: Request, response: Response){
        
        //o request.body é para pegar as informações que vem do corpo html
        const {name, email, admin} = request.body;

        //chama a instacia do serviço
        const createUserService = new CreateUserService();

        //joga as informações para o serviço
        const user = await createUserService.execute({ name, email, admin})

        //retorna em JSON
        return response.json(user);
    }
}
export {CreateUserController}