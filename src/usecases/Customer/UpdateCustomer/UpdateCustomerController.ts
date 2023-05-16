import { Request, Response } from 'express'
import { UpdateCustomerUseCase } from './UpdateCustomerUseCase'


export class UpdateCustomerController {
    constructor(
        private updateCustomerUseCase: UpdateCustomerUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { firstName, lastName, identity, dateBorn } = request.body;

        try {
            const data = await this.updateCustomerUseCase
                .execute(id, { firstName, lastName, identity, dateBorn: new Date(dateBorn) });

            return response.status(201).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}