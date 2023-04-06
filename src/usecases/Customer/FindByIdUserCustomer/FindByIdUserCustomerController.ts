import { Request, Response } from 'express'
import { FindByIdUserCustomerUseCase } from './FindByIdUserCustomerUseCase'


export class FindByIdUserCustomerController {
    constructor(
        private findByIdUserCustomerUseCase: FindByIdUserCustomerUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id_user } = request.params;

        try {
            const data = await this.findByIdUserCustomerUseCase.execute(id_user);

            return response.status(200).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}