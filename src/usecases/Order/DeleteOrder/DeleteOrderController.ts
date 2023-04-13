import { Request, Response } from 'express'
import { DeleteOrderUseCase } from './DeleteOrderUseCase'


export class DeleteOrderController {
    constructor(
        private deleteOrderUseCase: DeleteOrderUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.deleteOrderUseCase.execute(id);

            return response.status(204);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}