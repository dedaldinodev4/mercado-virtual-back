import { Request, Response } from 'express'
import { FindByOrderDevelyUseCase } from './FindByOrderDevelyUseCase'


export class FindByOrderDevelyController {
    constructor(
        private findByOrderDevelyUseCase: FindByOrderDevelyUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id_order } = request.params;

        try {
            const data = await this.findByOrderDevelyUseCase.execute(id_order);

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}