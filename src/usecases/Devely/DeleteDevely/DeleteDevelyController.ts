import { Request, Response } from 'express'
import { DeleteDevelyUseCase } from './DeleteDevelyUseCase'


export class DeleteDevelyController {
    constructor(
        private deleteDevelyUseCase: DeleteDevelyUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.deleteDevelyUseCase.execute(id);

            return response.status(204);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}