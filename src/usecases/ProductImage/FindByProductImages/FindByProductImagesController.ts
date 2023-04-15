import { Request, Response } from 'express'
import { FindByProductImagesUseCase } from './FindByProductImagesUseCase'


export class FindByProductImagesController {
    constructor(
        private findByProductImagesUseCase: FindByProductImagesUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id_product } = request.params;

        try {
            const data = await this.findByProductImagesUseCase.execute(id_product);

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}