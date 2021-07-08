import {Request, Response} from "express"
import { ListTagsServices } from "../services/ListTagsServices";

class ListTagsController{
    async handle(req: Request, res: Response){
        const listTagsService = new ListTagsServices();

        const tags = await listTagsService.execute()
        
        return res.json(tags);
    }
}
export {ListTagsController}