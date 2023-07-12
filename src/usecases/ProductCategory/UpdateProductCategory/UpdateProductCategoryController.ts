import { Request, Response } from 'express'
import { UpdateProductCategoryUseCase } from './UpdateProductCategoryUseCase'


export class UpdateProductCategoryController {
    constructor(
        private updateProductCategoryUseCase: UpdateProductCategoryUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { id_category, id_product } = request.body;

        try {
            const data = await this.updateProductCategoryUseCase.execute(id, { id_category, id_product });

            return response.status(201).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}