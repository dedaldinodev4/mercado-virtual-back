import { Request, Response } from 'express'
import { DeleteProductCategoryUseCase } from './DeleteProductCategoryUseCase'


export class DeleteProductCategoryController {
    constructor(
        private deleteProductCategoryUseCase: DeleteProductCategoryUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.deleteProductCategoryUseCase.execute(id);

            return response.status(204).end();
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}