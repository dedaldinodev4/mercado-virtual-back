import { Request, Response } from 'express'
import { FindByIdentityCustomerUseCase } from './FindByIdentityCustomerUseCase'


export class FindByIdentityCustomerController {
    constructor(
        private findByIdentityCustomerUseCase: FindByIdentityCustomerUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { identity } = request.params;

        try {
            const data = await this.findByIdentityCustomerUseCase.execute(identity);

            return response.status(200).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}