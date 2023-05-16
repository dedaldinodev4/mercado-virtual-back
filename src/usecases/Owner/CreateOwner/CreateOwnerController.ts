import { Request, Response } from 'express'
import { CreateOwnerUseCase } from './CreateOwnerUseCase'


export class CreateOwnerController {
    constructor(
        private createOwnerUseCase: CreateOwnerUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { firstName, lastName, dateBorn,
            identity, id_user
        } = request.body;

        try {
            const data = await this.createOwnerUseCase.execute({
                firstName, lastName, dateBorn: new Date(dateBorn),
                identity, id_user
            });

            return response.status(201).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}