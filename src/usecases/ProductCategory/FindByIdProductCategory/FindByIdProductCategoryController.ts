import { Request, Response } from 'express'
import { FindByIdProductCategoryUseCase } from './FindByIdProductCategoryUseCase'


export class FindByIdProductCategoryController {
    constructor(
        private findByIdProductCategoryUseCase: FindByIdProductCategoryUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.findByIdProductCategoryUseCase.execute(id);

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}