import { Request, Response } from 'express'
import { DeletePaymentUseCase } from './DeletePaymentUseCase'


export class DeletePaymentController {
    constructor(
        private deletePaymentUseCase: DeletePaymentUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.deletePaymentUseCase.execute(id);

            return response.status(204).end();
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}