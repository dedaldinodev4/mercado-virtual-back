import { Request, Response } from 'express'
import { FindByIdAddressUseCase } from './FindByIdAddressUseCase'


export class FindByIdAddressController {
    constructor(
        private findByIdAddressUseCase: FindByIdAddressUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.findByIdAddressUseCase.execute(id);

            return response.status(200).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}