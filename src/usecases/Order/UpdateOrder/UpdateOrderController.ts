import { Request, Response } from 'express'
import { UpdateOrderUseCase } from './UpdateOrderUseCase'


export class UpdateOrderController {
    constructor(
        private updateOrderUseCase: UpdateOrderUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { total, status, totalDiscount, quantity } = request.body;

        try {
            const data = await this.updateOrderUseCase.execute(id, { 
                total, status, totalDiscount, quantity 
            });

            return response.status(201).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}