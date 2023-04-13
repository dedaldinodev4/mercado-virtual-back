import { Request, Response } from 'express'
import { FindByIdOrderUseCase } from './FindByIdOrderUseCase'


export class FindByIdOrderController {
    constructor(
        private findByIdOrderUseCase: FindByIdOrderUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.findByIdOrderUseCase.execute(id);

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}