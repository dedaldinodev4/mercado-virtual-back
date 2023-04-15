import { Request, Response } from 'express'
import { DeleteProductShopUseCase } from './DeleteProductShopUseCase'


export class DeleteProductShopController {
    constructor(
        private deleteProductShopUseCase: DeleteProductShopUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.deleteProductShopUseCase.execute(id);

            return response.status(204);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}