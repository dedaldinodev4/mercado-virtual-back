import { Request, Response } from 'express'
import { UpdateAddressUseCase } from './UpdateAddressUseCase'


export class UpdateAddressController {
    constructor(
        private updateAddressUseCase: UpdateAddressUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { city, hood, contry, postal_code } = request.body;

        try {
            const data = await this.updateAddressUseCase.execute(id, { city, hood, contry, postal_code });

            return response.status(201).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}