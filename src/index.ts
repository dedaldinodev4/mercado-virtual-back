import { server } from './server'
import { config } from 'dotenv'
import { APP_PORT } from './core';

config();

server.listen(APP_PORT, () => console.log(`
  Server is running in port ${APP_PORT}.
`));