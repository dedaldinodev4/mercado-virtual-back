import { Request, Response } from 'express'
import { FindByProductProductCategoryUseCase } from './FindByProductProductCategoryUseCase'


export class FindByProductProductCategoryController {
    constructor(
        private findByProductProductCategoryUseCase: FindByProductProductCategoryUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id_product } = request.params;

        try {
            const data = await this.findByProductProductCategoryUseCase.execute(id_product);

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}