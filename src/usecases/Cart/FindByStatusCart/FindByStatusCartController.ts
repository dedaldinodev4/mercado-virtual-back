import { Request, Response } from 'express'
import { FindByStatusCartUseCase } from './FindByStatusCartUseCase'


export class FindByStatusCartController {
    constructor(
        private findByStatusCartUseCase: FindByStatusCartUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { status } = request.params;

        try {
            const data = await this.findByStatusCartUseCase.execute(status);

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}