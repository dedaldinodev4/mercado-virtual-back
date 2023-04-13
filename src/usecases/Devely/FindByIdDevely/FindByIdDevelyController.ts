import { Request, Response } from 'express'
import { FindByIdDevelyUseCase } from './FindByIdDevelyUseCase'


export class FindByIdDevelyController {
    constructor(
        private findByIdDevelyUseCase: FindByIdDevelyUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.findByIdDevelyUseCase.execute(id);

            return response.status(200).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}