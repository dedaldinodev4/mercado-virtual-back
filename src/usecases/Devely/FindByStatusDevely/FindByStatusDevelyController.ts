import { Request, Response } from 'express'
import { FindByStatusDevelyUseCase } from './FindByStatusDevelyUseCase'


export class FindByStatusDevelyController {
    constructor(
        private findByStatusDevelyUseCase: FindByStatusDevelyUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { status } = request.params;

        try {
            const data = await this.findByStatusDevelyUseCase.execute(status);

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}