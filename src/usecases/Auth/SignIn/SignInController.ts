import { Request, Response } from 'express'
import { SignInUseCase } from './SignInUseCase'


export class SignInController {
    constructor(
        private signInUseCase: SignInUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        try {
            const data = await this.signInUseCase.execute({
              email, password 
            });

            return response.status(201).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}