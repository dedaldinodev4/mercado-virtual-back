import { config } from 'dotenv'

config();

export const { 
  APP_PORT, 
  APP_HOST 
} = process.env 