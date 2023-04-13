import { Request, Response } from 'express'
import { UpdateDevelyUseCase } from './UpdateDevelyUseCase'


export class UpdateDevelyController {
    constructor(
        private updateDevelyUseCase: UpdateDevelyUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { location, status } = request.body;

        try {
            const data = await this.updateDevelyUseCase.execute(id, { location, status });

            return response.status(201).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}