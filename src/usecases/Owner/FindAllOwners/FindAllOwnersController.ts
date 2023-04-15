import { Request, Response } from 'express'
import { FindAllOwnersUseCase } from './FindAllOwnersUseCase'


export class FindAllOwnersController {
    constructor(
        private findAllOwnersUseCase: FindAllOwnersUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const data = await this.findAllOwnersUseCase.execute()
            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}