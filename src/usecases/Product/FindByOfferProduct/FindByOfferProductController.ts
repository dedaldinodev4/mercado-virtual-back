import { Request, Response } from 'express'
import { FindByOfferProductUseCase } from './FindByOfferProductUseCase'


export class FindByOfferProductController {
    constructor(
        private findByOfferProductUseCase: FindByOfferProductUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const data = await this.findByOfferProductUseCase.execute();

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}