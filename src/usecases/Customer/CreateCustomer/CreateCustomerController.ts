import { Request, Response } from 'express'
import { CreateCustomerUseCase } from './CreateCustomerUseCase'


export class CreateCustomerController {
    constructor(
        private createCustomerUseCase: CreateCustomerUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { firstName, lastName, dateBorn, 
          identity, id_customerType, id_user 
        } = request.body;

        try {
            const data = await this.createCustomerUseCase.execute({
              firstName, lastName, dateBorn, 
              identity, id_customerType, id_user 
            });

            return response.status(201).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}