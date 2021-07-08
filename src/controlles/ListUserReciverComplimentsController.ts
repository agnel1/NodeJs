import {Request, Response} from "express"
import { ListUserReciverComplimentsService } from "../services/ListUserReciverComplimentsService";

class ListUserReciverComplimentsController{

    async handle(req: Request, res: Response){
        const {user_id} = req.body

        const listUserReciverComplimentsService = new ListUserReciverComplimentsService();

        const compliments = await listUserReciverComplimentsService.execute(user_id)

        return res.json(compliments)
    }

}
export {ListUserReciverComplimentsController}