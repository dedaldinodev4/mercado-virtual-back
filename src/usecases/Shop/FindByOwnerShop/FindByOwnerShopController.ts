import { Request, Response } from 'express'
import { FindByOwnerShopUseCase } from './FindByOwnerShopUseCase'


export class FindByOwnerShopController {
    constructor(
        private findByOwnerShopUseCase: FindByOwnerShopUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id_owner } = request.params;

        try {
            const data = await this.findByOwnerShopUseCase.execute(id_owner);

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}