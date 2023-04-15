import { Request, Response } from 'express'
import { FindByShopProductShopUseCase } from './FindByShopProductShopUseCase'


export class FindByShopProductShopController {
    constructor(
        private findByShopProductShopUseCase: FindByShopProductShopUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id_shop } = request.params;

        try {
            const data = await this.findByShopProductShopUseCase.execute(id_shop);

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}