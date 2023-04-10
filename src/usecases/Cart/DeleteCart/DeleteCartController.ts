import { Request, Response } from 'express'
import { DeleteCartUseCase } from './DeleteCartUseCase'


export class DeleteCartController {
    constructor(
        private deleteCartUseCase: DeleteCartUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.deleteCartUseCase.execute(id);

            return response.status(204);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}