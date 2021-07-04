//tudo que for relacionado a criação de usuario é aqui
import { UsersRpositories } from "../repositories/UsersRpositories"
import {getCustomRepository} from "typeorm"

interface IUserRequest {
  name: string;
  email: string;
  admin?:boolean;
}

class CreateUserService {

  async execute({ name, email, admin}:IUserRequest) {
    //chama o repositório customizado
    const usersRpositories = getCustomRepository(UsersRpositories)

    //verefica se o email está certo
    if(!email){
      throw new Error("O email está incorreto")
    }

    //verefica se o email existe
    const userAlreadyExists = await usersRpositories.findOne({email})
    if(userAlreadyExists) {
      throw new Error("O usuario já existe")
    }

    //prepara para salvar
    const user = usersRpositories.create({name, email, admin})
    
    //salva o usuario
    await usersRpositories.save(user);
    
    //entrega as informações
    return user;
  }

}
export { CreateUserService }