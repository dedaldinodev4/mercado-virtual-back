import { Request, Response } from 'express'
import { FindByIdProductImageUseCase } from './FindByIdProductImageUseCase'


export class FindByIdProductImageController {
    constructor(
        private findByIdProductImageUseCase: FindByIdProductImageUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.findByIdProductImageUseCase.execute(id);

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}