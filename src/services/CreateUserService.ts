//tudo que for relacionado a criação de usuario é aqui
import { UsersRepositories } from "../repositories/UsersRepositories"
import {getCustomRepository} from "typeorm"
import {hash} from "bcryptjs"

interface IUserRequest {
  name: string;
  email: string;
  password: string;
  admin?:boolean;
}

class CreateUserService {

  async execute({ name, email, admin = false, password}:IUserRequest) {
    //chama o repositório customizado
    const usersRepositories = getCustomRepository(UsersRepositories)

    //verefica se o email está certo
    if(!email){
      throw new Error("O email está incorreto")
    }

    //verefica se o email existe
    const userAlreadyExists = await usersRepositories.findOne({email})
    if(userAlreadyExists) {
      throw new Error("O usuario já existe")
    }

    //criptografia de senha
    const passwordHash = await hash(password, 10)

    //prepara para salvar
    const user = usersRepositories.create({name, email, admin, password:passwordHash})
    
    //salva o usuario
    await usersRepositories.save(user);
    
    //entrega as informações
    return user;
  }

}
export { CreateUserService }