import { Request, Response } from 'express'
import { FindByIdShopUseCase } from './FindByIdShopUseCase'


export class FindByIdShopController {
    constructor(
        private findByIdShopUseCase: FindByIdShopUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.findByIdShopUseCase.execute(id);

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}