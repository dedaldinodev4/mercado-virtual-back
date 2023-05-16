import { Request, Response } from 'express'
import { DeleteDiscountUseCase } from './DeleteDiscountUseCase'


export class DeleteDiscountController {
    constructor(
        private deleteDiscountUseCase: DeleteDiscountUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.deleteDiscountUseCase.execute(id);

            return response.status(204).end();
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}