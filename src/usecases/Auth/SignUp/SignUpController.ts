import { Request, Response } from 'express'
import { SignUpUseCase } from './SignUpUseCase'


export class SignUpController {
    constructor(
        private signUpUseCase: SignUpUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, username, role, password, avatar } = request.body;

        try {
            const data = await this.signUpUseCase.execute({
                email, username, 
                role, password, 
                status: true, avatar
            });

            return response.status(201).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}