import { Request, Response } from 'express'
import { UpdatePhoneUseCase } from './UpdatePhoneUseCase'


export class UpdatePhoneController {
    constructor(
        private updatePhoneUseCase: UpdatePhoneUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { number } = request.body;

        try {
            const data = await this.updatePhoneUseCase.execute(id, { number});

            return response.status(201).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}