import { Request, Response } from 'express'
import { UpdateDiscountUseCase } from './UpdateDiscountUseCase'


export class UpdateDiscountController {
    constructor(
        private updateDiscountUseCase: UpdateDiscountUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name, description, percent, status } = request.body;

        try {
            const data = await this.updateDiscountUseCase.execute(id, {
                name, description, percent, status
            });

            return response.status(201).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}