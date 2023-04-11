import { Request, Response } from 'express'
import { FindAllDeveliesUseCase } from './FindAllDeveliesUseCase'


export class FindAllDeveliesController {
    constructor(
        private findAllDeveliesUseCase: FindAllDeveliesUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
          const data = await this.findAllDeveliesUseCase.execute()
          return response.status(200).json(data);
        } catch(err: any) {
            return response.status(400).json({
                message: err?.message || 'Unexpected error.'
            })
        }
    }
}