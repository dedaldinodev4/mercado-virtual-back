import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'


export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { username, status, role, avatar, password, email } = request.body;

        try {
            const data = await this.createUserUseCase.execute({ 
                username, status, role, avatar, password, email
             });

            return response.status(201).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}