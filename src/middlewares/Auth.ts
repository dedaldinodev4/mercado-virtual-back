import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { IAuthRequest } from '../dtos/Auth';
import { IUser } from '../dtos/User';

//* ensuredAuthenticated *//

    export const ensuredAuthenticated = () => {
    
        return async (request: IAuthRequest, response: Response, next: NextFunction) => {

            const authHeaders = request.headers.authorization;

            if (!authHeaders) {
                return response.status(401).json({ error: 'Token is missing'});
            }
            const [, token] = authHeaders.split(' ');


            try {
                const data = verify(token, process.env.JWT_KEY ?? '') as { user:{
                    email: string;
                    role: string;
                    status: boolean;
                    id: string;
                }};
                
                const { user } = data;
                request.user = user
                return next();
            } catch (err) {
                return response.status(401).json({ error: err})
            }
        }
        
        
    

    }