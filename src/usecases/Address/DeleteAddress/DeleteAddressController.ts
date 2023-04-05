import { Request, Response } from 'express'
import { DeleteAddressUseCase } from './DeleteAddressUseCase'


export class DeleteAddressController {
    constructor(
        private deleteAddressUseCase: DeleteAddressUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.deleteAddressUseCase.execute(id);

            return response.status(204);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}