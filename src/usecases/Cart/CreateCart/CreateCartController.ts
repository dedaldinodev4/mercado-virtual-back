import { Request, Response } from 'express'
import { CreateCartUseCase } from './CreateCartUseCase'
import crypt from 'node:crypto';


export class CreateCartController {
    constructor(
        private createCartUseCase: CreateCartUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id_customer } = request.body;
        const id_session = crypt.randomUUID();
        const token = crypt.randomUUID().concat(new Date().toISOString());
        const status = 'livre';

        try {
            const data = await this.createCartUseCase.execute({
                id_session,token, status, id_customer
            });

            return response.status(201).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}