import { Request, Response } from 'express'
import { FindAllProductImagesUseCase } from './FindAllProductImagesUseCase'


export class FindAllProductImagesController {
    constructor(
        private findAllProductImagesUseCase: FindAllProductImagesUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const data = await this.findAllProductImagesUseCase.execute()
            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}