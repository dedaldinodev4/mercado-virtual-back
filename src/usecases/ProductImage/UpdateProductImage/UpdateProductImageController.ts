import { Request, Response } from 'express'
import { UpdateProductImageUseCase } from './UpdateProductImageUseCase'


export class UpdateProductImageController {
    constructor(
        private updateProductImageUseCase: UpdateProductImageUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const url = request.file?.path ?? '';
        const { id_product } = request.body;

        try {
            const data = await this.updateProductImageUseCase.execute(id, { url, id_product });

            return response.status(201).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}