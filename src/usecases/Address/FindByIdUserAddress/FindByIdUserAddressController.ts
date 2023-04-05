import { Request, Response } from 'express'
import { FindByIdUserAddressUseCase } from './FindByIdUserAddressUseCase'


export class FindByIdUserAddressController {
    constructor(
        private findByIdUserAddressUseCase: FindByIdUserAddressUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id_user } = request.params;

        try {
            const data = await this.findByIdUserAddressUseCase.execute(id_user);

            return response.status(200).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}