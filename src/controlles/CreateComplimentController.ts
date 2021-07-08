import { request, Request, Response} from "express";
import { CreateComplimentSercive } from "../services/CreateComplimentSercive";

class CreateComplimentController{ 

    async handle(req: Request, res: Response){

        const { tag_id, user_receiver, message } = req.body
        
        const {user_id} = req.body
        const createComplimentSercive = new CreateComplimentSercive();

        const compliment = await createComplimentSercive.execute({
            tag_id, user_receiver, user_sender: user_id, message
        })

        return res.json(compliment)
    }

}
export {CreateComplimentController}