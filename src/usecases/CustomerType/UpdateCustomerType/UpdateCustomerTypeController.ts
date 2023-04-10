import { Request, Response } from 'express'
import { UpdateCustomerTypeUseCase } from './UpdateCustomerTypeUseCase'


export class UpdateCustomerTypeController {
    constructor(
        private updateCustomerTypeUseCase: UpdateCustomerTypeUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name, description } = request.body;

        try {
            const data = await this.updateCustomerTypeUseCase.execute(id, {
                name, description
            });

            return response.status(201).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}