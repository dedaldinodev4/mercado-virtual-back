import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { ErrorInternal } from './helpers/ErrorInternal';
import { router } from './routes';



const server = express();

server.use(express.json())
server.use(cors())
server.use(express.urlencoded({ extended: true }));
server.use(morgan('dev'))
server.use('/uploads', express.static('uploads'));
server.use(router)


server.use(ErrorInternal)

export { server }
