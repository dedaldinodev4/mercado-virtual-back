import { Request, Response } from 'express'
import { DeleteShopUseCase } from './DeleteShopUseCase'


export class DeleteShopController {
    constructor(
        private deleteShopUseCase: DeleteShopUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.deleteShopUseCase.execute(id);

            return response.status(204).end();
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}