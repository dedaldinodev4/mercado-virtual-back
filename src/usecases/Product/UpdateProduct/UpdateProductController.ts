import { Request, Response } from 'express'
import { UpdateProductUseCase } from './UpdateProductUseCase'


export class UpdateProductController {
    constructor(
        private updateProductUseCase: UpdateProductUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name, description, quantity, price, isOffer, starRating } = request.body;

        try {
            const data = await this.updateProductUseCase.execute(id, {
                name, description, quantity, price, isOffer, starRating
            });

            return response.status(201).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}