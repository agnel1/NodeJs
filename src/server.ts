import express from 'express';
import 'reflect-metadata'
import {router} from './routes'

const app = express();
import "./database"

app.use(express.json());
app.use(router)

app.listen(3000)