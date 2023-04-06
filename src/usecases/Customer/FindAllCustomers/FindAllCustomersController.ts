import { Request, Response } from 'express'
import { FindAllCustomersUseCase } from './FindAllCustomersUseCase'


export class FindAllCustomersController {
    constructor(
        private findAllCustomersUseCase: FindAllCustomersUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
          const data = await this.findAllCustomersUseCase.execute()
          return response.status(200).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}