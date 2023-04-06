import { Request, Response } from 'express'
import { FindByIdCustomerUseCase } from './FindByIdCustomerUseCase'


export class FindByIdCustomerController {
    constructor(
        private findByIdCustomerUseCase: FindByIdCustomerUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.findByIdCustomerUseCase.execute(id);

            return response.status(200).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}