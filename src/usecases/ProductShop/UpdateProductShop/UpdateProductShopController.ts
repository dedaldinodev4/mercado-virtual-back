import { Request, Response } from 'express'
import { UpdateProductShopUseCase } from './UpdateProductShopUseCase'


export class UpdateProductShopController {
    constructor(
        private updateProductShopUseCase: UpdateProductShopUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { id_shop, id_product } = request.body;

        try {
            const data = await this.updateProductShopUseCase.execute(id, { id_shop, id_product });

            return response.status(201).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}