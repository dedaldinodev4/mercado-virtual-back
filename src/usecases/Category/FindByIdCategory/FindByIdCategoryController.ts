import { Request, Response } from 'express'
import { FindByIdCategoryUseCase } from './FindByIdCategoryUseCase'


export class FindByIdCategoryController {
    constructor(
        private findByIdCategoryUseCase: FindByIdCategoryUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.findByIdCategoryUseCase.execute(id);

            return response.status(200).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}