import { Request, Response } from 'express'
import { FindAllProductShopOrdersUseCase } from './FindAllProductShopOrdersUseCase'


export class FindAllProductShopOrdersController {
    constructor(
        private findAllProductShopOrdersUseCase: FindAllProductShopOrdersUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const data = await this.findAllProductShopOrdersUseCase.execute()
            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}