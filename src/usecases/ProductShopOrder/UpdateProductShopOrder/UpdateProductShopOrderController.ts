import { Request, Response } from 'express'
import { UpdateProductShopOrderUseCase } from './UpdateProductShopOrderUseCase'


export class UpdateProductShopOrderController {
    constructor(
        private updateProductShopOrderUseCase: UpdateProductShopOrderUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { id_order, id_productShop } = request.body;

        try {
            const data = await this.updateProductShopOrderUseCase.execute(id, { id_order, id_productShop });

            return response.status(201).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}