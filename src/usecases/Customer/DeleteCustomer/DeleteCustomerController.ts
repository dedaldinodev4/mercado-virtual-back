import { Request, Response } from 'express'
import { DeleteCustomerUseCase } from './DeleteCustomerUseCase'


export class DeleteCustomerController {
    constructor(
        private deleteCustomerUseCase: DeleteCustomerUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.deleteCustomerUseCase.execute(id);

            return response.status(204);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}