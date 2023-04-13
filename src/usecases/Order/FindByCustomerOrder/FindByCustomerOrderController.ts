import { Request, Response } from 'express'
import { FindByCustomerOrderUseCase } from './FindByCustomerOrderUseCase'


export class FindByCustomerOrderController {
    constructor(
        private findByCustomerOrderUseCase: FindByCustomerOrderUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id_customer } = request.params;

        try {
            const data = await this.findByCustomerOrderUseCase.execute(id_customer);

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}