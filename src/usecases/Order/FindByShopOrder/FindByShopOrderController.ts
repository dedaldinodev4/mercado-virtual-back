import { Request, Response } from 'express'
import { FindByShopOrderUseCase } from './FindByShopOrderUseCase'


export class FindByShopOrderController {
    constructor(
        private findByShopOrderUseCase: FindByShopOrderUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id_shop } = request.params;

        try {
            const data = await this.findByShopOrderUseCase.execute(id_shop);

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}