import { Request, Response } from 'express'
import { FindByOrderPaymentUseCase } from './FindByOrderPaymentUseCase'


export class FindByOrderPaymentController {
    constructor(
        private findByOrderPaymentUseCase: FindByOrderPaymentUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id_order } = request.params;

        try {
            const data = await this.findByOrderPaymentUseCase.execute(id_order);

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}