import express, {Response, Request, NextFunction} from 'express';
import "reflect-metadata";
import "express-async-errors";
import {router} from './routes';
import "./database";

const app = express();

app.use(express.json());

app.use(router)

//trativa de erros
app.use((err: Error, req: Request, res:Response, next:NextFunction) => {
    if(err instanceof Error){
        return res.status(400).json({message: err.message})
    }
    res.status(500).json({message:"Erro interno do Servidor", status:"Error"})
})


app.listen(3000)