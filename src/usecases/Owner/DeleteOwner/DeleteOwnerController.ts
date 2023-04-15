import { Request, Response } from 'express'
import { DeleteOwnerUseCase } from './DeleteOwnerUseCase'


export class DeleteOwnerController {
    constructor(
        private deleteOwnerUseCase: DeleteOwnerUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.deleteOwnerUseCase.execute(id);

            return response.status(204);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}