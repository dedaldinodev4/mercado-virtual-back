import { Request, Response } from 'express'
import { FindByCategoryProductCategoryUseCase } from './FindByCategoryProductCategoryUseCase'


export class FindByCategoryProductCategoryController {
    constructor(
        private findByCategoryProductCategoryUseCase: FindByCategoryProductCategoryUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id_category } = request.params;

        try {
            const data = await this.findByCategoryProductCategoryUseCase.execute(id_category);

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}