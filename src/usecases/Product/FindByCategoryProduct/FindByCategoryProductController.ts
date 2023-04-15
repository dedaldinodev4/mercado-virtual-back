import { Request, Response } from 'express'
import { FindByCategoryProductUseCase } from './FindByCategoryProductUseCase'


export class FindByCategoryProductController {
    constructor(
        private findByCategoryProductUseCase: FindByCategoryProductUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id_category } = request.params;

        try {
            const data = await this.findByCategoryProductUseCase.execute(id_category);

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}