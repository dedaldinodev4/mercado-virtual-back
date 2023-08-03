import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import serveIndex from 'serve-index'

import { ErrorInternal } from './helpers/ErrorInternal';
import { router } from './routes';


const imageDirectory = path.join(__dirname, '..', 'public', 'uploads');

const server = express();

server.use(express.json())
server.use(cors())
server.use(express.urlencoded({ extended: true }));
server.use(morgan('dev'))
server.use('/uploads', express.static('uploads'));
server.use('/ftp', express.static('public'), serveIndex('public', {'icons': true}))
server.use(router)


server.use(ErrorInternal)

export { server, imageDirectory }
