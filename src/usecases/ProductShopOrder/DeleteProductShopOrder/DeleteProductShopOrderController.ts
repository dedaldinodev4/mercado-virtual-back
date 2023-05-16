import { Request, Response } from 'express'
import { DeleteProductShopOrderUseCase } from './DeleteProductShopOrderUseCase'


export class DeleteProductShopOrderController {
    constructor(
        private deleteProductShopOrderUseCase: DeleteProductShopOrderUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.deleteProductShopOrderUseCase.execute(id);

            return response.status(204).end();
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}