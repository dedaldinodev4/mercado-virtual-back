import { Request, Response } from 'express'
import { UpdateShopUseCase } from './UpdateShopUseCase'


export class UpdateShopController {
    constructor(
        private updateShopUseCase: UpdateShopUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name, id_address } = request.body;

        try {
            const data = await this.updateShopUseCase.execute(id, { name, id_address });

            return response.status(201).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}