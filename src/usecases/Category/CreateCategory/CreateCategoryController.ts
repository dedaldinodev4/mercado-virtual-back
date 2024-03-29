import { Request, Response } from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'


export class CreateCategoryController {
    constructor(
        private createCategoryUseCase: CreateCategoryUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        try {
            const data = await this.createCategoryUseCase.execute({
                name, description
            });

            return response.status(201).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}