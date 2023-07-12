import { Request, Response } from 'express'
import { UpdateOwnerUseCase } from './UpdateOwnerUseCase'


export class UpdateOwnerController {
    constructor(
        private updateOwnerUseCase: UpdateOwnerUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { firstName, lastName, identity, dateBorn, gender } = request.body;

        try {
            const data = await this.updateOwnerUseCase
                .execute(id, { 
                        firstName, lastName, identity, 
                        gender, dateBorn: new Date(dateBorn) 
                    }
                );

            return response.status(201).json(data);
        } catch (err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}