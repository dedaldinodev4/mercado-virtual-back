import { Request, Response } from 'express'
import { FindAllProductDetailsUseCase } from './FindAllProductDetailsUseCase'


export class FindAllProductDetailsController {
    constructor(
        private findAllProductDetailsUseCase: FindAllProductDetailsUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const data = await this.findAllProductDetailsUseCase.execute()
            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}