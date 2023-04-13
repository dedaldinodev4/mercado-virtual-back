import { Request, Response } from 'express'
import { FindByTokenOrderUseCase } from './FindByTokenOrderUseCase'


export class FindByTokenOrderController {
    constructor(
        private findByTokenOrderUseCase: FindByTokenOrderUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { token } = request.params;

        try {
            const data = await this.findByTokenOrderUseCase.execute(token);

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}