import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest{
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentSercive{
    async execute({tag_id, user_receiver, user_sender, message}: IComplimentRequest){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositories = getCustomRepository(UsersRepositories)

        if(user_sender === user_receiver){
            throw new Error("O usuario não poder enviar elogio para ele mesmo")
        }

        const usersRecevierExists = await usersRepositories.findOne(user_receiver)

        if(!usersRecevierExists){
            throw new Error("O usuario que vai receber elogio não existe")
        }

        const compliment = complimentsRepositories.create({
            tag_id, user_receiver, user_sender, message
        })

        await complimentsRepositories.save(compliment)

        return compliment;
    }
}
export {CreateComplimentSercive}