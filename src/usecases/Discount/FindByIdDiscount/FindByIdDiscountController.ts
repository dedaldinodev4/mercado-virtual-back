import { Request, Response } from 'express'
import { FindByIdDiscountUseCase } from './FindByIdDiscountUseCase'


export class FindByIdDiscountController {
    constructor(
        private findByIdDiscountUseCase: FindByIdDiscountUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.findByIdDiscountUseCase.execute(id);

            return response.status(200).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}