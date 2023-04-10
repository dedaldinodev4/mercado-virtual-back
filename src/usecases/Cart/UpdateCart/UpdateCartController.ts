import { Request, Response } from 'express'
import { UpdateCartUseCase } from './UpdateCartUseCase'


export class UpdateCartController {
    constructor(
        private updateCartUseCase: UpdateCartUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { status, token, id_session } = request.body;

        try {
            const data = await this.updateCartUseCase.execute(id, { status, token, id_session });

            return response.status(201).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}