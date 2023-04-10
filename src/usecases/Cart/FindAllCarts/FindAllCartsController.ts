import { Request, Response } from 'express'
import { FindAllCartsUseCase } from './FindAllCartsUseCase'


export class FindAllCartsController {
    constructor(
        private findAllCartsUseCase: FindAllCartsUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
          const data = await this.findAllCartsUseCase.execute()
          return response.status(200).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}