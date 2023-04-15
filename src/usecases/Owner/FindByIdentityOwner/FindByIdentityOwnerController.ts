import { Request, Response } from 'express'
import { FindByIdentityOwnerUseCase } from './FindByIdentityOwnerUseCase'


export class FindByIdentityOwnerController {
    constructor(
        private findByIdentityOwnerUseCase: FindByIdentityOwnerUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { identity } = request.params;

        try {
            const data = await this.findByIdentityOwnerUseCase.execute(identity);

            return response.status(200).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}