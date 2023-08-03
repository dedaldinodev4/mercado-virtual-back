import { Request, Response } from 'express'
import { FindByIdProductDetailUseCase } from './FindByIdProductDetailUseCase'


export class FindByIdProductDetailController {
    constructor(
        private findByIdProductDetailUseCase: FindByIdProductDetailUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.findByIdProductDetailUseCase.execute(id);

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}