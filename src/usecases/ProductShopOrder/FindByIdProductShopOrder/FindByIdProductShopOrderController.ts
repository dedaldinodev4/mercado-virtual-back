import { Request, Response } from 'express'
import { FindByIdProductShopOrderUseCase } from './FindByIdProductShopOrderUseCase'


export class FindByIdProductShopOrderController {
    constructor(
        private findByIdProductShopOrderUseCase: FindByIdProductShopOrderUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.findByIdProductShopOrderUseCase.execute(id);

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}