import { Request, Response } from 'express'
import { FindAllPaymentsUseCase } from './FindAllPaymentsUseCase'


export class FindAllPaymentsController {
    constructor(
        private findAllPaymentsUseCase: FindAllPaymentsUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const data = await this.findAllPaymentsUseCase.execute()
            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}