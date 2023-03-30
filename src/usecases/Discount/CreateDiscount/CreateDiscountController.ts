import { Request, Response } from 'express'
import { CreateDiscountUseCase } from './CreateDiscountUseCase'


export class CreateDiscountController {
    constructor(
        private createDiscountUseCase: CreateDiscountUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description, percent, status } = request.body;

        try {
            const data = await this.createDiscountUseCase.execute({
                name, description, percent, status
            });

            return response.status(201).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}