import { Request, Response } from 'express'
import { UpdateUserCredentialsUseCase } from './UpdateUserCredentialsUseCase'


export class UpdateUserCredentialsController {
    constructor(
        private updateUserCredentialsUseCase: UpdateUserCredentialsUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { email, password } = request.body;

        try {
            const data = await this.updateUserCredentialsUseCase.execute(id, { email, password });

            return response.status(201).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}