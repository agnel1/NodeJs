import {Request, Response, NextFunction} from "express"
import {verify } from "jsonwebtoken"

interface IPayload{
    sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){
    // precisa receber o token
    const authToken = req.headers.authorization;
    
    if(!authToken){
        return res.status(401).end()
    }
    const [, token] = authToken.split("") 
    
    // precisa validar o token 
    try{
        const {sub} = verify(token , "595a5c582715edbf218d8ce811cdb5c0") as IPayload    
        
        //recuperar informações do usuario
        req.user_id = sub;
        // ver se é valido
        return next();
    
    } catch(err){
        return res.status(401).end()
    }  
}