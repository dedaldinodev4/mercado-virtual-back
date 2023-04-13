import { Request, Response } from 'express'
import { FindAllOrdersUseCase } from './FindAllOrdersUseCase'


export class FindAllOrdersController {
    constructor(
        private findAllOrdersUseCase: FindAllOrdersUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const data = await this.findAllOrdersUseCase.execute()
            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}