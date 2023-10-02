import { Request, Response } from 'express'
import { FindByShopProductShopOrderUseCase } from './FindByShopProductShopOrderUseCase'


export class FindByShopProductShopOrderController {
    constructor(
        private findByShopProductShopOrderUseCase: FindByShopProductShopOrderUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id_shop } = request.params;

        try {
            const data = await this.findByShopProductShopOrderUseCase.execute(id_shop);

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}