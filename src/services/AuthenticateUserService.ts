import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import {compare} from "bcryptjs"
import {sign} from "jsonwebtoken"

interface IAuthenticateRequest{
    email: string;
    password: string;
}

class AuthenticateUserService{
    async execute({ email, password}:IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories);
        
        //verificar se o email existe
        const user = await usersRepositories.findOne({ email})
        if(!user){  
            throw new Error("Email incorreto")
        }

        //verificar se a senha ta certa
        const passwordHash = await compare(password, user.password)

        if(!passwordHash){
            throw new Error("Passord Invalido")
        }
        //Gerar criptografia
        const token = sign({
            email: user.email,
        }, 
        "595a5c582715edbf218d8ce811cdb5c0"
        ,{
            subject: user.id, 
            expiresIn: "1d"
        });
        return token
    }
}
export {AuthenticateUserService}