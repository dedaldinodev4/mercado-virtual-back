import { Request, Response } from 'express'
import { FindByAddressShopUseCase } from './FindByAddressShopUseCase'


export class FindByAddressShopController {
    constructor(
        private findByAddressShopUseCase: FindByAddressShopUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id_address } = request.params;

        try {
            const data = await this.findByAddressShopUseCase.execute(id_address);

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}