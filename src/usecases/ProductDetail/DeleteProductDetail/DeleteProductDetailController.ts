import { Request, Response } from 'express'
import { DeleteProductDetailUseCase } from './DeleteProductDetailUseCase'


export class DeleteProductDetailController {
    constructor(
        private deleteProductDetailUseCase: DeleteProductDetailUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.deleteProductDetailUseCase.execute(id);

            return response.status(204).end();
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}