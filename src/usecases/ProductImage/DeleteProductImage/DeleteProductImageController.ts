import { Request, Response } from 'express'
import { DeleteProductImageUseCase } from './DeleteProductImageUseCase'


export class DeleteProductImageController {
    constructor(
        private deleteProductImageUseCase: DeleteProductImageUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.deleteProductImageUseCase.execute(id);

            return response.status(204).end();
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}