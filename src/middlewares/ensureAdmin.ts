import {NextFunction, request, Request, Response} from "express"
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(req: Request, res: Response, next: NextFunction){
    const {user_id} = req.body

    const usersRepositories = getCustomRepository(UsersRepositories)

    const {admin} = await usersRepositories.findOne(user_id)
    

    //verificar se é admin

    if(admin){
        return next()
    }
    return res.status(401).json({message:"você não é Admin"})
}