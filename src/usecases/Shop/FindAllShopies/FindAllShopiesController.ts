import { Request, Response } from 'express'
import { FindAllShopiesUseCase } from './FindAllShopiesUseCase'


export class FindAllShopiesController {
    constructor(
        private findAllShopiesUseCase: FindAllShopiesUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const data = await this.findAllShopiesUseCase.execute()
            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}