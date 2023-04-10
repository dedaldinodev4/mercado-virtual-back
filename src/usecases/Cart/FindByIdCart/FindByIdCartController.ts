import { Request, Response } from 'express'
import { FindByIdCartUseCase } from './FindByIdCartUseCase'


export class FindByIdCartController {
    constructor(
        private findByIdCartUseCase: FindByIdCartUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const data = await this.findByIdCartUseCase.execute(id);

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}