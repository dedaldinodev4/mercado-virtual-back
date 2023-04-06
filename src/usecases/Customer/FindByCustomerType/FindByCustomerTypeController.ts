import { Request, Response } from 'express'
import { FindByCustomerTypeUseCase } from './FindByCustomerTypeUseCase'


export class FindByCustomerTypeController {
    constructor(
        private findByCustomerTypeUseCase: FindByCustomerTypeUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id_custmerType } = request.params;

            const data = await this.findByCustomerTypeUseCase.execute(id_custmerType)
            return response.status(200).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}